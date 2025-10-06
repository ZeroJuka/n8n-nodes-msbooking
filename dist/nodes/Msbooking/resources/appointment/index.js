"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentDescription = void 0;
const fields_1 = require("./fields");
const showOnlyForAppointment = {
    resource: ['appointment'],
};
exports.appointmentDescription = [
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
    ...fields_1.appointmentFields,
];
//# sourceMappingURL=index.js.map