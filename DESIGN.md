---
name: SC-01 Scientific Calculator
description: A calibrated bench instrument with a graphite chassis and cathode-orange readout.
colors:
  primary: "#ff7a1a"
  drafting-bench: "#d7d3c8"
  drafting-grid: "rgba(44, 51, 51, 0.08)"
  graphite-shell: "#252a2c"
  shell-edge: "#111516"
  graphite-panel: "#303638"
  graphite-panel-high: "#3b4244"
  smoked-screen: "#100f0c"
  screen-edge: "#050504"
  phosphor-orange: "#ff7a1a"
  phosphor-bright: "#ff9a43"
  phosphor-dim: "#7d3510"
  phosphor-ghost: "rgba(255, 122, 26, 0.1)"
  instrument-ink: "#f0f2ed"
  instrument-ink-muted: "#b7bfbd"
  keycap: "#e3e0d7"
  keycap-top: "#f6f4ed"
  keycap-ink: "#202526"
  keycap-muted: "#4e595a"
  operator-cool: "#c6d7d7"
  operator-cool-top: "#e1eded"
  divider: "rgba(255, 255, 255, 0.13)"
  focus-blue: "#74c7ff"
  error-red: "#ff6363"
  science-brass: "#bd7844"
  science-brass-top: "#d9a77f"
  science-active: "#a43e0f"
  science-active-top: "#d86824"
typography:
  display:
    fontFamily: '"SFMono-Regular", "Cascadia Mono", "Roboto Mono", ui-monospace, monospace'
    fontSize: "58px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.045em"
  title:
    fontFamily: '"SFMono-Regular", "Cascadia Mono", "Roboto Mono", ui-monospace, monospace'
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "17px"
    letterSpacing: "0.08em"
  body:
    fontFamily: '"DIN Alternate", "Bahnschrift", "Aptos", system-ui, sans-serif'
    fontSize: "20px"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "0em"
  label:
    fontFamily: '"DIN Alternate", "Bahnschrift", "Aptos", system-ui, sans-serif'
    fontSize: "10px"
    fontWeight: 700
    lineHeight: "12px"
    letterSpacing: "0.11em"
rounded:
  shell: "18px"
  display: "9px"
  key: "8px"
  science-key: "6px"
spacing:
  compact-gap: "7px"
  key-gap: "9px"
  mobile-inset: "18px"
  bench-grid: "20px"
  instrument-inset: "24px"
components:
  key:
    backgroundColor: "{colors.keycap}"
    textColor: "{colors.keycap-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.key}"
    height: "58px"
  key-operator:
    backgroundColor: "{colors.operator-cool}"
    textColor: "{colors.keycap-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.key}"
    height: "58px"
  key-equals:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.smoked-screen}"
    rounded: "{rounded.key}"
    height: "58px"
  key-science-toggle:
    backgroundColor: "{colors.science-brass}"
    textColor: "{colors.smoked-screen}"
    rounded: "{rounded.key}"
    height: "58px"
  cathode-display:
    backgroundColor: "{colors.smoked-screen}"
    textColor: "{colors.phosphor-bright}"
    typography: "{typography.display}"
    rounded: "{rounded.display}"
    padding: "21px 19px 17px"
---

# Design System: SC-01 Scientific Calculator

## Overview

**Creative North Star: "The Calibrated Bench Instrument"**

SC-01 is treated as a physical measurement instrument resting on a pale drafting bench, not as a generic dark calculator card. A graphite chassis, visible fasteners, engraved-feeling labels, and a smoked cathode aperture establish a professional, academic engineering character.

The visual hierarchy follows the working sequence of the instrument: identify the model and DEG state, read the warm phosphor result, reveal the scientific bank only when needed, then operate the tactile four-column keypad. The measurement grid and cathode glow are justified by that world; neither is free-floating decoration.

**Key Characteristics:**
- Pale drafting bench with a measured grid.
- Graphite enclosure with structural edge, inset, and fastener detail.
- Smoked cathode aperture with a phosphor-orange numeric result.
- Cool operator bank separated from pale mechanical keycaps.
- Short, visible mechanical key travel.
- Orange reserved for live instrument state and decisive calculation.

## Colors

The palette is predominantly pale neutral and graphite, with cool blue-gray controls and rare functional orange.

### Primary
- **Phosphor Orange:** The active result, illuminated SCI state, selection treatment, and equals action. It is the instrument's functional energy, not a general decoration color.

### Secondary
- **Cool Operator Bank:** Arithmetic operators use a restrained blue-gray pair to remain distinct from numeric keys without competing with the result.
- **Science Brass:** The closed SCI toggle uses a muted warm-metal pair; its active state shifts toward the phosphor family.

### Neutral
- **Drafting Bench:** The page field beneath the instrument and source of the measurement grid.
- **Graphite Chassis:** The main enclosure and keypad panel, separated with darker structural edges and subtle highlights.
- **Smoked Screen:** The near-black cathode aperture that gives the result maximum visual priority.
- **Pale Keycap:** Numeric and utility key surfaces, with a lighter top plane and dark legends.
- **Instrument Ink:** High-contrast chassis text, with a quieter muted companion for status and identity labels.

### Named Rules

**The Rare Orange Rule.** Orange is reserved for the result, active instrument state, selection, and equals action; it must not become broad surface decoration.

**The Instrument Color Rule.** Every color must read as bench, chassis, aperture, key material, status, focus, or error—not as an unrelated brand flourish.

