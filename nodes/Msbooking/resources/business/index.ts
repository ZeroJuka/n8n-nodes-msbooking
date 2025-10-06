import type { INodeProperties } from 'n8n-workflow';
import { businessGetDescription } from './get';

const showOnlyForBusiness = {
    resource: ['business'],
};

export const businessDescription: INodeProperties[] = [
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
    ...businessGetDescription,
];