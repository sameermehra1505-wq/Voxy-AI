# Voxy Landing Page - Product Requirements Document

## Original Problem Statement
Build a modern, minimal SaaS landing page for a B2B AI startup named "Voxy" selling AI voice agents to businesses.

## User Personas
- Startup founders
- Sales leaders  
- Business owners
- Teams receiving inbound sales or support calls

## Core Requirements
- Single-page landing page
- Hero Section with bold headline and CTA
- How It Works (3 steps)
- Differentiator / Reveal Section
- Use Cases Grid (4 cards)
- Lead Capture Form (5 fields)
- Footer
- Mobile responsive
- Dark hero with light sections
- Deep purple/violet accents

## What's Been Implemented (Jan 2026)
- [x] Hero section with gradient text, CTA button, sound wave animation
- [x] How It Works section with 3 step cards
- [x] Differentiator section with mock audio player
- [x] Use Cases grid (Inbound Sales, Lead Qualification, Appointment Booking, Customer Support)
- [x] Lead capture form with all 5 fields
- [x] Form submission API (mocked - stores in memory)
- [x] Success message after form submission
- [x] Footer with copyright
- [x] Mobile responsive design
- [x] Hybrid dark/light theme
- [x] All tests passing (100% backend, frontend, integration)

## Tech Stack
- Frontend: React, Tailwind CSS, Lucide React icons
- Backend: FastAPI, Python
- Fonts: Manrope (headings), Inter (body)

## Backlog / Future Features
- P1: Connect form to n8n webhook for actual lead processing
- P2: Add testimonials section
- P2: Add social proof / client logos
- P3: Add animated illustrations
- P3: A/B testing for CTA variations

## Notes
- Form webhook is MOCKED - needs to be connected to n8n later
- No pricing section included (as per requirements)
- No login/dashboard (marketing page only)
