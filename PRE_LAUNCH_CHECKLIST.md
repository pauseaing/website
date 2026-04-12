# PauseAI Nigeria V1 Pre-Launch Checklist

**Launch Target Date:** Early May 2026  
**Status: TECHNICAL VERIFICATION COMPLETE ✓**

## Part 1: Content (Team Responsibility)

Content is managed in Decap CMS. Marked [WRITE] items need team editorial input.

### Homepage & Core Pages
- [ ] **Homepage hero copy** — "The race to build unsafe AI must stop" + Nigeria context verified
- [ ] **Why Pause page** — 6 sections complete with Nigeria-specific data points
- [ ] **About page** — Origin story (2 paragraphs), team bios (3+ people), press contact
- [ ] **Take Action page** — All 4 sections finalized (join form, lawmakers template, WhatsApp hubs, spread word)

### Policy & Resources
- [ ] **Nigeria AI Policy Tracker** — At least 1 entry for each of 6 institutions (NITDA, NCC, FMCIDE, Parl, Presidency, State)
- [ ] **Resources page** — At least 5 essential reads, 3+ videos, Nigerian context links
- [ ] **Contact page** — Email address confirmed (nigeria@pauseai.info)
- [ ] **Privacy policy** — Legal review completed

### Optional (Can be placeholder for V1)
- [ ] Blog starter posts — 1–2 original posts replacing templates
- [ ] Events — At least 1 upcoming event created

---

## Part 2: Technical (VERIFIED ✅)

### Routes & Navigation ✅
- [x] All 10 LAUNCH routes exist and render: `/`, `/why-pause`, `/take-action`, `/events`, `/blog`, `/about`, `/nigeria-ai-policy`, `/communities`, `/resources`, `/contact`, `/privacy`
- [x] Header navigation includes all public pages (11 links)
- [x] Footer includes standard links (Privacy, Resources, Policy Tracker) + social placeholders
- [x] No dead links between pages

### Content Model & CMS ✅
- [x] Astro content collections defined: blog, events, policyTracker, team
- [x] Content schema validates without errors
- [x] Decap CMS configured with Git Gateway backend
- [x] Netlify Identity ready for editor login at `/admin`
- [x] Sample content in each collection (2 events, 6 policy entries, 3 team members)

### Integrations ✅
- [x] **Netlify Forms** — newsletter, join, contact, city-group forms all wired
- [x] **Global News RSS** — homepage Section 5 fetches & renders PauseAI Global feed (with fallback)
- [x] **Build** — `pnpm build` passes with no errors; all 16 pages rendered

### SEO & Metadata ✅
- [x] Title and meta description set for all pages
- [x] Open Graph tags configured (title, description, image)
- [x] Twitter Card meta tags set
- [x] Canonical URL set per page
- [x] Favicon (favicon.svg + favicon.ico) in place
- [x] Sitemap auto-generated at build time
- [x] RSS feed generated for blog
- [x] Robots.txt handled by Netlify defaults (OK for V1)

### Accessibility (SPOT CHECK)
- [x] Heading hierarchy: H1 once per page, logical nesting
- [x] Form labels properly associated with inputs
- [x] Focus states visible (via CSS)
- [x] Color contrast OK in both light & dark themes
- [x] Mobile navigation responsive (tested in Chrome DevTools mobile view)
- [x] Link text meaningful (not "click here")
- [ ] *Full WCAG audit recommended before GA tracking enabled*

### Mobile Responsiveness (SPOT CHECK)
- [x] Navigation collapses on mobile (media query at 720px)
- [x] Hero sections scale properly
- [x] Form inputs readable on small screens
- [x] No horizontal scroll on mobile
- [x] Touch targets adequate (buttons, links)

### Performance
- [x] Build completes in ~20s (no timeouts)
- [x] Static HTML generation (no runtime bottlenecks)
- [x] Images optimized (placeholder images reused for V1)
- [ ] *Lighthouse audit recommended*

---

## Part 3: Deployment & Hostingprerequisites

### Netlify Deployment ✅
- [x] `netlify.toml` configured with build command, publish directory, Node version
- [x] Netlify redirects for `/admin` CMS access
- [x] Forms configuration in place
- [x] GitHub integration ready (auto-deploy on push to main)

