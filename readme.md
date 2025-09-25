# GoldenWinKonsulindo.com Deployment Guide

This guide provides step-by-step instructions on how to deploy the GoldenWinKonsulindo.com website to Cloudflare Pages. This project is a static website and does not require a complex build process.

## Prerequisites

Before you begin, ensure you have the following:
1.  A [GitHub](https://github.com/) account.
2.  A [Cloudflare](https://www.cloudflare.com/) account.
3.  [Git](https://git-scm.com/downloads) installed on your local machine.
4.  The project files downloaded on your computer.

## Deployment Steps

### Step 1: Push Your Project to a GitHub Repository

Your website code needs to be hosted in a GitHub repository for Cloudflare Pages to access it.

1.  **Create a new repository on GitHub.**
    *   Go to [github.com/new](https://github.com/new).
    *   Give your repository a name (e.g., `goldenwin-konsulindo-website`).
    *   You can keep it public or private.
    *   Click "Create repository".

2.  **Initialize Git and push your project.**
    *   Open a terminal or command prompt in your project directory (where `index.html` is located).
    *   Run the following commands, replacing `<YOUR_GITHUB_REPO_URL>` with the URL of the repository you just created.

    ```bash
    # Initialize a new Git repository
    git init

    # Add all files to the staging area
    git add .

    # Commit the files
    git commit -m "Initial commit of website files"

    # Set the main branch name to 'main'
    git branch -M main

    # Add your GitHub repository as the remote origin
    git remote add origin <YOUR_GITHUB_REPO_URL>

    # Push your code to GitHub
    git push -u origin main
    ```

### Step 2: Create a New Cloudflare Pages Project

Now, let's connect your GitHub repository to Cloudflare.

1.  **Log in to your Cloudflare dashboard.**
2.  In the left-hand sidebar, navigate to **Workers & Pages**.
3.  Click on **Create application**, then select the **Pages** tab.
4.  Click on **Connect to Git**.
5.  Choose the GitHub account where you created your repository and select the repository (e.g., `goldenwin-konsulindo-website`).
6.  Click **Begin setup**.

### Step 3: Configure Build Settings

This is the most important step. Since this project uses CDNs for React and Tailwind CSS, it doesn't need a build step. We will configure Cloudflare Pages for a static site deployment.

1.  **Project name:** Choose a name for your project (e.g., `goldenwin-konsulindo`). This will be part of your website's URL.
2.  **Production branch:** Ensure `main` is selected.
3.  **Build settings:**
    *   **Framework preset:** In the dropdown, select **None**. This is crucial as it tells Cloudflare you're deploying static files directly.
    *   **Build command:** **Leave this field blank.**
    *   **Build output directory:** **Leave this field blank.** Cloudflare will serve files from the root of your repository where your `index.html` is located.

After these settings, the build configuration section will be very simple. You are essentially telling Cloudflare: "No build needed, just serve the files as they are."

### Step 4: Save and Deploy

1.  Scroll to the bottom and click the **Save and Deploy** button.
2.  Cloudflare will now pull your code from GitHub and deploy it. The process is very fast for static sites.
3.  Once the deployment is complete, Cloudflare will provide you with a unique URL (e.g., `https://goldenwin-konsulindo.pages.dev`). You can visit this URL to see your live website!

Congratulations! Your website is now deployed on Cloudflare Pages. Any future pushes to your `main` branch on GitHub will automatically trigger a new deployment.
