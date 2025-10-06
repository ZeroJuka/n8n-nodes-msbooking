"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentFields = void 0;
const showOnlyForAppointmentCreate = {
    operation: ['create'],
    resource: ['appointment'],
};
exports.appointmentFields = [
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
        description: 'Raw bookingAppointment payload. See Microsoft Graph Bookings API for the required shape.',
        displayOptions: { show: showOnlyForAppointmentCreate },
    },
];
//# sourceMappingURL=fields.js.map