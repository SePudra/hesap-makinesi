# PRODUCT

## What it is
A browser-based scientific calculator. Basic arithmetic plus a scientific layer
(sin/cos/tan, log/ln, √, xʸ, π, e, %, ±) revealed via a SCI toggle.

## Audience
Students, engineers, and technical users who need reliable calculation without
noise. The visitor came to operate, not to be persuaded.

## Mode
Operate — task completion, scanability, and native affordances outrank expression.

## Product truth (must survive any redesign)
- All current functions: digits, + − × ÷, C, ⌫, =, SCI panel (sin/cos/tan/√/log/ln/xʸ/π/e/%/±)
- Keyboard support (Esc clears, digits/operators/enter/backspace)
- No frameworks — native HTML/CSS/JS only, single static file, opens from file://
- `calculator.js` engine stays the source of truth; 14/14 tests must pass
- Ships on GitHub Pages from this branch

## Voice
Precise, quiet, engineering. Controls name their action. No marketing copy.

## Brand lane
Professional / academic. Engineering credibility, not playfulness.

## Anti-references
- Generic AI slop: gradient cards, neon glow, rounded icon tiles above headings
- The previous yellow theme (user explicitly asked to discard it)

## Constraints
- Must remain a single self-contained static site (no build step, no deps)
- Accessibility: keyboard + focus visible + reduced-motion respected
- Mobile-first: works on a phone browser
