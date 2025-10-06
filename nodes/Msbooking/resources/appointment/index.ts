import type { INodeProperties } from 'n8n-workflow';
import { appointmentFields } from './fields';

const showOnlyForAppointment = {
    resource: ['appointment'],
};

export const appointmentDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForAppointment,
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                action: 'Create a booking appointment',
                description: 'Create a booking appointment in a business',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/solutions/bookingBusinesses/{{$parameter.businessId}}/appointments',
                        body: '={{ $parameter.appointment }}',
                    },
                },
            },
        ],
        default: 'create',
    },
    ...appointmentFields,
];