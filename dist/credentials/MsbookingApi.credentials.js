"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsbookingApi = void 0;
class MsbookingApi {
    constructor() {
        this.name = 'msbookingApi';
        this.displayName = 'Msbooking API';
        this.documentationUrl = 'https://github.com/org/-msbooking?tab=readme-ov-file#credentials';
        this.properties = [
            {
                displayName: 'Access Token',
                name: 'accessToken',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=Bearer {{$credentials.accessToken}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://api.example.com/v2',
                url: '/v1/user',
            },
        };
    }
}
exports.MsbookingApi = MsbookingApi;
//# sourceMappingURL=MsbookingApi.credentials.js.map