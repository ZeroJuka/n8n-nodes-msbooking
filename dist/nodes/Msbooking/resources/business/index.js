"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessDescription = void 0;
const get_1 = require("./get");
const showOnlyForBusiness = {
    resource: ['business'],
};
exports.businessDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForBusiness,
        },
        options: [
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'List booking businesses',
                description: 'List all booking businesses',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/solutions/bookingBusinesses',
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a booking business',
                description: 'Get a single booking business by ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/solutions/bookingBusinesses/{{$parameter.businessId}}',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...get_1.businessGetDescription,
];
//# sourceMappingURL=index.js.map