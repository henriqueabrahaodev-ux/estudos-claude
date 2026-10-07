---
name: PataFeliz
description: Warm, caring local pet center in São Paulo — grooming, veterinary, hotel, and retail under one roof.
colors:
  amber-gold: "#f59e0b"
  amber-deep: "#d97706"
  amber-blush: "#fffbeb"
  ink: "#18181b"
  graphite: "#3f3f46"
  slate: "#52525b"
  mist: "#71717a"
  silver: "#a1a1aa"
  cloud: "#d4d4d8"
  frost: "#f4f4f5"
  surface: "#ffffff"
typography:
  display:
    fontFamily: "Nunito Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Nunito Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Nunito Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Nunito Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Nunito Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  caption:
    fontFamily: "Nunito Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  full: "9999px"
  card: "1rem"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "3rem"
  xl: "5rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.amber-gold}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "0.75rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.amber-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "0.75rem 2rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    rounded: "{rounded.full}"
    padding: "0.75rem 2rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
---

# Design System: PataFeliz

## Overview

**Creative North Star: "The Warm Neighborhood Clinic"**

PataFeliz feels like a place that has been on the same corner for a decade — familiar, well-lit, and run by people who remember your pet's name. The visual system channels this through amber warmth, clean white surfaces, and a confident typographic hierarchy that communicates professional care without clinical distance. It is warm without being cartoon-like; it earns trust before asking for a booking.

The palette is deliberately restrained: a single amber accent — deployed sparingly — against a graduated zinc neutral scale and generous white space. The forms are soft (pills for CTAs, rounded cards for content) but the typography is tight and purposeful. The result is a service business that respects its customers' time and their emotional relationship with their pets.

Sections alternate between pure white and amber-tinted backgrounds (`#fffbeb`) to create rhythm without relying on hard borders or dividers. Cards emerge from the page through state-conditional shadow, not permanent elevation — rest is flat, interaction is lifted.

**Key Characteristics:**
- Amber warmth as a single-accent identity color, used for CTAs and brand marks only
- Graduated zinc neutrals (ink to frost) carrying all hierarchy and supporting roles
- Pill-shaped CTAs signal accessibility and warmth; card forms are gently rounded
- Flat at rest, lifted on interaction — elevation is earned through state
- Section-level tinted alternation as a replacement for dividers

## Colors

A warm, focused palette: one amber accent with nine calibrated neutrals. The amber is the heartbeat; the zinc scale does the structural work.

### Primary
- **Amber Gold** (`#f59e0b`): The identity color. Used on the primary CTA, the brand logo, star ratings, and nav hover states. Its rarity — appearing in exactly these four contexts — is what makes it feel meaningful rather than decorative.
- **Amber Deep** (`#d97706`): Hover and active state for Amber Gold. Darker by one tone to signal pressed/interacted state without introducing a second hue.
- **Amber Blush** (`#fffbeb`): The brand tint used for section backgrounds (differentials, alternating heroes). Low saturation; functions as "warmth on a wall" rather than a color block.

### Neutral
- **Ink** (`#18181b`): Headings, bold labels, and the footer background. The deepest neutral — reserved for the highest-contrast text and structural elements.
- **Graphite** (`#3f3f46`): Navigation link text and secondary headlines. Dark enough for legibility; less terminal than Ink.
- **Slate** (`#52525b`): Primary body copy. The default reading color for paragraphs and card descriptions.
- **Mist** (`#71717a`): Secondary body copy, section subtitles, and support text.
- **Silver** (`#a1a1aa`): Tertiary text — pet names under testimonials, timestamps, helper text.
- **Cloud** (`#d4d4d8`): Ghost button border. Lightest structural border in the system.
- **Frost** (`#f4f4f5`): Card border at rest. Nearly invisible; just enough to separate white-on-white.
- **Surface** (`#ffffff`): Card backgrounds, page body, header. The canonical white.

