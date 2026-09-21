# sercankara.dev

Personal portfolio and engineering blog of **Sercan Kara** (Senior Backend Architect & Systems Engineer), inspired by the minimalist and editorial aesthetic of [arslan.io](https://arslan.io) / Kyoto style.

## ⚡ Tech Stack

- **Framework:** [Astro](https://astro.build) (Static output, zero-runtime JS)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) & [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- **Typography:** Inter & JetBrains Mono
- **RSS & Feed:** Build-time Medium RSS parser via `fast-xml-parser` + auto-generated native `rss.xml`
- **Theme:** Class-based Light / Dark mode with zero-FOUC inline script
- **Deployment:** Cloudflare Pages

## 📁 Project Structure

```text
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── content/
    │   ├── config.ts              # Zod schema for local thoughts
    │   └── thoughts/              # Local markdown articles
    ├── data/
    │   └── projects.ts            # Centralized projects directory & subdomain links
    ├── layouts/
    │   ├── BaseLayout.astro       # HTML skeleton, SEO metadata, Theme script
    │   └── ArticleLayout.astro    # Clean typography layout for essays
    ├── components/
    │   ├── Header.astro           # Nav links & ThemeToggle
    │   ├── Footer.astro           # Minimal social links & RSS
    │   ├── PostItem.astro         # Unified row for local vs external articles
    │   ├── ProjectCard.astro      # Bordered card with subdomain pills
    │   └── ThemeToggle.astro      # Accessible zero-lag theme switch
    ├── lib/
    │   ├── medium.ts              # Build-time Medium RSS parser
    │   └── posts.ts               # Merges and sorts local + Medium posts
    └── pages/
        ├── index.astro            # Hero + Recent Thoughts + Featured Works
        ├── thoughts/              # Articles archive & dynamic slug routes
        ├── works/                 # Comprehensive systems directory
        ├── about.astro            # Bio, engineering philosophy & contact
        └── rss.xml.ts             # Auto-generated RSS 2.0 XML endpoint
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Typecheck and build static production bundle
npm run build
```

## 📄 License

MIT © [Sercan Kara](https://sercankara.dev)