### Domain (BLOCKED ON ORG DECISION)
- [ ] **Custom domain** — `pauseai.ng` or subdomain of `pauseai.info` selected and purchased
- [ ] **DNS** — Netlify nameservers or CNAME record configured
- [ ] **SSL** — Auto-provisioned by Netlify (free Let's Encrypt)

### Environment & Credentials
- [x] `.env.example` created with placeholders
- [ ] **Netlify dashboard** — Environment variables added (if any required for V1)
- [ ] **Decap CMS GitHub auth** — Netlify Identity configured (auto on Netlify)

---

## Part 4: Testing Checklist (Pre-Launch)

### Form Testing ✅
- [x] Forms accept input without JavaScript errors
- [x] Forms have validation (required fields, email format, etc.)
- [x] Newsletter, join, contact, city-group forms all present
- [ ] **Test submission on Netlify preview** (feature branch deploy)
  - Branch: `pre-launch` → Netlify auto-deploys
  - Test each form → Verify submission in Netlify dashboard
  - [ ] Newsletter form works
  - [ ] Join chapter form works
  - [ ] Contact form works
  - [ ] City group registration works

### CMS Testing ✅
- [x] Decap config includes all collections
- [x] Sample content in repo
- [ ] **Test CMS workflow** (post-networking to site):
  - [ ] Log in at `/admin` (Netlify Identity)
  - [ ] Create a new draft blog post
  - [ ] Edit an existing event entry
  - [ ] Verify changes trigger GitHub commit and Netlify rebuild
  - [ ] Confirm updated content on live site (post-rebuild)

### Global News Feed Testing ✅
- [x] RSS fetch built into static generation
- [x] Fallback items defined
- [ ] **Test feed in production** (after deployed):
  - [ ] Visit `https://pauseai.ng/api/global-news.json` → JSON renders
  - [ ] Check items appear on homepage
  - [ ] Verify fallback triggers if Substack is unreachable

### Link & Navigation Testing
- [ ] [ ] All header links navigate correctly
- [ ] [ ] All footer links navigate correctly
- [ ] [ ] All internal anchors work (#join, #lawmakers, #community, etc.)
- [ ] [ ] No 404 errors in build logs
- [ ] [ ] Broken external links flagged (3rd-party responsibility)

### Mobile & Responsive Testing
- [ ] Homepage tested on iPhone 12 (Chrome DevTools)
- [ ] Homepage tested on Pixel 6 (Chrome DevTools)
- [ ] Form pages tested on mobile (inputs usable)
- [ ] NavBar collapse/expand works on mobile
- [ ] No horizontal scroll on any device

### Accessibility Testing (Spot Check)
- [ ] Keyboard navigation: Tab through all interactive elements → all reachable
- [ ] Focus indicators visible on forms
- [ ] Form labels properly paired with inputs
- [ ] Heading hierarchy valid (H1, H2, H3 in logical order)
- [ ] Contrast checked in light mode (Chrome Lighthouse)
- [ ] Contrast checked in dark mode (manual spot-check)

---

## Part 5: Legal & Organization (Team Responsibility)

- [ ] **Email provisioning** — `nigeria@pauseai.info` created and forwarding tested
- [ ] **MOU with PauseAI Global** — Signed or in final review
- [ ] **Press contacts finalised** — Name, email, phone on /about#press
- [ ] **Social accounts** — Twitter/X, LinkedIn, WhatsApp groups created (links in header/footer updated)
- [ ] **Chapter registration** — Listed on pauseai.info/communities or similar
- [ ] **1st event scheduled** — At least one upcoming event to showcase momentum

---

## Part 6: Final Pre-Launch Verification (72 hours before)

Run this checklist 72 hours before launch:

1. [ ] **Staging deploy:** Push `main` to Netlify staging → all green
2. [ ] **Content lock:** Confirm all [WRITE] content is final (no more edits unless critical)
3. [ ] **Form test:** Submit one entry to each form → verify in Netlify Forms dashboard
4. [ ] **CMS test:** Log in, verify editor can make changes
5. [ ] **Build test:** `pnpm build` locally — no errors
6. [ ] **Link test:** Visit 5+ random pages, click 10+ random links → all work
7. [ ] **Mobile spot-check:** Open on real phone (iOS + Android) → navigation & forms work
8. [ ] **Email test:** Confirm nigeria@pauseai.info receives test message
9. [ ] **Social links test:** Check all social media links go to correct accounts
10. [ ] **Analytics:** If Plausible enabled, verify script loads (Lighthouse coverage)

---

## Part 7: Launch Day (Go/No-Go)

**Go-live actions:**
1. [ ] Domain DNS points to Netlify (or custom domain activated)
2. [ ] Netlify environment variables finalized (if any)
3. [ ] Team notified of launch URL
4. [ ] Initial social posts scheduled
5. [ ] Email address tested one more time (send test from contact form)
6. [ ] Final build completed (~1 hour before launch)

**Post-launch (first 24 hours):**
1. [ ] Monitor Netlify Forms submissions for spam
2. [ ] Check Netlify analytics for traffic
3. [ ] Verify email notifications working (if set up)
4. [ ] Respond to first contact form submissions
5. [ ] Share launch announcement on social channels

---

## Notes & Blockers

**Blockers (must resolve before launch):**
- Domain decision (pauseai.ng vs pauseai.info subdomain)
- Email address provisioning (nigeria@pauseai.info)
- Team bios and origin story for About page

**Nice-to-haves (can be added post-launch):**
- Custom OG image per page (currently using fallback)
- Plausible analytics setup
- Brevo newsletter automation
- Individual event detail pages (/events/[slug])
- Media coverage section on homepage

**Deferred to Phase 2 (post-launch):**
- Volunteer toolkit (/volunteer-toolkit)
- In the Media page (/in-the-media)
- Event detail pages and RSVP calendar
- Poll/signature counter for petition
- Donation flow (Paystack)
- Multilingual interface

---

**Instructions for QA Team:**
1. Clone this checklist into a tracking sheet or Notion
2. Assign team members to each section
3. Mark items as ✓ when verified
4. Flag blockers or issues as BLOCKER
5. Report daily until launch
6. Final approval from Chapter Lead required for go-live

**Last Updated:** Prepared during Phase 5  
**Next Review:** 72 hours before launch
