# Design Specifications

## Overview

This document outlines the design specifications for the PayNomad Capital Ltd. ultra-luxury financial services landing page. As the UI/UX Agent, you are responsible for ensuring that all visual elements convey trust, exclusivity, and financial expertise through clean design and strategic use of the brand's color palette.

## Brand Identity

### Color Palette

**Primary Colors:**
- Navy Blue: #2c3e50 - Conveys trust, stability, and professionalism
- Deep Blue: #0077be - Adds depth and visual interest
- Gold: #d4af37 - Represents luxury and success
- Cream: #faf4eb - Provides warmth and approachability

**Secondary Colors:**
- Light Gray: #f8f9fa - Background and spacing
- Charcoal: #333333 - Text and details
- Accent Blue: #4a90e2 - Highlights and calls to action
- Success Green: #28a745 - Positive indicators

### Typography

**Primary Font: Playfair Display**
- Use for headings and important text
- Weights: Regular (400), Semi-Bold (600), Bold (700)
- Conveys elegance and tradition

**Secondary Font: Montserrat**
- Use for body text and UI elements
- Weights: Light (300), Regular (400), Medium (500), Semi-Bold (600)
- Provides clean, modern readability

**Font Sizes:**
- H1: 48px/3rem (Playfair Display Bold)
- H2: 36px/2.25rem (Playfair Display Semi-Bold)
- H3: 24px/1.5rem (Playfair Display Regular)
- Body Large: 18px/1.125rem (Montserrat Regular)
- Body: 16px/1rem (Montserrat Regular)
- Small: 14px/0.875rem (Montserrat Light)

### Spacing System

- Base unit: 8px
- Spacing scale: 8px, 16px, 24px, 32px, 48px, 64px, 96px
- Section padding: 96px (top/bottom), 48px (sides on mobile)
- Component padding: 24px
- Button padding: 16px 24px

## Component Specifications

### Navigation

- Height: 80px
- Background: Transparent with subtle gradient on scroll
- Logo: Left-aligned, 40px height
- Links: Right-aligned, Montserrat Medium, 16px
- Hover effect: Subtle underline animation
- Mobile: Hamburger menu with elegant slide-in animation

### Hero Section

- Height: 100vh (minimum 800px)
- Background: Subtle animated gradient transitioning between navy (#2c3e50) and deep blue (#0077be)
- Company Name: Playfair Display Bold, 64px, centered
- Tagline: Montserrat Light, 24px, centered
- Scroll Indicator: Subtle animated arrow

### Service Cards

- Dimensions: 320px × 400px
- Background: White (#ffffff)
- Border: None
- Shadow: Subtle elevation (0px 8px 30px rgba(0, 0, 0, 0.12))
- Icon: 48px, centered, navy color
- Title: Playfair Display Semi-Bold, 24px
- Description: Montserrat Regular, 16px
- Hover Effect: Slight scale (1.05) and deeper shadow

### Blog Preview Cards

- Dimensions: 380px × 320px
- Background: Navy (#2c3e50)
- Text: White (#ffffff)
- Image: 380px × 200px
- Title: Playfair Display Regular, 20px
- Meta: Montserrat Light, 14px
- Hover Effect: Subtle gold border animation

### Contact Form

- Background: Cream (#faf4eb)
- Width: 100% (max-width: 600px)
- Input Height: 56px
- Input Style: Borderless with bottom border only
- Labels: Montserrat Medium, 14px
- Submit Button: Navy background, gold text, 16px padding

## Responsive Breakpoints

- Mobile: 0-767px
- Tablet: 768px-1023px
- Desktop: 1024px-1439px
- Large Desktop: 1440px+

## Animation Guidelines

- Transitions: Smooth, 300ms duration, ease-in-out timing
- Hover Effects: Subtle, 150ms duration
- Page Transitions: Elegant fade transitions between sections
- Scroll Animations: Subtle fade and slide effects on scroll
- Loading States: Minimalist loading indicators with brand colors

## Accessibility Standards

- Color Contrast: WCAG AA compliance minimum (4.5:1 for normal text)
- Focus States: Visible focus indicators for keyboard navigation
- Text Sizing: Scalable text that works with browser zoom
- Alternative Text: Descriptive alt text for all images
- Semantic HTML: Proper heading hierarchy and landmark regions

## Implementation Tasks

### Task 1: Create Component Library
- Develop all UI components according to specifications
- Implement responsive behavior for all breakpoints
- Create animation library for consistent interactions
- Document component usage guidelines

### Task 2: Implement Page Sections
- Build all page sections according to design specifications
- Ensure responsive layout across all devices
- Implement scroll animations and transitions
- Optimize performance for smooth interactions

### Task 3: Accessibility Implementation
- Conduct accessibility audit of all components
- Implement necessary improvements for WCAG compliance
- Test with screen readers and keyboard navigation
- Document accessibility features

## Collaboration Requirements

- Coordinate with the Back-End Agent for form implementation
- Work with the AI Specialist for any AI-driven UI elements
- Collaborate with the Security Agent on secure form design

## Deliverables

- Complete component library
- Responsive implementation of all page sections
- Animation and interaction specifications
- Accessibility documentation
- Design system documentation
