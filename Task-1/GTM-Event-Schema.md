# Task 1 – GTM Event Schema

## Project Overview

Client: OrthoNow Healthcare

Website Type: Orthopaedic Clinic Booking Website

Tracking Platform:
- Google Tag Manager (GTM)
- Google Analytics 4 (GA4)

## Objective

The purpose of this GTM Event Schema is to track important user interactions on the OrthoNow website. These events will help analyze user behaviour, identify booking funnel drop-offs, measure campaign performance, improve conversion rate, and optimize Google Ads campaigns.

## User Journey

A patient visits the OrthoNow website and follows this journey:

Homepage
    ↓
Clinic Page
    ↓
Book Consultation
    ↓
Booking Form
    ↓
Step 1 – Select Clinic & Specialty
    ↓
Step 2 – Enter Name, Phone & Preferred Date
    ↓
Step 3 – Confirm Booking
    ↓
Thank You Page

## Event Planning

| User Action | Track? | Reason |
|-------------|--------|--------|
| Homepage View | ✅ Yes | Measure website traffic |
| Clinic Page View | ✅ Yes | Identify popular clinic locations |
| Book Consultation Click | ✅ Yes | Measure user interest |
| Booking Step 1 Complete | ✅ Yes | Track booking funnel progress |
| Booking Step 2 Complete | ✅ Yes | Identify funnel drop-off |
| Booking Completed | ✅ Yes | Measure successful conversions |
| Call Now Click | ✅ Yes | Track phone call leads |
| WhatsApp Click | ✅ Yes | Track WhatsApp enquiries |
| Patient Guide Download | ✅ Yes | Measure lead generation |
| Blog Read | ✅ Yes | Measure content engagement |

## GTM Event Schema


| Event Name | GTM Trigger | Key Parameters | Purpose in GA4 |
|------------|-------------|----------------|----------------|
| page_view | Page View | page_name, page_type, city | Traffic Acquisition & Landing Page Analysis |
| clinic_page_view | Page View | clinic_name, city, specialty | Clinic Performance Dashboard |
| booking_started | Button Click | clinic_location, specialty, traffic_source | Booking Funnel Entry |
| booking_step_complete | Custom Event | step_number, step_name, clinic_location | Funnel Exploration |
| booking_completed | Custom Event | booking_id, clinic_location, specialty | Conversion Tracking |
| call_button_click | Click Trigger | phone_number, page_name, clinic_location | Phone Call Analysis |
| whatsapp_click | Link Click | page_name, clinic_location, traffic_source | WhatsApp Lead Tracking |
| patient_guide_download | Form Submission | guide_name, phone_number, clinic_location | Lead Generation |
| blog_scroll | Scroll Depth | article_name, scroll_percentage, category | Content Engagement |
| blog_read | Scroll Depth (90%) | article_name, reading_time, category | Audience Building |

## Booking Funnel Tracking

### Funnel Steps

| Step | User Action | GTM Trigger | GA4 Event |
|------|-------------|-------------|------------|
| Step 1 | Select Clinic & Specialty | Custom Event | booking_step_complete |
| Step 2 | Enter Name, Phone & Preferred Date | Custom Event | booking_step_complete |
| Step 3 | Confirm Booking | Custom Event | booking_completed |

### dataLayer JSON

window.dataLayer = window.dataLayer || [];

window.dataLayer.push({
  event: "booking_step_complete",
  step_number: 1,
  step_name: "location_specialty_selected",
  clinic_location: "{{clinic_location}}",
  specialty: "{{specialty}}"
});

window.dataLayer.push({
  event: "booking_step_complete",
  step_number: 2,
  step_name: "patient_details_entered",
  patient_name:"{{patient_name}}"
  phone_number: "{{phone_number}}",
  preferred_date: "{{preferred_date}}"
});

window.dataLayer.push({
  event: "booking_completed",
  step_number: 3,
  step_name: "booking_confirmed",
  booking_id: "{{booking_id}}"
  clinic_location: "{{clinic_location}}",
  specialty: "{{specialty}}"
});

## GA4 Funnel Exploration

The booking funnel will be created in GA4 Funnel Exploration using the following steps:

1. booking_started
2. booking_step_complete (Step 1)
3. booking_step_complete (Step 2)
4. booking_completed 

This funnel helps identify where users drop off during the booking process and allows the marketing team to optimize the consultation journey.

## Google Ads Conversion

The conversion action that will be imported into Google Ads is:

**Conversion Name:** consultation_form_submitted (booking_completed)

### Why this conversion?

This conversion represents a successful consultation booking, which is the primary business goal for OrthoNow. Unlike button clicks or page views, a completed booking directly indicates a qualified lead. Importing this conversion into Google Ads allows Smart Bidding strategies such as Maximize Conversions or Target CPA to optimize campaigns for users who are most likely to complete a consultation booking, improving ROI and campaign performance.

## Conclusion

This GTM Event Schema provides a complete tracking framework for the OrthoNow website. It enables accurate measurement of user interactions, booking funnel performance, lead generation, and campaign effectiveness. The implementation supports better business decisions, improved marketing optimization, and higher consultation conversion rates.