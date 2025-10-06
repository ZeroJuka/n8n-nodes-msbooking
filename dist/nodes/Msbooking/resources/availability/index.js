"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.availabilityDescription = void 0;
const staffAvailability_1 = require("./staffAvailability");
const showOnlyForAvailability = {
    resource: ['availability'],
};
exports.availabilityDescription = [
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
    ...staffAvailability_1.availabilityFields,
];
//# sourceMappingURL=index.js.map