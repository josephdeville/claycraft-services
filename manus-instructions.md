# Manus Landing Page Development Instructions

## Objective
Create a visually stunning landing page with dramatic animations and effects.

## Source Files
- `coalfire-content.md` - Scraped content from coalfire.com
- `coalfire-scrape.json` - Full API response with metadata
- `src/index.css` - All CSS animations and effects
- `src/components/sections/Hero.tsx` - Reference hero implementation
- `src/pages/Index.tsx` - Full page structure

---

## Color Palette (CSS Variables)

```css
--coalfire-cyan: #65D2E7;      /* Primary accent - glows, highlights */
--coalfire-light-green: #ECFFD3; /* Secondary accent - gradients */
--coalfire-orange: #D5541C;     /* CTA buttons, emphasis */
--coalfire-dark: #3F4644;       /* Text on light backgrounds */
--ignyte-navy: #1a237e;         /* Deep accent */
--neon-cyan: #00f5ff;           /* Neon effects */
--neon-orange: #ff6b35;         /* Neon CTA */
```

---

## Ready-to-Use CSS Classes

### Gradient Text (Animated Shimmer)
```html
<span class="gradient-text">Shimmering cyan text</span>
<span class="gradient-text-orange">Shimmering orange text</span>
```

### Glassmorphism Cards
```html
<div class="glass-card">Light frosted glass</div>
<div class="glass-card-strong">Heavy frosted glass</div>
```

### Glowing Effects
```html
<div class="glow-border">Animated glowing border</div>
<div class="neon-glow">Cyan neon glow</div>
<div class="neon-glow-orange">Orange neon glow</div>
<div class="pulse-ring">Pulsing ring animation</div>
```

### Background Patterns
```html
<div class="cyber-grid">Animated grid lines</div>
<div class="hex-pattern">Hexagon pattern (Coalfire style)</div>
<div class="particle-field">Floating particles</div>
<div class="noise-overlay">Subtle noise texture</div>
```

### Card & Hover Effects
```html
<div class="card-lift">Lifts on hover with glow</div>
<div class="magnetic-hover">Magnetic lift effect</div>
<div class="tech-border">Corner bracket accents</div>
<div class="gradient-border">Animated gradient border</div>
<div class="holographic">Holographic shimmer</div>
```

### Animation Utilities
```html
<div class="float">Gentle floating</div>
<div class="float-delayed">Floating (offset timing)</div>
<div class="morph-blob">Organic shape morphing</div>
<div class="rotate-glow">Rotating glow ring</div>
<div class="scan-line">Matrix-style scan line</div>
```

### Button Effects
```html
<button class="btn-shimmer">Light sweep animation</button>
```

### Text Effects
```html
<span class="animated-underline">Underline on hover</span>
<span class="glitch" data-text="GLITCH">Cyberpunk glitch</span>
<span class="typewriter">Typewriter effect</span>
```

### Scroll Animations
```html
<div class="reveal">Fades in when visible</div>
<div class="perspective-tilt">3D tilt on hover</div>
```

### Staggered Delays
```html
<div class="stagger-1">0.1s delay</div>
<div class="stagger-2">0.2s delay</div>
<div class="stagger-3">0.3s delay</div>
<div class="stagger-4">0.4s delay</div>
<div class="stagger-5">0.5s delay</div>
```

---

## Tailwind Animation Classes

```html
<!-- Built-in animations -->
<div class="animate-float">Floating</div>
<div class="animate-pulse-glow">Pulsing glow</div>
<div class="animate-shimmer">Shimmer effect</div>
<div class="animate-gradient-x">Gradient movement</div>
<div class="animate-spin-slow">Slow rotation</div>
<div class="animate-bounce-subtle">Subtle bounce</div>
<div class="animate-scale-in">Scale entrance</div>
<div class="animate-slide-up">Slide up entrance</div>
<div class="animate-fade-in">Fade in</div>
```

---

## Hero Section Pattern

```jsx
<section className="relative min-h-screen overflow-hidden">
  {/* Layered backgrounds */}
  <div className="absolute inset-0">
    <div className="cyber-grid opacity-30" />
    <div className="particle-field" />
    <div className="hex-pattern opacity-50" />
    <div className="noise-overlay" />
  </div>

  {/* Mouse-tracking orbs */}
  <div
    className="absolute w-[600px] h-[600px] rounded-full morph-blob opacity-20"
    style={{
      background: 'radial-gradient(circle, var(--coalfire-cyan) 0%, transparent 70%)',
      left: `${mouseX * 0.02}px`,
      top: `${mouseY * 0.02}px`,
    }}
  />

  {/* Content with glass card */}
  <div className="relative z-10">
    <div className="glass-card-strong tech-border rounded-2xl p-8">
      <h1 className="gradient-text text-6xl font-bold">
        Stunning Headline
      </h1>
    </div>
  </div>
</section>
```

---

## Feature Card Pattern

```jsx
<div className="group relative">
  {/* Hover glow */}
  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--coalfire-cyan)] to-[var(--coalfire-orange)] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500" />

  <div className="relative glass-card-strong card-lift">
    {/* Top gradient line */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--coalfire-cyan)] to-[var(--coalfire-orange)] opacity-0 group-hover:opacity-100 transition-opacity" />

    {/* Icon with glow */}
    <div className="relative">
      <div className="absolute inset-0 bg-[var(--coalfire-cyan)] blur-xl opacity-30" />
      <Icon className="relative h-8 w-8 text-white" />
    </div>

    <h3 className="font-display font-bold text-xl">Title</h3>
    <p className="text-muted-foreground">Description</p>
  </div>
</div>
```

---

## CTA Button Pattern

```jsx
<div className="relative group">
  {/* Animated glow behind button */}
  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition-opacity animate-gradient-x" style={{ backgroundSize: '200% 200%' }} />

  <button className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 btn-shimmer">
    Call to Action
    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
  </button>
</div>
```

---

## Live Indicator Pattern

```jsx
<div className="flex items-center gap-2">
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
  </span>
  <span className="text-red-400 font-mono text-sm font-bold">LIVE</span>
</div>
```

---

## Fonts

```html
<!-- Add to <head> -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
font-family: 'Plus Jakarta Sans', sans-serif;  /* Body text */
font-family: 'Space Grotesk', sans-serif;      /* Display headings */
font-family: 'JetBrains Mono', monospace;      /* Code, labels */
```

---

## Implementation Checklist

- [ ] Set up CSS variables for color palette
- [ ] Add all keyframe animations to CSS
- [ ] Implement glassmorphism cards
- [ ] Add cyber-grid and particle backgrounds
- [ ] Create gradient text effects
- [ ] Build hero with mouse-tracking orbs
- [ ] Add card hover lift effects
- [ ] Implement CTA button with glow
- [ ] Add live indicators where needed
- [ ] Test all animations for performance
