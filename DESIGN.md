---
name: Cathode Instrument Calculator
description: Professional/academic engineering calculator as a bench cathode instrument
colors:
  ground: "#070b12"
  ground-2: "#0b121d"
  key: "#0c141f"
  key-hover: "#121e2c"
  key-active: "#16283a"
  gauze: "#2a2113"
  bronze: "#8a6a3a"
  ghost-text: "#35506e"
  ink: "#c7d4e2"
  cathode: "#ff7a18"
  cathode-soft: "#ff7a1822"
  operator: "#6fb3ff"
  line: "#16202e"
  danger: "#ff5a5a"
typography:
  display:
    fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", \"Cascadia Code\", monospace"
    fontSize: "clamp(38px, 11vw, 56px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  body:
    fontFamily: "\"IBM Plex Mono\", ui-monospace, monospace"
    fontSize: "15px"
    fontWeight: 500
  label:
    fontFamily: "\"IBM Plex Mono\", ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 600
    letterSpacing: "0.06em"
rounded:
  sm: "16px"
  md: "18px"
spacing:
  sm: "8px"
  md: "16px"
components:
  button-primary:
    backgroundColor: "{colors.cathode}"
    textColor: "#1a0d02"
    rounded: "{rounded.md}"
    padding: "0 16px"
  button-ghost:
    backgroundColor: "{colors.key}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
---

# Design System: Cathode Instrument Calculator

## Overview

**Creative North Star: "The Bench Counter at 2am"**

A cathode instrument. Every value is present at once as a dark ghost behind a fine bronze anode gauze; the live result is struck forward in glowing cathode orange, exactly like a decade counter in a dark lab. The surface is quiet, precise, and engineering-credible — not a toy, not a glowing neon cliché. The orange glow is the world's core metaphor, not decoration: it is the active value blazing while its nine unlit sisters hang behind it.

**Key Characteristics:**
- Ink-blue black ground with a bronze wire-gauze veil (screen-blend, low opacity)
- Ghost numeral layer (expression row) above a solid glowing cathode-orange result
- Monospace tabular numerals throughout; one condensed display voice
- Tactile key travel (translateY + inset shadow on :active)
- SCI panel reveals a second instrument layer, animated via grid-template-rows

## Colors

Palette is ink-blue black + bronze gauze + one cathode-orange glow. Orange is reserved for the live result and the active SCI toggle; it carries <15% of the surface.

### Primary
- **Cathode Orange** (#ff7a18): the live result text and the active equals/SCI-toggle state. Its glow (`text-shadow`) is identity, not slop.
- **Cathode Soft** (#ff7a1822): active SCI-toggle background tint.

### Secondary
- **Operator Blue** (#6fb3ff): arithmetic operators (÷ × − +), kept cool to separate from the orange result glow.

### Neutral
- **Ink** (#c7d4e2): primary text and key legends (raised to ≥4.5:1 after finish-review fix).
- **Ghost Text** (#35506e): the expression ghost row only (aria-hidden, world-justified low contrast).
- **Key** (#0c141f): key background; **Key Hover** (#121e2c); **Key Active** (#16283a).
- **Ground** (#070b12) / **Ground-2** (#0b121d): page and panel base.
- **Gauze** (#2a2113) / **Bronze** (#8a6a3a): anode gauze veil and SCI-toggle idle text.
- **Line** (#16202e): grid dividers and borders.
- **Danger** (#ff5a5a): error state (replaces orange glow, red glow instead).

### Named Rules
**The One Glow Rule.** Cathode-orange glow appears only on the live result and the active equals key. Its rarity is the point; never spread it to dividers, cards, or hover states.

## Typography

**Display & Body Font:** IBM Plex Mono (ui-monospace, SF Mono, Cascadia Code fallback)
**Character:** One monospace voice, tabular numerals, tight tracking on the display. The instrument reads like lab printout, not a marketing face.

### Hierarchy
- **Display** (500, clamp(38px,11vw,56px), 1.02): the result line; cathode-orange with glow.
- **Body** (500, 15px): expression ghost row and sci-fn labels.
- **Label** (600, 14px, 0.06em): SCI-toggle text, sentence-case hint.

## Layout

Single centered instrument panel, `min(100%, 380px)`. Key grid is 4 columns, 1px bronze line gaps. SCI panel sits above the main key grid, animated open via `grid-template-rows: 0fr→1fr`. Mobile: safe-area insets, key min-height 64px under 420px. No card-in-card; one panel owns the screen.

## Elevation & Depth

Flat-by-default surfaces; depth comes from the bronze gauze veil (screen-blend) and the cathode glow, not from drop shadows. The panel carries one ambient shadow (`0 30px 80px -24px #000`) and active keys get an inset top shadow (`0 -2px 0 #0006`).

### Shadow Vocabulary
- **Panel ambient** (`0 30px 80px -24px #000000cc`): panel lift off the ground.
- **Key press** (`0 -2px 0 #00000066 inset`): tactile key-travel on :active.

## Shapes

Gently rounded panel (18px) and keys (inherit). One radius language; no hard offset neo-brutalist shadows. Bronze 1px hairlines separate grid cells.

## Components

### Buttons
- **Shape:** rounded (18px panel context), min-height 68px.
- **Key (default):** Key bg (#0c141f), Ink text; hover→Key Hover, active→translateY(2px)+inset shadow.
- **Operator:** Operator Blue text on a subtle cool gradient (#0e1a28→#0c141f).
- **Equals (primary):** Cathode Orange bg, near-black text, soft outer glow; the one warm-solid key.
- **SCI toggle:** Bronze idle text; active state gets Cathode Soft bg + Cathode Orange text.
- **Focus:** 2px Cathode Orange outline, -2px offset (visible on dark).

### Display
- **Result:** large cathode-orange tabular numerals, horizontal scroll on overflow (scrollbar hidden). Error state swaps to Danger red glow + smaller size.
- **Expression ghost:** muted ghost-text row above result, ellipsis-clipped, hidden when empty.

## Do's and Don'ts

### Do:
- Do keep the cathode-orange glow exclusively on the live result and equals key.
- Do preserve the bronze gauze veil as the surface's texture signal.
- Do maintain ≥4.5:1 on all interactive key text (Ink, not Ghost).

### Don't:
- Don't add gradient text, nested cards, kicker eyebrows, or emoji-as-icons.
- Don't spread the orange glow to dividers, hover states, or panels.
- Don't soften the cathode metaphor into a generic "dark mode with accent" look.
