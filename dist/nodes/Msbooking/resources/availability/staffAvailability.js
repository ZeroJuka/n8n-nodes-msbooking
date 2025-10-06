"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.availabilityFields = void 0;
const showOnlyForAvailability = {
    operation: ['getStaffAvailability'],
    resource: ['availability'],
};
exports.availabilityFields = [
    {
        displayName: 'Business ID',
        name: 'businessId',
        type: 'string',
        default: '',
        required: true,
        description: 'ID of the booking business',
        displayOptions: { show: showOnlyForAvailability },
    },
    {
        displayName: 'Staff IDs (comma-separated)',
        name: 'staffIds',
        type: 'string',
        default: '',
        required: true,
        description: 'List of staff IDs separated by commas',
        displayOptions: { show: showOnlyForAvailability },
        routing: {
            send: {
                type: 'body',
                property: 'staffIds',
                value: '={{ $parameter.staffIds.split(",").map(s => s.trim()).filter(Boolean) }}',
            },
        },
    },
    {
        displayName: 'Time Zone',
        name: 'timeZone',
        type: 'string',
        default: 'UTC',
        description: 'IANA or Windows time zone name used for date-time objects',
        displayOptions: { show: showOnlyForAvailability },
    },
    {
        displayName: 'Start Date Time',
        name: 'startDateTime',
        type: 'string',
        default: '',
        required: true,
        description: 'Start of the window in ISO 8601 (e.g. 2025-10-07T09:00:00)',
        displayOptions: { show: showOnlyForAvailability },
        routing: {
            send: {
                type: 'body',
                property: 'startDateTime',
                value: '={{ { dateTime: $parameter.startDateTime, timeZone: $parameter.timeZone || "UTC" } }}',
            },
        },
    },
    {
        displayName: 'End Date Time',
        name: 'endDateTime',
        type: 'string',
        default: '',
        required: true,
        description: 'End of the window in ISO 8601 (e.g. 2025-10-07T17:00:00)',
        displayOptions: { show: showOnlyForAvailability },
        routing: {
            send: {
                type: 'body',
                property: 'endDateTime',
                value: '={{ { dateTime: $parameter.endDateTime, timeZone: $parameter.timeZone || "UTC" } }}',
            },
        },
    },
    {
        displayName: 'Time Slot Duration',
        name: 'timeSlotDuration',
        type: 'string',
        default: 'PT30M',
        description: 'ISO 8601 duration for each slot (e.g. PT30M for 30 minutes)',
        displayOptions: { show: showOnlyForAvailability },
        routing: {
            send: { type: 'body', property: 'timeSlotDuration' },
        },
    },
];
//# sourceMappingURL=staffAvailability.js.map