## Typography

**Display Font:** SFMono-Regular (with Cascadia Mono, Roboto Mono, and ui-monospace fallbacks)  
**Body Font:** DIN Alternate (with Bahnschrift, Aptos, system-ui, and sans-serif fallbacks)  
**Label/Mono Font:** SFMono-Regular (with Cascadia Mono, Roboto Mono, and ui-monospace fallbacks)

**Character:** Monospaced data typography makes values and model markings feel calibrated; the condensed technical UI stack keeps controls direct and legible. Numeric output uses tabular figures.

### Hierarchy
- **Display:** Medium-weight, tightly tracked monospaced numerals for the result and ghosted cathode segments.
- **Title:** Bold monospaced model identifier with measured positive tracking.
- **Body:** Semibold technical sans for large key legends.
- **Label:** Bold, uppercase technical sans for status and identity metadata.
- **Expression:** Medium-weight monospaced data line, quieter than the result and allowed to truncate on one line.

### Named Rules

**The Data Face Rule.** Values, formulas, scientific keys, and model markings use the monospaced data stack; operational labels and primary keypad legends use the technical UI stack.

## Layout

The instrument is centered on the drafting bench and capped at 430px wide. Its identity rail, display aperture, collapsible scientific bank, and keypad form one continuous vertical chassis. Both key banks use four equal columns; the main keypad uses the key-gap rhythm, while the denser scientific bank uses the compact-gap rhythm. The zero key spans two columns and the final scientific key spans two columns.

At the 440px width breakpoint, the chassis becomes edge-to-edge, loses its outer corner radius and inline border, and reduces the bench grid, insets, gaps, and key height. Portrait height breakpoints at 850px and 730px compact vertical spacing and key heights; the shortest layout hides keyboard help. The page padding respects top and bottom safe-area insets.

## Elevation & Depth

Depth is structural and material: the chassis combines inset metal highlights with one ambient bench shadow, the aperture is recessed, and keys stand on short hard bases before physically compressing. Tonal gradients describe top planes rather than generic gloss.

### Shadow Vocabulary
- **Chassis:** Paired inset highlights plus a broad low ambient shadow anchor the instrument to the bench.
- **Cathode Recess:** A narrow frame highlight and deep inset shadow cut the display into the shell.
- **Key Travel:** A one-pixel top highlight, four-pixel hard base, and soft lower shadow establish mechanical height; active state reduces the base to one pixel after a three-pixel translation.
- **Cathode Glow:** The result receives a restrained orange text glow, and the active mode lamp receives a compact orange halo.

### Named Rules

**The Structural Depth Rule.** Shadows must explain enclosure, recess, illumination, or mechanical travel; do not add floating-card elevation.

## Shapes

The chassis uses a substantial rounded metal silhouette, while the display and primary keys use tighter radii and scientific keys tighten further. Circular geometry is limited to screws and the DEG mode lamp. Borders remain visible because they represent seams, bezels, and key edges. On narrow screens, the chassis corners square off as the instrument meets the viewport edges.

## Components

### Mechanical Key

Pale keycaps are tactile and familiar, with a light top plane, dark legend, hard lower base, and short travel.

- **Shape:** Compact rounded rectangle with a one-pixel border and 58px minimum height.
- **Hover / Focus:** Hover brightens slightly; keyboard focus uses a three-pixel cool-blue outline with a three-pixel offset.
- **Active:** The key moves down three pixels while its hard base and soft shadow collapse.
- **Responsive:** Minimum height steps down to 55px at narrow width, 50px at short portrait height, and 48px when the scientific bank is open in the compact portrait layout.

### Operator Key

Arithmetic operators retain the mechanical key construction but use cool blue-gray top and base planes. This creates one calm vertical operator bank without borrowing the orange action color.

### Equals Key

Equals is the sole solid orange primary action. Its larger, heavier legend and warmer lower shadow identify the completion action while preserving the same mechanical travel.

### SCI Toggle

The SCI toggle is a compact uppercase control in muted warm metal. When expanded, it shifts to a deeper orange pair and illuminates the DEG mode lamp; the scientific bank opens with a row expansion and opacity transition.

### Scientific Key

Scientific functions use smaller monospaced legends, a darker graphite gradient, tighter corners, and the 44px minimum touch target. They live only inside the collapsible function bank.

### Cathode Display

The display is a recessed smoked aperture with a faint vertical segment texture and ghost numerals behind the live value. The expression line is dimmer than the phosphor-bright, tabular result; errors switch to red, reduce size, remove tight tracking, and permit wrapping.

## Do's and Don'ts

### Do:
- **Do** preserve the continuous identity rail, recessed display, optional function bank, and four-column keypad hierarchy.
- **Do** use orange only for functional energy: live result, active state, selection, and equals.
- **Do** keep operator keys cool, numeric keys pale, and scientific keys graphite.
- **Do** preserve visible focus, touch targets, keyboard parity, safe-area spacing, and the reduced-motion path.
- **Do** let the measurement grid and cathode glow remain justified by the bench-instrument world.

### Don't:
- **Don't** return to the discarded yellow theme or turn the interface playful.
- **Don't** use orange as a broad chassis, bench, or decorative background.
- **Don't** replace mechanical key travel with flat generic buttons or floating-card motion.
- **Don't** add ornamental effects that cannot be read as measurement, material, illumination, or operation.
- **Don't** introduce external imagery, logos, testimonials, or commercial claims.
