"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsbookingApi = void 0;
class MsbookingApi {
    constructor() {
        this.name = 'msbookingApi';
        this.displayName = 'Microsoft Graph OAuth2';
        this.documentationUrl = 'https://learn.microsoft.com/graph/api/resources/booking-api-overview';
        this.extends = ['oAuth2'];
        this.properties = [
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'string',
                default: 'Bookings.Read.All Bookings.ReadWrite.All',
                description: 'OAuth scopes for Microsoft Graph Bookings. Include at least Bookings.Read.All; for creating appointments, include Bookings.ReadWrite.All.',
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
                description: 'Microsoft identity tenant for OAuth. Use common unless you need to restrict to a specific audience.',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=Bearer {{$credentials.oauthToken}}',
                },
            },
        };
        this.oAuth2 = {
            authorizeUrl: {
                url: '=https://login.microsoftonline.com/{{$credentials.tenantId}}/oauth2/v2.0/authorize',
            },
            accessTokenUrl: {
                url: '=https://login.microsoftonline.com/{{$credentials.tenantId}}/oauth2/v2.0/token',
            },
        };
        this.test = {
            request: {
                baseURL: 'https://graph.microsoft.com/v1.0',
                url: '/me',
            },
        };
    }
}
exports.MsbookingApi = MsbookingApi;
//# sourceMappingURL=MsbookingApi.credentials.js.map