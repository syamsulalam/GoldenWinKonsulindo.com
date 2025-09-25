# Product Requirements Document: GoldenWinKonsulindo.com

## 1. Overview

GoldenWinKonsulindo.com is a professional, multi-page corporate-style website for Dr. Windijarto, SE. MBA, and his team of expert consultants. The website will serve as a digital hub for the consulting practice, detailing its services, industry expertise, and thought leadership to attract and inform potential clients. The design will be modern, professional, and trustworthy, inspired by high-end consulting firms.

## 2. Target Audience

*   Corporate executives and decision-makers
*   Government agencies and state-owned enterprises
*   Investment firms
*   Organizations seeking expert consultation on economic analysis, financial strategy, feasibility studies, and management.
*   Potential employees and industry professionals.

## 3. Key Features & Sections

The website will be a multi-page application built with React, using client-side routing for a smooth user experience.

### 3.1. Navigation Bar
*   **Logo:** Company Logo (`/img/logo.png`)
*   **Links:** Home, About Us, Services (dropdown), Industries (dropdown), Career, Insights (dropdown), Contact.
*   **Style:** Sticky at the top, transparent with a solid background on scroll. Will feature multi-level dropdowns (mega-menus) for Services and Insights to accommodate a rich content structure.

### 3.2. Home Page
A comprehensive landing page featuring key sections to give a full overview of the firm.
*   **Hero Section:** A visually impactful introduction to the firm.
*   **About Section:** A brief on the firm's mission and lead consultants.
*   **Services Overview:** High-level cards showcasing main service categories, linking to detailed pages.
*   **Team Section:** Profiles of the core team members.
*   **Projects Section:** A portfolio of key completed projects.
*   **Testimonials Section:** Client endorsements.
*   **Contact Section:** A clear call to action.

### 3.3. Services
*   **Structure:** A main navigation item with a dropdown menu linking to dedicated pages for each core service area.
*   **Service Categories & Sub-services:**
    *   **Business Planning:** Feasibility Studies, Business Plan Development (RBB).
    *   **Corporate Planning:** Mergers & Acquisitions (M&A), Business Process Management (BPM), Division Roadmaps.
    *   **Corporate Financial Planning:** Financial Modeling, Corporate Valuation, Investment Analysis.
    *   **Corporate Research:** Market Research, Economic Impact Analysis.
    *   **Human Resources Planning:** Talent Management, Organizational Design, HR Strategy.
    *   **Information System Planning:** IT Strategy & Audits, Digital Transformation Roadmaps.
    *   **Reporting & Governance:** Sustainability Reporting, Annual Report Development.

### 3.4. Industries
*   **Structure:** A navigation item leading to a page that details the various industries the firm serves, showcasing specialized expertise.
*   **Industries Served:** Banking & Finance, Logistics & Supply Chain, Manufacturing, Technology, Healthcare, Energy & Resources, Public Sector, Real Estate & Construction.

### 3.5. Career Page
*   **Structure:** A dedicated page for recruitment.
*   **Content:** Information on the firm's culture, values, and benefits. It will list any open positions.
*   **Job Application Form:** An integrated form allowing candidates to apply directly. Fields will include: Full Name, WhatsApp, Email Address, Applied Position, "How did you find out about this opening?", and file uploads for documents (CV/Resume, Portfolio, etc.).

### 3.6. Insights (Blog)
*   **Structure:** A content hub for thought leadership, organized by category.
*   **Categories:** The main navigation will have a dropdown for Insights with links to pages for each category:
    *   Research
    *   Webinar
    *   Blog
    *   News
    *   CSR (Corporate Social Responsibility)
*   **Functionality:** Each category page will list relevant articles. Clicking an article will lead to a full-page view of that post.

### 3.7. Footer
*   **Content:** Expanded footer with links to all major sections of the site, contact information, and copyright notice.

## 4. Non-Functional Requirements

*   **Design & UX:**
    *   **Aesthetics:** Premium, professional, and clean. A light theme with brand colors (gold, dark gray, white) will be used consistently.
    *   **Typography:** Legible, professional fonts.
    *   **Responsiveness:** Fully responsive for desktop, tablet, and mobile devices.
*   **Technology Stack:**
    *   **Frontend:** React 18+ with TypeScript.
    *   **Routing:** React Router DOM for multi-page navigation.
    *   **Styling:** Tailwind CSS only.
    *   **Deployment:** Static site generation via Vite.
*   **Performance:** Fast load times are essential. Images and assets should be optimized.
