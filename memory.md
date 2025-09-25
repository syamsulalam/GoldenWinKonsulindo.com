# GoldenWinKonsulindo.com - Project Memory

## 1. Project Core Identity

*   **Project Name:** GoldenWinKonsulindo.com
*   **Client/Owner:** Dr. Windijarto, SE. MBA
*   **Core Purpose:** To create a premium, professional single-page website that serves as a digital portfolio for Dr. Windijarto's consulting services. The site should establish credibility, showcase deep expertise, and generate client leads.

## 2. Design and Aesthetics

*   **Inspiration:** The layout and professional feel of the KMMB Consulting website screenshot.
*   **Theme:** Light, sophisticated, and professional.
    *   **Backgrounds:** A clean white (`#FFFFFF`) or very light gray (`slate-50`). Secondary sections will use a slightly darker gray (`slate-100` or `gray-50`) for contrast. The footer will be dark to anchor the page.
    *   **Text:** Primarily a dark charcoal or slate gray (`slate-800` or `gray-800`) for high contrast and readability.
    *   **Accent Color:** A darker, more muted gold (e.g., `#B8860B`) suitable for light backgrounds to maintain a professional and prestigious feel.
*   **Imagery:** Use high-quality, professional stock photos for backgrounds (e.g., modern office spaces, cityscapes, abstract business concepts). Dr. Windijarto's personal photo will be taken from his CV.
*   **Typography:** Clean and modern. A sans-serif font like Inter or a similar default from Tailwind's stack is preferred for its readability and professional look.

## 3. Content Strategy

*   **Source of Truth:** All professional information (experience, education, projects, expertise) MUST be derived from the provided CV of Dr. Windijarto.
*   **Tone of Voice:** Professional, expert, confident, and results-oriented.
*   **Key Selling Point:** The extensive list of past consulting projects is the most powerful asset. This section must be well-designed, easy to read, and prominently featured to demonstrate the depth and breadth of his experience.

## 4. Technical Specifications

*   **Framework:** React 18+
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS ONLY. Loaded via CDN in `index.html`. No other styling methods are to be used.
*   **Architecture:** Single-Page Application (SPA). All content will be on one page, with navigation links scrolling to the relevant sections. No routing library (like React Router) is needed.
*   **State Management:** Primarily `useState` for simple UI interactions (like the project filter). No complex state management library is required.
*   **Data:** All website content will be hardcoded in a `constants.ts` file. There is no backend or API integration.
*   **Environment:** The application must be self-contained and run in a standard browser environment. API keys are not relevant to this project.