### Named Rules
**The One Amber Rule.** Amber Gold is used in exactly four contexts: the primary CTA button, the brand logo mark, star ratings, and interactive hover state for nav links. Using it anywhere else dilutes the brand signal. When in doubt, reach for Slate or Graphite instead.

**The Section Stripe Rule.** Sections alternate between Surface (`#ffffff`) and Amber Blush (`#fffbeb`). No other background tints are introduced. Borders between sections are never needed.

## Typography

**Display/Body Font:** Nunito Sans (loaded via `next/font/google`), with `ui-sans-serif, system-ui, sans-serif` as system fallback.

**Character:** Nunito Sans is a rounded humanist sans with warmth baked into its terminals. The softly curved letterforms carry the same approachability as the pill-shaped CTAs and rounded-2xl cards in the design system — the typeface and the shapes speak the same language. It carries professional weight without coldness, and its rounded forms are particularly well-suited to Brazilian Portuguese's rhythm and warmth. Used across all roles; hierarchy is created through size and weight variation (400–800), not font switching.

### Hierarchy
- **Display** (800 ExtraBold, clamp(2.25rem → 3.75rem), line-height 1.1, tracking -0.02em): The hero headline only. Paired with the amber accent span on the brand claim. The ExtraBold weight at large size gives Nunito Sans the visual authority a display face needs.
- **Headline** (700 Bold, 1.875rem, line-height 1.2, tracking -0.01em): Section titles ("Nossos Serviços", "Por que escolher..."). Center-aligned at section entry.
- **Title** (700 Bold, 1.125rem, line-height 1.4): Card titles and service names. The primary label inside content units.
- **Body** (400 Regular, 1rem, line-height 1.65): Hero subheads, descriptive paragraphs, testimonial quotes. Minimum reading floor — never set reading copy below 1rem.
- **Label** (500 Medium, 0.875rem, line-height 1.4): Navigation links, button text, customer names.
- **Caption** (400 Regular, 0.75rem, line-height 1.4): Supporting metadata — pet descriptor, helper text under testimonials.

### Named Rules
**The No-Mix Rule.** A single typeface across all roles. Weight and size do the hierarchy work. Do not introduce a second typeface for display or accent purposes.

## Layout

The grid is a centered 72rem (`max-w-6xl`) container with a 1.5rem horizontal gutter (`px-6`) on all screen sizes. Sections use `py-20` (5rem) vertical padding at rest and `py-24` (6rem) for the hero. Content grids scale from 1 column (mobile) to 2→4 columns (services at `lg`) and 1→3 columns (differentials, testimonials, footer at `sm`).

The header is sticky (`top-0 z-50`) with no blur — it relies on `shadow-sm` to communicate layering. Navigation is hidden below `sm` breakpoint; a single "Agendar" CTA button remains visible at all sizes.

Spacing rhythm uses multiples of 0.5rem: cards are padded at `p-6` (1.5rem), section gaps run at `gap-6` (1.5rem) to `gap-10` (2.5rem). No visual dividers between sections — alternating background tints handle separation.

## Elevation & Depth

This system is flat by default. Surfaces carry no ambient shadow at rest; elevation is a state signal, not a default treatment. Cards surface from the page only when the user interacts with them.

