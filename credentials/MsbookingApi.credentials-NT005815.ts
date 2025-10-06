import type {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class MsbookingApi implements ICredentialType {
    name = 'msbookingApi';

    displayName = 'Microsoft Graph OAuth2';

    documentationUrl = 'https://learn.microsoft.com/graph/api/resources/booking-api-overview';

    // Use OAuth2 (v2) with Microsoft identity platform
    extends = ['oAuth2'];

    properties: INodeProperties[] = [
        {
            displayName: 'Scope',
            name: 'scope',
            type: 'string',
            default: 'Bookings.Read.All Bookings.ReadWrite.All',
            description:
                'OAuth scopes for Microsoft Graph Bookings. Include at least Bookings.Read.All; for creating appointments, include Bookings.ReadWrite.All.',
        },
        {
            displayName: 'Tenant',
            name: 'tenantId',
            type: 'options',
            default: 'common',
            options: [
                { name: 'Common (multi-tenant)', value: 'common' },
                { name: 'Organizations', value: 'organizations' },
                { name: 'Consumers', value: 'consumers' },
            ],
            description:
                'Microsoft identity tenant for OAuth. Use common unless you need to restrict to a specific audience.',
        },
    ];

    // Attach bearer token to all requests
    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                Authorization: '=Bearer {{$credentials.oauthToken}}',
            },
        },
    };

    // Configure Microsoft identity endpoints for OAuth2 v2.0
    // n8n will substitute {{ $credentials.tenantId }} in these URLs
    oAuth2 = {
        authorizeUrl: {
            url: '=https://login.microsoftonline.com/{{$credentials.tenantId}}/oauth2/v2.0/authorize',
        },
        accessTokenUrl: {
            url: '=https://login.microsoftonline.com/{{$credentials.tenantId}}/oauth2/v2.0/token',
        },
    } as unknown as Record<string, unknown>;

    test: ICredentialTestRequest = {
        request: {
            baseURL: 'https://graph.microsoft.com/v1.0',
            url: '/me',
        },
    };
}
