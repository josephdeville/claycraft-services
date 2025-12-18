# CMMC Event Landing Page - Manus Development Guide

## Overview
Create a visually stunning CMMC readiness event landing page that stays on-brand with **Ignyte Platform** while incorporating best practices from top CMMC event sites.

---

## Ignyte Platform Brand Guidelines

### Brand Positioning
- **Tagline:** "Get CMMC | FedRAMP | ISO 27001 Certified Quickly"
- **Value Prop:** "Compliance in Months, Not Years"
- **Key Differentiator:** Former US Department of Defense assessors and security managers
- **Trust Signal:** "Mission-Critical Teams Trust Ignyte"

### Brand Voice
- Professional, authoritative, trustworthy
- Action-oriented ("Get Started", "Get Certified", "Get Authorized")
- Emphasize speed and efficiency ("10x faster", "rapidly achieve certification")
- Use compliance terminology accurately

### Service Pillars (Use in Navigation/Sections)
1. **Consult** - Expert compliance consultants
2. **Automate** - GRC platform with dashboards
3. **Audit** - Assessment and certification support

### Target Audiences
- Defense Industrial Base (DIB) contractors
- Government contractors seeking CMMC
- ISSMs, FSOs, CISOs, Compliance Officers
- Organizations handling CUI/CDI

---

## CMMC Event Landing Page Best Practices

### From CMMC Day (cmmcday.org)
- **Headline Pattern:** "X years of CMMC clarity, compliance, and competitive advantage"
- **Key Stat:** "Over 300,000 US government DIB subcontractors will be affected"
- **Speaker Authority:** Support from NIST, NIAP, NSA
- **Sponsor Tiers:** Platinum → Gold → Silver
- **Early Bird Pricing:** "Register today and save up to $230"

### From CS5 East (cs5east.org)
- **Position:** "The Official Conference of The Cyber AB"
- **Urgency Hook:** "If you're in the defense industrial base, you can't afford to miss it"
- **Ecosystem Focus:** "The one conference that brings the entire compliance ecosystem together"
- **Special Pricing:** "$299 Registration for Qualified Defense Contractors"
- **Value Props:** RPOs (preparers) + C3PAOs (auditors) + Training providers

### From CMMC-PNW
- **Regional Focus:** Target specific geographic audiences
- **Two-Day Format:** Workshops + Conference
- **Clear Outcomes:** "Whether you're just starting or preparing for Level 2 audit"

---

## Page Structure (Recommended Sections)

### 1. Hero Section
```
- Ignyte logo + "Presents" tagline
- Event name with gradient text effect
- Compelling headline: "CMMC Readiness Operational Briefing"
- Sub-headline with key value prop
- Date, time, location with icons
- Primary CTA: "Secure Your Seat" with glow effect
- Early bird badge with countdown
```

### 2. Urgency Bar (Sticky)
```
- "Only X seats remaining"
- Early bird deadline countdown
- Quick register button
```

### 3. Why Attend Section
```
- Stats: 300,000+ contractors affected, 110 Level 2 controls
- Pain points: "CMMC is no longer a policy exercise"
- 4 key outcomes in glass cards:
  1. Assessment Reality
  2. Peer Intelligence
  3. Risk Exposure Insights
  4. Actionable Steps
```

### 4. Agenda/Schedule
```
- Timeline format with expandable sessions
- Time | Title | Subtitle | Speaker
- Learning outcomes for each session
- "Closed-door discussion" exclusivity element
```

### 5. Speaker/Host Section
```
- Ignyte logo with "Authorized C3PAO" badge
- "Former DoD Assessors" credential
- Partner organization (if applicable)
- Brief bios with headshots
```

### 6. Who Should Attend
```
- ISSMs (Information System Security Managers)
- FSOs (Facility Security Officers)
- CISOs and Security Directors
- Compliance Officers
- Defense Contractors (Primes & Subs)
```

### 7. Registration Form
```
- Limited seats messaging (e.g., "50 attendees")
- Form fields: Name, Email, Organization, Title
- Optional: Supporting documents upload
- "Registration Under Review" exclusivity
- Early bird pricing callout
```

### 8. Sponsor Section (if applicable)
```
- Tier-based sponsor logos
- "Become a Sponsor" CTA
```

### 9. Footer
```
- Event details recap
- Contact information
- Legal links
- Ignyte Platform link
```

---

## Visual Effects to Apply

### Color Palette (Ignyte-Aligned)
```css
--ignyte-primary: #1a237e;        /* Navy blue - authority */
--ignyte-accent: #D5541C;         /* Orange - CTAs (Coalfire orange) */
--ignyte-cyan: #65D2E7;           /* Cyan - highlights, glows */
--ignyte-light: #ECFFD3;          /* Light green - gradients */
--ignyte-dark: #0d1117;           /* Dark background */
--ignyte-card: rgba(26, 35, 126, 0.1); /* Navy tint for cards */
```

