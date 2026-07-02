# Task 3 - Integration Design

## End-to-End Integration Architecture

When a patient submits the consultation form, the landing page first validates the Name, Phone Number, and Clinic Preference. After successful validation, a `consultation_form_submitted` event is pushed to the dataLayer so Google Tag Manager can send the conversion event to Google Analytics 4 and Google Ads.

The form data is then sent to a backend API using a POST request. The backend checks whether a contact with the same phone number already exists in HubSpot. Since HubSpot mainly performs duplicate checks using email, I would first search the contact using the Phone property. If the phone number already exists, the existing contact will be updated. Otherwise, a new contact will be created.

The contact information stored in HubSpot includes:
- Name
- Phone Number
- Clinic Preference
- Source = Google Ads - Consultation Landing Page
- Lead Status = New Enquiry

After the HubSpot operation is completed successfully, the backend sends a request to the Karix WhatsApp Business API to deliver a confirmation message to the patient. At the same time, Google Tag Manager records the conversion event so that Google Ads can optimize campaigns based on successful consultation requests.

I would use the HubSpot CRM API instead of embedded forms because it provides more flexibility and allows custom validation and phone-based contact management.

---

## Biggest Failure Point and Fallback

The biggest challenge is duplicate contact handling because HubSpot uses email for deduplication by default. Since this form only collects a phone number, duplicate contacts may be created.

To avoid this, the backend first searches HubSpot using the phone number before creating a new contact. If a matching contact is found, the record is updated instead of creating another contact. If the HubSpot API is temporarily unavailable, the lead should be stored in a temporary database or queue and retried automatically after a short interval.

---

## WhatsApp SLA and Monitoring

The confirmation WhatsApp message should be delivered within two minutes after form submission.

Possible reasons for delay include API failures, network issues, server downtime, or Karix service delays.

To monitor this process, every API request and response should be logged with timestamps. Failed requests should automatically retry after a short delay. If the message is still not delivered within two minutes, an alert should be sent to the support team so the issue can be investigated quickly.

This approach helps ensure reliable lead processing, accurate CRM data, and timely communication with patients.