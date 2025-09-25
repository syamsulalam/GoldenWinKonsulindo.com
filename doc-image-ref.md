# GoldenWinKonsulindo.com - Image and Static Asset Referencing Guide

This document explains the correct way to manage and reference static assets like images, ensuring they work both in local development and after deployment to Cloudflare Pages.

## The `public` Directory

In a Vite-based React project, the `public` directory is a special folder. **Any files placed in this directory will be copied to the root of the build output directory (`dist`) as-is, without being processed.**

This is the perfect place for assets like:
- `favicon.svg`
- Logos
- Team member photos
- PDFs or other downloadable files

## Correct Project Structure

To ensure your images are found by the application, your `img` folder **MUST** be placed directly inside the `public` folder.

Your project's root directory should look like this:

```
.
├── public/
│   ├── img/
│   │   ├── logo.png
│   │   ├── windijarto.png
│   │   ├── roos.png
│   │   ├── ahnaf.png
│   │   └── alam.png
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── ... other project files
```

## How to Reference Images in Your Code

When you reference an image from the `public` directory in your code (e.g., in an `<img>` tag or a constants file), you should use an **absolute path from the root of the site**.

You do **NOT** include `public` in the path.

**Correct Usage:**

```jsx
// In a component or constants file
const logoUrl = '/img/logo.png';
const windijartoImageUrl = '/img/windijarto.png';

// In a JSX file
<img src="/img/logo.png" alt="Company Logo" />
```

**Incorrect Usage:**

```jsx
// DO NOT do this. These paths are incorrect.
<img src="./public/img/logo.png" />
<img src="../public/img/logo.png" />
<img src="public/img/logo.png" />
```

By following this structure, Vite and Cloudflare Pages will correctly serve your images at `your-domain.com/img/image-name.png`, and they will appear correctly on your live website.