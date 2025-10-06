# n8n-nodes-msbooking

This is an n8n community node to connect to Microsoft Graph Bookings.

Microsoft Bookings is part of Microsoft 365 and lets organizations manage services, staff, and appointments. This node integrates with the Microsoft Graph Bookings API (`/v1.0/solutions/bookingBusinesses`) to list businesses, check staff availability, and create appointments.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

Supported operations:

- Business
  - Get many: GET `/solutions/bookingBusinesses`
  - Get: GET `/solutions/bookingBusinesses/{businessId}`
- Staff Availability
  - Get staff availability: POST `/solutions/bookingBusinesses/{businessId}/getStaffAvailability`
- Appointment
  - Create appointment: POST `/solutions/bookingBusinesses/{businessId}/appointments`

## Credentials

Authentication uses OAuth2 with the Microsoft identity platform.

Prerequisites:
- A Microsoft Entra ID (Azure AD) tenant with access to Microsoft Bookings.
- An app registration in the Azure portal.

Steps:
- In Azure portal, register a new application.
- Add redirect/callback URL from your n8n credentials screen (your n8n base URL + `/rest/oauth2-credential/callback`).
- Grant delegated permissions to Microsoft Graph:
  - `Bookings.Read.All` (read availability and business data)
  - `Bookings.ReadWrite.All` (create appointments)
- Consent the permissions (admin consent recommended).
- In n8n, create credentials “Microsoft Graph OAuth2” and set Tenant (e.g. `common`), Client ID, Client Secret, and Scope:
  - `Bookings.Read.All Bookings.ReadWrite.All`

## Compatibility

Minimum n8n version: 1.22+

Known notes:
- This node uses n8n’s declarative routing. No custom execute function is required.
- For appointment creation, provide the raw `bookingAppointment` JSON payload expected by Graph.

## Usage

Examples

- Get staff availability
  - Resource: `Staff Availability`
  - Operation: `Get Staff Availability`
  - Fields:
    - Business ID: your booking business ID
    - Staff IDs: e.g. `staffId1, staffId2`
    - Time Zone: e.g. `UTC`
    - Start Date Time: `2025-10-07T09:00:00`
    - End Date Time: `2025-10-07T17:00:00`
    - Time Slot Duration: `PT30M`

- Create appointment
  - Resource: `Appointment`
  - Operation: `Create`
  - Fields:
    - Business ID: your booking business ID
    - Appointment (JSON): raw `bookingAppointment` payload, for example:

```
{
  "customerEmailAddress": "customer@example.com",
  "serviceId": "{service-id}",
  "staffMemberIds": ["{staff-id}"],
  "startDateTime": { "dateTime": "2025-10-07T10:00:00", "timeZone": "UTC" },
  "endDateTime": { "dateTime": "2025-10-07T10:30:00", "timeZone": "UTC" }
}
```

_By the time users are looking for community nodes, they probably already know n8n basics. But if you expect new users, you can link to the [Try it out](https://docs.n8n.io/try-it-out/) documentation to help them get started._

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* Microsoft Graph Bookings API: https://learn.microsoft.com/graph/api/resources/booking-api-overview

## Version history

_This is another optional section. If your node has multiple versions, include a short description of available versions and what changed, as well as any compatibility impact._
