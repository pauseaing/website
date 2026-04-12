# Integration Setup Guide for PauseAI Nigeria

## Phase 3: Essential Integrations

This document covers form handling, newsletter integration, and deployment configuration for the PauseAI Nigeria website.

### 1. Form Handling (Netlify Forms)

All forms on the site use Netlify Forms with the `data-netlify="true"` attribute:

**Form locations:**
- **Newsletter signup** — `/` (homepage) + `/blog`, `/take-action`
- **Join the chapter** — `/take-action#join`
- **Contact enquiry** — `/contact`
- **City group registration** — `/communities`

**How it works:**
1. Forms submit to Netlify automatically (no code needed)
2. Submissions appear in Netlify dashboard: **Site settings > Forms**
3. No credentials required at build time
4. For email notifications, configure webhooks in Netlify dashboard

**To set up email notifications:**
1. Go to Netlify dashboard → Site settings → Forms
2. Add notification recipients for each form
3. Submissions will be emailed to the configured address(es)

### 2. Newsletter Integration (Brevo)

Newsletter signups are currently captured by Netlify Forms. To forward them to Brevo:

**Setup steps (post-V1):**
1. Obtain Brevo API key from admin
2. Add to `.env.local`:
   ```
   BREVO_API_KEY=your_key_here
   BREVO_LIST_ID=list_id_here
   ```
3. Create a Netlify function at `netlify/functions/newsletter-handler.ts` to forward submissions
4. Or export Netlify form submissions manually to Brevo periodically

**For now (V1):** Newsletter submissions are stored in Netlify. Set up email notifications and manually review weekly or set up Brevo integration post-launch.

### 3. Global News RSS Feed

The homepage fetches the latest PauseAI Global updates via RSS:

**Configuration:**
- Feed URL: `https://pauseai.substack.com/feed`
- Fetched at: Build time (static generation)
- Location: `src/lib/global-news.ts`
- Rendered on: Homepage Section 5 + API endpoint

**Fallback:** If RSS fetch fails during build, hardcoded fallback items are used (no broken links)

**To test:**
```bash
pnpm build  # RSS fetch happens here
# Check dist/api/global-news.json for output
```

**Note:** Netlify rebuilds daily (or on-demand) via GitHub webhooks, so the feed stays fresh.

### 4. Environment Variables

**Development:**
```bash
# Copy to .env.local and customize
cp .env.example .env.local
```

**Deployment (Netlify):**
1. Go to **Site settings > Build & deploy > Environment**
2. Add any required variables (Brevo API key if used, analytics domain, etc.)
3. Rebuild to apply changes

**Current required vars (none for V1):**
- `NODE_VERSION=22` (set in netlify.toml)

**Optional vars (add later):**
- `BREVO_API_KEY`
- `BREVO_LIST_ID`
- `PUBLIC_PLAUSIBLE_DOMAIN`

### 5. CMS (Decap)

Form submissions are NOT routed to CMS. To add content (blog, events, policy updates):

1. Go to `https://pauseai.ng/admin` (or local: `http://localhost:3000/admin`)
2. Log in with Netlify Identity credentials
3. Create/edit content in collections:
   - **Blog** — posts with tag, date, excerpt
   - **Events** — upcoming/past events with dates and locations
   - **Policy Tracker** — institution stance, latest action, our ask
   - **Team** — team member profiles

**Important:** CMS changes automatically commit to GitHub and trigger a Netlify rebuild (~2–3 min)

### 6. Security & Spam

**Current safeguards:**
- Forms have `data-netlify="true"` which enables Netlify's built-in spam filtering
- CSRF protection is automatic with Netlify Forms

**To add more protection (post-V1):**
- Enable reCAPTCHA on forms in Netlify dashboard
- Add custom honeypot fields to catch bots
- Rate limit form submissions with Netlify functions

### 7. Testing Forms Locally

**Development:**
```bash
pnpm dev  # Start local server
# Navigate to form pages
# Submit a test entry
# Forms won't submit locally; deploy to Netlify to test actual capture
```

**To test in staging:**
1. Push to a feature branch
2. Netlify auto-deploys branch preview
3. Submit forms in preview environment
4. Submissions appear in Netlify Forms dashboard

### 8. Monitoring & Debugging

**Check form submissions:**
- Netlify dashboard → **Forms** tab → see all submissions
- Filter by form name or date

**Check RSS feed:**
- Visit `https://pauseai.ng/api/global-news.json` (production)
- Or `http://localhost:3000/api/global-news.json` (dev)
- Returns JSON array of latest items

**Check CMS:**
- Netlify dashboard → **Deploy logs** → see which edits triggered builds
- GitHub → repo → commits to main → see CMS auto-commits

**Troubleshooting:**
- **Forms not submitting:** Check Netlify site name matches (usually auto-detected)
- **RSS feed empty:** Check Substack URL is accessible; see fallback in code
- **CMS login fails:** Verify Netlify Identity is enabled in dashboard
- **Build fails:** Check `pnpm build` locally first; push errors to Netlify logs

---

**Next:** Set up Brevo integration and analytics post-launch based on team priorities.
