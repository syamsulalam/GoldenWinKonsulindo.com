# Task List for GoldenWinKonsulindo.com Development

This list breaks down the development of the website into manageable tasks.

### Phase 1: Project Scaffolding & Foundational Components

- [x] **Task 1: Initial Project Setup**
  - [x] Create React application with TypeScript.
  - [x] Set up `index.html` with Tailwind CSS CDN link.
  - [x] Create `metadata.json` and markdown docs (`prd.md`, `tasks.md`, `memory.md`).

- [x] **Task 2: Data Modeling and Content Extraction**
  - [x] Create `types.ts` to define interfaces for `Project`, `Service`, `Testimonial`, etc.
  - [x] Create `constants.ts` to store all data transcribed from Dr. Windijarto's CV.
    - [x] Personal Information
    - [x] Services list (derived from expertise)
    - [x] Consulting Projects (the long list)
    - [x] Placeholder testimonials.

- [x] **Task 3: Core Layout & Reusable Components**
  - [x] Create the main `App.tsx` component with the primary dark background and layout structure.
  - [x] Develop the `Navbar.tsx` component with smooth-scrolling links.
  - [x] Develop the `Footer.tsx` component.

### Phase 2: Building Page Sections

- [x] **Task 4: Develop Hero Section**
  - [x] Create `components/Hero.tsx`.
  - [x] Style with a background image and overlay.
  - [x] Add headline, sub-headline, and CTA button.

- [x] **Task 5: Develop About Section**
  - [x] Create `components/About.tsx`.
  - [x] Layout with Dr. Windijarto's image and biographical text.
  - [x] Pull data from `constants.ts`.

- [x] **Task 5.5: Develop Team Section**
  - [x] Create `teams.md` to store CV data.
  - [x] Add team member data to `constants.ts`.
  - [x] Create `components/Team.tsx` with member profiles.
  - [x] Integrate into `App.tsx` and `Navbar.tsx`.

- [x] **Task 6: Develop Services Section**
  - [x] Create `components/Services.tsx`.
  - [x] Design a card-based layout for services.
  - [x] Map over the services data from `constants.ts` to render the cards.

- [x] **Task 7: Develop Projects Section**
  - [x] Create `components/Projects.tsx`.
  - [x] Design a clean, readable table or list to display the project portfolio.
  - [x] Populate with the extensive project data from `constants.ts`.
  - [x] Implement a simple year filter for usability.

- [x] **Task 8: Develop Testimonials Section**
  - [x] Create `components/Testimonials.tsx`.
  - [x] Implement a card-based layout for testimonials.
  - [x] Use placeholder data from `constants.ts`.

- [x] **Task 9: Develop Contact Section**
  - [x] Add a strong Call to Action.
  - [x] Display contact information.

### Phase 3: Finalization & Multi-Page Implementation

- [x] **Task 10: Integration and Final Review**
  - [x] Assemble all sections within `App.tsx` in the correct order.
  - [x] Test all navigation links and smooth scrolling.
  - [x] Perform a full design and content review.

- [x] **Task 11: Responsiveness and Polish**
  - [x] Thoroughly test and refine the layout on various screen sizes (mobile, tablet, desktop).
  - [x] Add subtle animations or transitions for a more polished user experience.
  - [x] Ensure all accessibility best practices are followed.
  - [x] Update Navbar text color to change on scroll.
  - [x] Update contact info in Contact section and Footer.

- [x] **Task 12: Implement Team Member Detail Pages**
  - [x] Implement multi-page routing using `react-router-dom`.
  - [x] Restructure `App.tsx` to handle page routes.
  - [x] Create the `TeamMemberPage.tsx` component for detailed profiles.
  - [x] Add Dr. Windijarto's full CV to `teams.md` and update `constants.ts` with all member details.
  - [x] Make team member cards on homepage link to their respective detail pages.
  - [x] Update `Navbar.tsx` to handle routing between pages and homepage sections.

- [x] **Task 13: Asset & Team Updates**
    - [x] Add Syamsul Alam to the team and update `teams.md`.
    - [x] Update all image paths to use a centralized `/img/` directory.
    - [x] Replace text logo in Navbar with an image logo.

- [x] **Task 14: Add Skills Section to Team Profiles**
    - [x] Update `TeamMember` type to include a `skills` array.
    - [x] Populate skills data for all team members in `constants.ts`.
    - [x] Conditionally render a "Skills Highlights" section on `TeamMemberPage.tsx`.