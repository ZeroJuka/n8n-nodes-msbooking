"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Msbooking = void 0;
const business_1 = require("./resources/business");
const availability_1 = require("./resources/availability");
const appointment_1 = require("./resources/appointment");
class Msbooking {
    constructor() {
        this.description = {
            displayName: 'Msbooking',
            name: 'msbooking',
            icon: { light: 'file:msbooking.svg', dark: 'file:msbooking.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Msbooking API',
            defaults: {
                name: 'Msbooking',
            },
            usableAsTool: true,
            inputs: ['main'],
            outputs: ['main'],
            credentials: [{ name: 'msbookingApi', required: true }],
            requestDefaults: {
                baseURL: 'https://graph.microsoft.com/v1.0',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Business',
                            value: 'business',
                        },
                        {
                            name: 'Staff Availability',
                            value: 'availability',
                        },
                        {
                            name: 'Appointment',
                            value: 'appointment',
                        },
                    ],
                    default: 'business',
                },
                ...business_1.businessDescription,
                ...availability_1.availabilityDescription,
                ...appointment_1.appointmentDescription,
            ],
        };
    }
}
exports.Msbooking = Msbooking;
//# sourceMappingURL=Msbooking.node.js.map