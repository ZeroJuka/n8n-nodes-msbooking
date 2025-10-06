import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBusinessGet = {
    operation: ['get'],
    resource: ['business'],
};

export const businessGetDescription: INodeProperties[] = [
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