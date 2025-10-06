import { type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { businessDescription } from './resources/business';
import { availabilityDescription } from './resources/availability';
import { appointmentDescription } from './resources/appointment';

export class Msbooking implements INodeType {
	description: INodeTypeDescription = {
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
			...businessDescription,
			...availabilityDescription,
			...appointmentDescription,
		],
	};
}
