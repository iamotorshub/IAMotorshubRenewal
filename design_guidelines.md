# Design Guidelines - IA MOTORSHUB Landing Page

## Design Approach
**Reference-Based Approach** - Combining cinematographic aesthetics with high-conversion landing page patterns, drawing inspiration from premium tech companies like Apple, Tesla, and high-end production studios.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Blue: 220 70% 25% (primary brand color, CTAs)
- Electric Blue: 210 100% 55% (accents, highlights, interactive elements)
- Platinum Gray: 220 15% 92% (light backgrounds, text on dark)

**Supporting Colors:**
- Dark Slate: 220 20% 15% (primary dark background)
- Medium Gray: 220 10% 45% (secondary text, borders)
- Light Gray: 220 5% 65% (tertiary text)

**Gradients:**
- Hero section: Linear gradient from Deep Blue to Dark Slate for modern tech aesthetic
- Service cards: Platinum Gray to white gradients with subtle blue tints
- CTA buttons: Electric Blue gradient (210 100% 60% to 210 100% 50%) for modern appeal
- Card overlays: Dark Slate with opacity for depth

### B. Typography
**Fonts via Google Fonts:**
- Primary: Montserrat (Black 900 for headlines, Bold 700 for subheadings)
- Secondary: Inter (Regular 400, Medium 500 for body text)

**Hierarchy:**
- H1: Montserrat Black, large scale for hero impact
- H2/H3: Montserrat Bold for section headers
- Body: Inter Regular for readability
- CTAs: Montserrat Bold for action orientation

### C. Layout System
**Tailwind Spacing Primitives:**
- Primary units: 4, 8, 16 (p-4, m-8, h-16)
- Section spacing: py-16, py-24 for generous breathing room
- Component spacing: gap-8, space-y-4 for consistent rhythm

### D. Component Library

**Navigation:**
- Fixed header with blur background
- Montserrat Bold typography
- Gold accent for active states

**Hero Section:**
- Full-viewport height with cinematic video background
- Overlay gradient for text readability
- Large typography with gold accents
- Dual CTA buttons (primary gold, secondary outline)

**Service Cards:**
- Dark gradient backgrounds
- Hover effects with subtle scale and glow
- Gold accent borders on interaction
- Problem/Solution structure with clear hierarchy

**Forms & CTAs:**
- Gold primary buttons with subtle gradients
- White outline buttons for secondary actions
- Generous padding for touch targets
- Rounded corners for modern feel

**Testimonials:**
- Video testimonials with play overlay
- Company logos for credibility
- Rotating carousel functionality

**Counters:**
- Real-time updating numbers
- Gold accent color for metrics
- Clean typography with generous spacing

### Images Section
**Hero Video:**
- Large cinematic video of Franco Larrarte (full viewport width/height)
- Professional filming with shallow depth of field
- Dark overlay for text contrast

**Service Icons:**
- Modern, minimalist icons from Heroicons
- Gold color treatment for consistency
- 64px size for optimal visibility

**Testimonial Photos:**
- Professional headshots of clients
- Circular crop with subtle border
- High contrast for dark theme compatibility

**Company Logos:**
- Client company logos in white/light gray
- Consistent sizing and spacing
- Subtle hover effects

**Background Elements:**
- Subtle film strip patterns as decorative elements
- Grid overlays for technical aesthetic
- Minimal use to maintain focus on content

### E. Animations & Interactivity
**Card Animations:**
- Hover: Lift effect with subtle shadow increase and blue glow
- Scale: Slight scale (1.02) on hover for depth
- Border: Animated electric blue border on interaction
- Content reveal: Smooth opacity transitions for additional content

**Scroll Animations:**
- Fade-in with slide-up for sections entering viewport
- Stagger animations for card grids (delay cascade)
- Counter animations for real-time metrics
- Progress bars with smooth fill animations

**Micro-interactions:**
- Button ripple effects on click
- Icon rotation/bounce on hover
- Image zoom on hover within containers
- Smooth color transitions (200ms ease)

**Avoid:**
- Complex parallax effects
- Distracting motion graphics
- Auto-playing content beyond hero

### F. Interactive Cards Design
**Structure:**
- Glass-morphism effect with backdrop blur
- Platinum gray background with subtle blue tint
- Electric blue accent line on left/top border
- Icon or image at top with overlay hover effect

**States:**
- Default: Platinum gray with subtle shadow
- Hover: Elevated with electric blue glow, scale 1.02
- Active: Pressed state with deeper blue accent

**Content Pattern:**
- Visual (icon/image) → Title → Description → CTA
- Progressive disclosure: Show more details on hover/click
- Flip cards for before/after or problem/solution views

This design system creates a modern, tech-forward experience with platinum grays and electric blues, emphasizing interactivity and visual polish while maintaining high conversion focus.