### Must-Use CSS Classes
```html
<!-- Headlines -->
<h1 class="gradient-text">CMMC Readiness</h1>
<span class="gradient-text-orange">Operational Briefing</span>

<!-- Cards -->
<div class="glass-card-strong tech-border">...</div>
<div class="card-lift">...</div>

<!-- Backgrounds -->
<div class="cyber-grid hex-pattern particle-field">...</div>

<!-- Buttons -->
<button class="btn-shimmer neon-glow-orange">Register Now</button>

<!-- Live indicators -->
<span class="pulse-ring">...</span>
<span class="animate-ping">...</span>

<!-- Animations -->
<div class="float morph-blob">...</div>
<div class="animate-gradient-x">...</div>
```

### Hero Background Stack
```jsx
<div className="absolute inset-0">
  <div className="cyber-grid opacity-20" />
  <div className="hex-pattern opacity-30" />
  <div className="particle-field" />

  {/* Navy gradient overlay for Ignyte brand */}
  <div className="bg-gradient-to-br from-[#1a237e]/80 via-background to-background" />

  {/* Mouse-tracking orbs */}
  <div className="morph-blob" style={{
    background: 'radial-gradient(circle, var(--ignyte-cyan) 0%, transparent 70%)'
  }} />
</div>
```

---

## Key Messaging (Copy Reference)

### Headlines
- "CMMC Readiness Operational Briefing"
- "Master CMMC Level 2 in One Day"
- "From Compliance to Competitive Advantage"
- "Prepare. Certify. Succeed."

### Subheadlines
- "Join 50 ISSMs and FSOs preparing for C3PAO assessment with former DoD assessors"
- "Closed-door briefing for security leaders actively preparing for CMMC Level 2"
- "Insights you won't find in public guidance"

### CTAs
- "Secure Your Seat" (primary)
- "Request Access" (exclusive feel)
- "Register Now - Save $150" (urgency)
- "Download Event Brief" (secondary)

### Trust Badges
- "Authorized C3PAO"
- "Former DoD Assessors"
- "Limited to 50 Attendees"
- "Registration Under Review"

### Stats to Feature
- 300,000+ DIB contractors affected
- 110 Level 2 controls
- 85+ compliance frameworks
- "10x faster" audit process

---

## Source Files Reference

| File | Content |
|------|---------|
| `ignyte-brand-scrape.json` | Ignyte Platform content & messaging |
| `cmmc-day-scrape.json` | CMMC Day event structure |
| `cs5-east-scrape.json` | CS5 conference patterns |
| `cmmc-pnw-scrape.json` | Regional event example |
| `src/index.css` | All CSS animations (lines 129-605) |
| `manus-instructions.md` | Visual effects classes |

---

## Implementation Checklist

### Branding
- [ ] Use Ignyte logo prominently
- [ ] Apply navy (#1a237e) as primary brand color
- [ ] Use orange (#D5541C) for CTAs only
- [ ] Include "Authorized C3PAO" badge
- [ ] Reference "Former DoD Assessors" credibility

### Visual Effects
- [ ] Cyber-grid background with navy tint
- [ ] Glassmorphism cards for content sections
- [ ] Gradient text for headlines
- [ ] Glowing CTA buttons
- [ ] Pulse animations for live indicators
- [ ] Tech-border corners on key cards
- [ ] Mouse-tracking orbs in hero

### Content
- [ ] Clear event date, time, location
- [ ] Early bird pricing with deadline
- [ ] Limited seats messaging
- [ ] Detailed agenda with times
- [ ] Speaker/host credentials
- [ ] Registration form with review notice

### Conversion
- [ ] Sticky CTA bar on scroll
- [ ] Multiple registration touchpoints
- [ ] Countdown timer
- [ ] Social proof (attendee count)
- [ ] Exclusivity language

---

## Competitive Differentiators to Highlight

1. **Former DoD Assessors** - Not just consultants, actual former government assessors
2. **Closed-Door Format** - Exclusive, peer-level discussion (no vendors recording)
3. **C3PAO Authority** - Authorized to conduct official CMMC assessments
4. **GRC Platform** - Ignyte's automated compliance platform available to attendees
5. **Actionable Intel** - Practical steps, not just theory
6. **Regional Focus** - Tailored to specific market (LA, DC, etc.)

---

## Sources Used

- [CMMC Day](https://cmmcday.org/) - The Supply Chain Cybersecurity Conference
- [CS5 East](https://cs5east.org/) - The Essential Event to Get CMMC Right
- [CMMC-PNW](https://helpdeskcavalry.com/cmmc-pnw-2025/) - Pacific Northwest Conference
- [Ignyte Platform](https://ignyteplatform.com/) - GRC Platform & Compliance Services
- [Carahsoft CMMC Events](https://www.carahsoft.com/blog/carahsoft-the-top-cmmc-events-for-government-and-the-dib-in-2025-blog-2025) - Event Roundup
