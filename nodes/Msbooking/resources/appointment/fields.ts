import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAppointmentCreate = {
    operation: ['create'],
    resource: ['appointment'],
};

export const appointmentFields: INodeProperties[] = [
    {
        displayName: 'Business ID',
        name: 'businessId',
        type: 'string',
        default: '',
        required: true,
        description: 'ID of the booking business',
        displayOptions: { show: showOnlyForAppointmentCreate },
    },
    {
        displayName: 'Appointment (JSON)',
        name: 'appointment',
        type: 'json',
        default: {},
        required: true,
        description:
            'Raw bookingAppointment payload. See Microsoft Graph Bookings API for the required shape.',
        displayOptions: { show: showOnlyForAppointmentCreate },
    },
];