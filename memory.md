# GoldenWinKonsulindo.com - Project Memory

## 1. Project Core Identity

*   **Project Name:** GoldenWinKonsulindo.com
*   **Client/Owner:** Dr. Windijarto, SE. MBA
*   **Core Purpose:** To create a premium, professional multi-page website that serves as the primary digital presence for the GoldenWinKonsulindo consulting firm. The site should establish credibility, showcase deep expertise across various services and industries, generate client leads, and attract talent.

## 2. Design and Aesthetics

*   **Inspiration:** The layout and professional feel of the KMMB Consulting website screenshot, particularly for the navigation and content structure.
*   **Theme:** Light, sophisticated, and professional.
    *   **Backgrounds:** A clean white (`#FFFFFF`) or very light gray (`slate-50`).
    *   **Text:** Primarily a dark charcoal or slate gray (`slate-800` or `gray-800`).
    *   **Accent Color:** A darker, more muted gold (e.g., `#B8860B`).
*   **Navigation:** The navigation will feature a complex "mega-menu" style dropdown, inspired by the KMMB screenshot, to accommodate the expanded service, industry, and insights offerings.
*   **Imagery:** High-quality, professional stock photos and team member portraits.
*   **Typography:** Clean and modern sans-serif fonts.

## 3. Content Strategy

*   **Source of Truth:** All professional information for the core team MUST be derived from their provided CVs.
*   **Tone of Voice:** Professional, expert, confident, and results-oriented.
*   **Key Selling Point:** The depth of expertise demonstrated through detailed service pages, industry specializations, an extensive project portfolio, and thought leadership articles in the "Insights" section.
*   **New Content Types:** The site will now support in-depth service descriptions with sub-services, industry-specific focus details, career opportunity descriptions, and categorized blog articles (news, research, CSR, etc.).

## 4. Technical Specifications

*   **Framework:** React 18+
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS ONLY.
*   **Architecture:** Multi-Page Application (MPA) utilizing client-side routing (React Router) to provide a seamless user experience without full page reloads. This supports a more complex site structure with dedicated pages for services, industries, careers, and blog content.
*   **State Management:** Primarily `useState` and other React hooks.
*   **Data:** All website content will be hardcoded in a `constants.ts` file. There is no backend or API integration.
*   **Environment:** The application must be self-contained and run in a standard browser environment.
