import type { INodeProperties } from 'n8n-workflow';
import { availabilityFields } from './staffAvailability';

const showOnlyForAvailability = {
    resource: ['availability'],
};

export const availabilityDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForAvailability,
        },
        options: [
            {
                name: 'Get Staff Availability',
                value: 'getStaffAvailability',
                action: 'Check staff availability',
                description: 'Get availability for selected staff in a time window',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/solutions/bookingBusinesses/{{$parameter.businessId}}/getStaffAvailability',
                    },
                },
            },
        ],
        default: 'getStaffAvailability',
    },
    ...availabilityFields,
];