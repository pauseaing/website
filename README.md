# PauseAI Nigeria Website

An Astro-powered website for **PauseAI Nigeria**, a chapter of the global PauseAI movement advocating for responsible AI governance in Nigeria.

## 🎯 Project Overview

This is the technical foundation for PauseAI Nigeria's public-facing platform, featuring:

- **10 launch pages** — homepage, why pause, take action, about, events, policy tracker, communities, resources, contact, and privacy
- **CMS integration** — Decap CMS + Netlify Identity for easy content editing
- **3 content collections** — events, policy tracker, and team members (plus blog)
- **Form handling** — Netlify Forms for newsletter signup, chapter join, contact, and community registration
- **Global integration** — Live RSS feed from PauseAI Global on the homepage
- **SEO & social** — Open Graph, Twitter Cards, canonical URLs, and sitemaps
- **Responsive design** — Mobile-first, accessible, with Tailwind CSS

## ✨ Key Features

### Pages
- **Home** — Hero, stats, upcoming event highlights, Nigeria context, global news feed, newsletter signup
- **Why Pause** — 3-pillar risk explainer (existential, loss of control, Nigeria exposure), proposal, counter-arguments
- **Take Action** — Join chapter form, lawmaker contact template, WhatsApp community hubs
- **About** — Mission, founding team, timeline, press contact
- **Events** — Upcoming and past event listings
- **Policy Tracker** — Nigerian AI policy status dashboard (NITDA, NCC, Parliament, etc.)
- **Communities** — Local city group hubs with registration
- **Resources** — Curated reading list, explainer videos, Nigerian policy context
- **Contact** — Contact form with response commitment
- **Privacy** — Data handling and user rights

### Technical Stack
- **Astro** — Static site generation
- **Tailwind CSS** — Utility-first styling
- **MDX** — Markdown + JSX for flexible content
- **TypeScript** — Type-safe components
- **Netlify** — Hosting, forms, CMS integration, CI/CD

## 🚀 Getting Started

### Prerequisites
- Node.js 22.12.0 or later
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:4321`

### Build & Deploy

```bash
# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

Push to the `main` branch to trigger automatic deployment via Netlify.

## 📁 Project Structure

```
src/
├── pages/               # Route pages
│   ├── index.astro      # Homepage
│   ├── why-pause.astro
│   ├── take-action.astro
│   ├── about.astro
│   ├── events.astro
│   ├── nigeria-ai-policy.astro
│   ├── communities.astro
│   ├── resources.astro
│   ├── contact.astro
│   ├── privacy.astro
│   └── api/
├── content/             # Markdown content
│   ├── blog/            # Blog posts
│   ├── events/          # Event entries
│   ├── policy-tracker/  # Policy tracker entries
│   └── team/            # Team member profiles
├── components/          # Reusable Astro components
├── layouts/             # Page layouts
├── lib/                 # Utility functions
├── styles/              # Global CSS
└── consts.ts            # Site metadata

public/
├── admin/               # Decap CMS interface
│   └── config.yml       # CMS configuration
└── fonts/               # Google Fonts

netlify.toml            # Netlify configuration
tailwind.config.mjs     # Tailwind theming
tsconfig.json           # TypeScript config
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add frontmatter metadata:
   ```yaml
   ---
   title: "Post Title"
   pubDate: 2026-08-30
   author: "Author Name"
   tag: "tag-name"
   heroImage: "/path/to/image.jpg"
   ---
   ```
3. Write your content in Markdown

### Editing via CMS

1. Navigate to `/admin` (or `http://localhost:4321/admin` in development)
2. Log in with Netlify Identity credentials
3. Edit content in the CMS interface
4. Changes auto-commit to GitHub and trigger a rebuild

## 🔌 Integrations

### Netlify Forms
All contact forms (newsletter, chapter join, contact) are captured via Netlify Forms. Submissions appear in the Netlify dashboard.

### Global News RSS
The homepage displays the latest posts from PauseAI Global (Substack RSS feed), fetched at build time with a hardcoded fallback.

### Decap CMS
Full content management for blog, events, policy tracker, and team collections. Access at `/admin`.

## 🛠️ Available Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm astro -- --help` | Astro CLI help |

## 📚 Documentation

- **[INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)** — Setup for forms, RSS, CMS, email forwarding
- **[PRE_LAUNCH_CHECKLIST.md](./PRE_LAUNCH_CHECKLIST.md)** — Verification steps before launch
- **[V1_COMPLETION_SUMMARY.md](./V1_COMPLETION_SUMMARY.md)** — Technical completion details
- **[.env.example](./.env.example)** — Environment variable template

## 🌍 About PauseAI Nigeria

PauseAI Nigeria is part of the global PauseAI movement, which advocates for a pause on advanced AI development until risks can be better understood and mitigated. We focus on policy, community engagement, and research related to AI governance in Nigeria.

Learn more: [pauseai.info](https://pauseai.info)

## 📜 License

This project is licensed under the MIT License — see [LICENSE](./LICENSE) for details.

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request with your suggestions or improvements.

## 📧 Contact

For inquiries, visit our [Contact page](https://pauseai.ng/contact) or email us directly.

---

**Status:** ✅ V1 Technically Complete — Ready for launch  
**Last Updated:** June 5, 2026
