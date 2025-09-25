# Deployment Guide for GoldenWinKonsulindo.com

This guide provides step-by-step instructions on how to develop, build, and deploy this React (Vite) website to Cloudflare Pages.

## Prerequisites

Before you begin, ensure you have the following installed:
1.  [Git](https://git-scm.com/downloads)
2.  [Node.js](https://nodejs.org/) (which includes `npm`)
3.  A [GitHub](https://github.com/) account.
4.  A [Cloudflare](https://www.cloudflare.com/) account.

## Part 1: Local Development

To run the website on your local machine for testing and development:

1.  **Clone the repository** (if you haven't already).
2.  **Open a terminal** in the project's root directory.
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will open the website in your browser, typically at `http://localhost:5173`. The site will automatically reload when you make changes to the source code.

## Part 2: Deployment to Cloudflare Pages

### Step 1: Push Your Project to a GitHub Repository

Cloudflare Pages deploys directly from your GitHub repository.

1.  **Create a new repository on GitHub** if you don't have one.
2.  **Push your project code** to the `main` branch of your repository. If this is your first time, use these commands:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin <YOUR_GITHUB_REPO_URL>
    git push -u origin main
    ```

### Step 2: Create and Configure the Cloudflare Pages Project

1.  **Log in** to your Cloudflare dashboard.
2.  Navigate to **Workers & Pages** from the sidebar.
3.  Click **Create application** > select the **Pages** tab > click **Connect to Git**.
4.  **Select your GitHub repository** and click **Begin setup**.

### Step 3: Configure Build Settings

This is the most important step. You need to tell Cloudflare how to build your Vite project.

*   **Project name:** Choose a name for your project (e.g., `goldenwin-konsulindo`).
*   **Production branch:** Ensure `main` is selected.
*   **Build settings:**
    *   **Framework preset:** Select **Vite** from the dropdown menu. Cloudflare will automatically populate the settings below.
    *   **Build command:** It should be `npm run build`.
    *   **Build output directory:** It should be `dist`.

Your configuration should match the settings for a standard Vite project.

### Step 4: Save and Deploy

1.  Scroll down and click **Save and Deploy**.
2.  Cloudflare will now pull your code, install dependencies, run the build command, and deploy the `dist` folder.
3.  Once finished, you'll get a unique `.pages.dev` URL where your website is live.

Congratulations! Your website is now deployed. Future pushes to the `main` branch on GitHub will automatically trigger new deployments.
