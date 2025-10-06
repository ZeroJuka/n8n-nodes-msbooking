import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class MsbookingApi implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    extends: string[];
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
    oAuth2: Record<string, unknown>;
    test: ICredentialTestRequest;
}
