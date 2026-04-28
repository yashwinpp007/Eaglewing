# EagleWing Facility Services — Static Website

Pure static HTML/CSS/JS site. No build tools, no frameworks. Deploy directly from this folder.

---

## Folder Structure

```
/
├── index.html                          # Homepage
├── about.html
├── technology.html
├── process.html
├── contact.html
├── get-a-quote.html
│
├── services/
│   ├── index.html                      # Services hub
│   ├── commercial-office-cleaning.html
│   ├── medical-cleaning.html
│   ├── school-cleaning.html
│   ├── industrial-cleaning.html
│   ├── retail-hospitality-cleaning.html
│   ├── strata-cleaning.html
│   ├── events-cleaning.html
│   └── specialised-cleaning.html
│
├── locations/
│   ├── index.html                      # Locations hub
│   ├── melbourne.html
│   └── sydney.html
│
├── blog/
│   ├── index.html                      # Blog hub
│   └── how-to-choose-a-commercial-cleaning-company.html
│
└── assets/
    ├── css/
    │   └── style.css                   # Master stylesheet
    ├── js/
    │   └── main.js                     # All JS behaviours
    └── images/                         # Add images here
```

---

## How to Add a New Blog Post

1. **Duplicate** an existing post file, e.g.:
   ```
   cp blog/how-to-choose-a-commercial-cleaning-company.html blog/your-new-post-slug.html
   ```

2. **Update the `<head>`** in your new file:
   - `<title>` — your post title + " | EagleWing"
   - `<meta name="description">` — 140–160 character summary
   - `<link rel="canonical">` — full URL of the new post
   - All `og:` and `twitter:` meta tags
   - JSON-LD `Article` schema — update `headline`, `datePublished`, `url`, `mainEntityOfPage`
   - JSON-LD `FAQPage` schema — update or remove FAQ items
   - JSON-LD `BreadcrumbList` — update position 3 name and item URL

3. **Update the `<article>` content:**
   - `.blog-article-meta` — update category tag, read time, and `<time datetime="">` / display date
   - `<h1 id="article-h1">` — your post title
   - `.blog-article-title` and byline
   - `img-placeholder` `aria-label` — describe the featured image
   - Body content — H2 headings, paragraphs, lists, callout boxes
   - FAQ items inside `.blog-faq`

4. **Add a card to `blog/index.html`:**
   Copy an existing `<article class="blog-card">` block and update:
   - `data-category` attribute — must match one of: `cleaning-tips`, `industry`, `technology`, `case-studies`, `compliance`
   - `<a href="">` link — path to your new file
   - `.blog-card-meta` — category tag, read time, date
   - `<h3>` title
   - `.blog-card-excerpt` text
   - Change `<span class="gold-link coming-soon-label">COMING SOON</span>` to `<a href="your-post.html" class="gold-link">READ ARTICLE →</a>`
   - Replace the `blog-card-coming-soon` placeholder div with a real image or remove the class

5. **No other files need to change.** The blog filter JS reads `data-category` attributes automatically.

---

## How to Deploy to Netlify via GitHub

1. Push this folder to a GitHub repository (public or private).

2. Log in to [netlify.com](https://netlify.com) and click **Add new site → Import an existing project**.

3. Connect GitHub and select your repository.

4. Leave **Build command** blank and set **Publish directory** to `/` (root).

5. Click **Deploy site**.

6. To set your custom domain: **Site configuration → Domain management → Add a domain** → follow the DNS instructions.

Every `git push` to the `main` branch auto-deploys. No build step required.

---

## How to Update Nav Links When Adding New Pages

The nav is repeated in every HTML file. To add a new top-level nav link:

1. Open `assets/js/main.js` and find the active-link detection block. It matches the current filename to nav link `href` values — no changes needed if your links are correct.

2. In **every HTML file**, find the two nav blocks and add your link in both:

   **Desktop nav** (`.nav-pill`):
   ```html
   <a href="../your-page.html">Your Page</a>
   ```

   **Mobile overlay** (`.nav-overlay`):
   ```html
   <a href="../your-page.html">Your Page</a>
   ```

3. For pages **in a subdirectory** (`/services/`, `/locations/`, `/blog/`), paths are relative — use `../your-page.html`. For root-level pages, use `your-page.html`.

4. On the new page itself, add `class="active"` to its own nav link so it highlights when visited.

---

## Design System Quick Reference

| Token | Value |
|---|---|
| `--gold` | `#c9a84c` |
| `--bg` | `#000000` |
| `--surface` | `#0a0a0a` |
| `--glass-bg` | `rgba(255,255,255,0.03)` |
| `--radius-card` | `1.5rem` |
| Heading font | Space Grotesk |
| Mono / labels | JetBrains Mono |

Image placeholders use `.img-placeholder` with a ratio class (`ratio-16-9`, `ratio-4-3`, `ratio-1-1`, `ratio-map`). Replace the div with an `<img>` tag when real photos are available.
