# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Students, engineers, and technical users doing quick, reliable calculations on desktop or phone.

## Product Purpose

A dependency-free scientific calculator for basic arithmetic and common scientific operations. Success means the user can enter, verify, and complete a calculation immediately without interface noise.

## Operating Context

Frequent short sessions in a browser, often from a phone. The interface must be readable in mixed indoor light and remain fully usable by touch or keyboard.

## Capabilities and Constraints

- Basic arithmetic: addition, subtraction, multiplication, and division.
- Scientific functions: sin, cos, tan, square root, log, ln, powers, pi, e, percent, and sign change.
- A single SCI control reveals or hides the scientific controls.
- Degree-based trigonometry.
- Keyboard operation, visible focus, accessible labels, reduced-motion support.
- Plain HTML, CSS, and JavaScript only; no framework, package, build step, or network dependency.
- Must work both from `file://` and GitHub Pages.
- `calculator.js` remains the calculation source of truth; its 14 tests must continue to pass.

## Brand Commitments

Professional, academic, and engineering-led. Precise and quiet rather than playful. The previous yellow visual theme is explicitly discarded.

## Evidence on Hand

The working implementation and unit tests are in `index.html`, `calculator.js`, and `calculator.test.mjs`. No logo, external imagery, testimonials, or commercial claims exist and none should be invented.

## Product Principles

- Make the active value and current operation unmistakable.
- Preserve familiar calculator affordances.
- Use visual expression to reinforce instrument precision, never to obstruct the task.
- Keep the implementation dependency-free and directly runnable.

## Accessibility & Inclusion

Controls require accessible names, WCAG AA contrast, touch targets of at least 44px, keyboard parity, visible focus, and a reduced-motion path.
