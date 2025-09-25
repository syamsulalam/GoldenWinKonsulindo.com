# Task List for GoldenWinKonsulindo.com Development

This list breaks down the development of the website into manageable tasks.

### Phase 1: Project Scaffolding & Foundational Components

- [x] **Task 1: Initial Project Setup**
- [x] **Task 2: Data Modeling and Content Extraction**
- [x] **Task 3: Core Layout & Reusable Components**

### Phase 2: Building Page Sections

- [x] **Task 4: Develop Hero Section**
- [x] **Task 5: Develop About Section**
- [x] **Task 5.5: Develop Team Section**
- [x] **Task 6: Develop Services Section**
- [x] **Task 7: Develop Projects Section**
- [x] **Task 8: Develop Testimonials Section**
- [x] **Task 9: Develop Contact Section**

### Phase 3: Finalization & Multi-Page Implementation

- [x] **Task 10: Integration and Final Review**
- [x] **Task 11: Responsiveness and Polish**
- [x] **Task 12: Implement Team Member Detail Pages**
- [x] **Task 13: Asset & Team Updates**
- [x] **Task 14: Add Skills Section to Team Profiles**

### Phase 4: Expansion to Full Corporate Site

- [x] **Task 15: Data Structure Expansion**
  - [x] Update `types.ts` with new interfaces for detailed services (with sub-services), industries, and blog articles (`Article`).
  - [x] Populate `constants.ts` with the expanded data for all new services, industries, and create placeholder blog articles for each category.

- [ ] **Task 16: Implement Mega-Menu Navbar**
  - [ ] Refactor `Navbar.tsx` to support complex, multi-level dropdown menus for "Services" and "Insights".
  - [ ] Add the new top-level links: "Industries" and "Career".

- [x] **Task 17: Build Service Pages**
  - [x] Create a generic `ServiceDetailPage.tsx` component to display detailed information about a service and its sub-services.
  - [x] Add new routes in `App.tsx` for each individual service page (e.g., `/services/business-planning`).
  - [x] Update the `Services.tsx` component on the homepage to link each service card to its new detail page.

- [ ] **Task 18: Build Industries Page**
  - [ ] Create an `IndustriesPage.tsx` component that lists all served industries with brief descriptions.
  - [ ] Add the corresponding route in `App.tsx`.

- [ ] **Task 19: Build Career Page**
  - [ ] Create `CareerPage.tsx` to house career information and job listings.
  - [ ] Develop a reusable `JobApplicationForm.tsx` component with validation and file upload capabilities.
  - [ ] Add the route for the career page in `App.tsx`.

- [ ] **Task 20: Build Insights (Blog) Functionality**
  - [ ] Create `ArticleListPage.tsx`, a dynamic component that can display a list of articles based on a URL parameter (e.g., `/insights/news`).
  - [ ] Create `ArticleDetailPage.tsx` to display the content of a single article.
  - [ ] Define the necessary routes in `App.tsx` for both article lists and individual articles (e.g., `/insights/:category`, `/article/:articleId`).