### Shadow Vocabulary
- **Card hover lift** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)`): Applied to `.hover:shadow-md` cards on pointer-enter. Signals interactivity.
- **Header layer** (`box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05)`): The sticky header's `shadow-sm` to indicate it floats above the scroll layer.

### Named Rules
**The Earned Elevation Rule.** Shadows appear only in response to state (hover, sticky position). No element in the system carries a resting shadow except the sticky header, which uses the lightest available shadow to signal its fixed layer. Permanent shadows are prohibited on cards, sections, and buttons.

## Shapes

The form language divides cleanly between two radii: pills for interactive affordances and softly rounded rectangles for content containers.

- **CTAs and buttons:** `border-radius: 9999px` — full pill. Signals approachability and accessibility. Used on both the primary amber button and the ghost border button. The header "Agendar" button and all hero/section CTAs follow this rule.
- **Cards and containers:** `border-radius: 1rem` (16px) — generously rounded rectangle. Used on all service cards, testimonial cards, and any panel-style container. Feels considered without reaching into toy-like territory.
- **Inputs (if added):** should follow the card radius (1rem) rather than the pill, to maintain distinction between action controls and input fields.

No clipping, no asymmetric corners, no geometric shapes beyond these two.

## Components

### Buttons

Warm and immediate — the amber pill button is the most visible element on any section.

- **Shape:** Full pill (`border-radius: 9999px`), `padding: 0.75rem 2rem` (hero: `0.75rem 2.5rem`)
- **Primary:** Amber Gold background (`#f59e0b`), white text, `font-weight: 600`, `font-size: 0.875rem`
- **Hover / Focus:** Background deepens to Amber Deep (`#d97706`), `transition: background 150ms ease`
- **Ghost:** Transparent background, Cloud border (`1px solid #d4d4d8`), Graphite text. Hover: Frost background (`#f4f4f5`)

### Cards / Containers

Flat and clean at rest; gently lifted on hover.

- **Corner Style:** Softly rounded (1rem / `rounded-2xl`)
- **Background:** Surface (`#ffffff`)
- **Border:** Frost border at rest (`1px solid #f4f4f5`)
- **Shadow Strategy:** None at rest; `shadow-md` on hover (per Earned Elevation Rule)
- **Internal Padding:** `1.5rem` (`p-6`) on all sides
- **Text alignment:** Center-aligned for icon + title + description triples; left-aligned for testimonials

### Navigation

- **Container:** Sticky, `bg-white`, `shadow-sm`, `z-index: 50`
- **Brand mark:** Logo mark left-aligned, amber text (`text-amber-600`), `font-size: 1.5rem`, `font-weight: 700`
- **Links:** `font-size: 0.875rem`, `font-weight: 500`, Graphite (`#3f3f46`), hidden below `sm` breakpoint
- **Active/hover:** Color transitions to Amber Gold (`#f59e0b`), `transition: color 150ms ease`
- **Mobile:** Nav links collapse; sticky CTA pill button remains

### Testimonial Card (Signature Component)

A three-part composition: amber star row → quoted body → name + pet badge.

- Star row: Amber Gold text, `font-size: 1.125rem`, `margin-bottom: 0.75rem`
- Quote body: Slate (`#52525b`), `font-size: 0.875rem`, `line-height: 1.6`, wrapped in `&ldquo;&rdquo;` marks
- Name: Label weight (500), Ink (`#18181b`); Pet descriptor: Caption weight (400), Silver (`#a1a1aa`)

## Do's and Don'ts

### Do:
- **Do** use Amber Gold (`#f59e0b`) exclusively on CTAs, the logo mark, star ratings, and nav hovers — its scarcity is what makes it feel like a brand color.
- **Do** alternate section backgrounds between Surface (`#ffffff`) and Amber Blush (`#fffbeb`) to create rhythm without borders.
- **Do** use full-pill buttons (`border-radius: 9999px`) for all interactive CTAs; `rounded-2xl` (1rem) for all content cards.
- **Do** keep cards flat at rest and lift them (`shadow-md`) only on hover.
- **Do** use center-aligned layout for icon-card triples (services, differentials) and left-aligned layout for testimonials.
- **Do** anchor all sections to the `max-w-6xl` container with `px-6` gutter.

### Don't:
- **Don't** use amber on more than 10% of any screen's visible area — decorative amber fills break the brand signal.
- **Don't** apply permanent `shadow-md` or larger to resting cards; elevation is earned through interaction only.
- **Don't** introduce a second accent color (no teal, no coral, no green) — the amber + zinc system is intentionally focused.
- **Don't** use square or sharp-cornered buttons; all interactive controls use the pill radius.
- **Don't** add borders or dividers between sections; background alternation handles separation.
- **Don't** use font weights above 700 or below 400 — the type scale has no ultra-bold or thin roles.
