"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessGetDescription = void 0;
const showOnlyForBusinessGet = {
    operation: ['get'],
    resource: ['business'],
};
exports.businessGetDescription = [
    {
        displayName: 'Business ID',
        name: 'businessId',
        type: 'string',
        default: '',
        required: true,
        description: 'ID of the booking business',
        displayOptions: { show: showOnlyForBusinessGet },
    },
];
//# sourceMappingURL=get.js.map