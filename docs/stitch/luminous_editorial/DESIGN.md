---
name: Luminous Editorial
colors:
  surface: '#fdf8fe'
  surface-dim: '#ddd8de'
  surface-bright: '#fdf8fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f2f8'
  surface-container: '#f1ecf2'
  surface-container-high: '#ece6ed'
  surface-container-highest: '#e6e1e7'
  on-surface: '#1c1b1f'
  on-surface-variant: '#48454f'
  inverse-surface: '#313034'
  inverse-on-surface: '#f4eff5'
  outline: '#797580'
  outline-variant: '#cac4d1'
  surface-tint: '#645593'
  primary: '#453673'
  on-primary: '#ffffff'
  primary-container: '#5d4e8c'
  on-primary-container: '#d5c6ff'
  inverse-primary: '#cebdff'
  secondary: '#81515a'
  on-secondary: '#ffffff'
  secondary-container: '#fdbec9'
  on-secondary-container: '#7a4a54'
  tertiary: '#2e4257'
  on-tertiary: '#ffffff'
  tertiary-container: '#46596f'
  on-tertiary-container: '#bcd0ea'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e8ddff'
  primary-fixed-dim: '#cebdff'
  on-primary-fixed: '#1f0e4c'
  on-primary-fixed-variant: '#4c3d7a'
  secondary-fixed: '#ffd9df'
  secondary-fixed-dim: '#f4b6c1'
  on-secondary-fixed: '#330f19'
  on-secondary-fixed-variant: '#663a43'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#b4c8e2'
  on-tertiary-fixed: '#071d30'
  on-tertiary-fixed-variant: '#35485e'
  background: '#fdf8fe'
  on-background: '#1c1b1f'
  surface-variant: '#e6e1e7'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '900'
    lineHeight: 92px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-md:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  page-margin: 4rem
  section-gap: 6rem
  gutter: 2rem
  panel-padding: 3rem
---

## Brand & Style
The design system embodies a premium, academic yet ethereal aesthetic. It is tailored for students, researchers, and creatives who wish to present their work with a sophisticated, slide-like narrative. The personality is "Dreamy Professional"—combining the rigor of academia with the soft, atmospheric beauty of a high-end photography portfolio.

The visual style is a blend of **Glassmorphism** and **Minimalism**. It utilizes translucent white panels, heavy backdrop blurs, and liquid-glass effects to create a sense of depth and lightness. The UI should feel like a series of curated slides, using decorative thin lines and sparkle accents to guide the eye and add a touch of whimsy to a structured layout.

## Colors
This design system uses a palette of soft pastels grounded by deep, authoritative tones. 
- **Primary:** A deep lavender-grape (#5D4E8C) used for headlines and high-contrast labels to ensure legibility and academic weight.
- **Secondary:** Soft Pink (#FFC0CB) used in background gradients and subtle accents.
- **Tertiary:** Light Blue (#B0C4DE) used for secondary interactive elements and glass highlights.
- **Surface:** Translucent white panels with high-saturation background blurs.

The default background is never a solid color but a "liquid" gradient that shifts softly, mimicking the movement of light through a prism.

## Typography
The typography strategy creates a high-contrast editorial feel. 
- **Headlines:** Uses *Playfair Display*. It is used at scale, often with tight letter-spacing for a bold, dramatic effect that mimics high-end fashion or art magazines.
- **Body:** Uses *Work Sans*. Its neutral, professional character ensures that academic content remains highly readable even on translucent backgrounds.
- **Labels:** Uses *Plus Jakarta Sans*. These are kept small, bold, and often uppercase with generous letter spacing to serve as navigation cues and metadata tags.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy, treating each screen as a "slide" or "plate." 
- **Desktop:** A 12-column grid with wide 4rem margins to create a focused, center-weighted presentation.
- **Spacing Rhythm:** Spacing is generous. Content is allowed to breathe, with wide "section-gaps" to prevent the pastel colors from becoming visually overwhelming.
- **Reflow:** On mobile, margins reduce to 1.5rem, and the display typography scales down significantly. Panels stack vertically, losing their horizontal glass overlaps to maintain clarity.

## Elevation & Depth
Depth is achieved through **Glassmorphism** rather than traditional shadows. 
- **Surface Strategy:** Content lives on translucent white layers (`rgba(255, 255, 255, 0.45)`). These layers must have a `backdrop-filter: blur(20px)` to maintain legibility over the vibrant background gradients.
- **Shadows:** Use "Ambient Glows" instead of drop shadows. Shadows should be very large, low-opacity, and tinted with the primary lavender color to create a soft halo effect around panels.
- **Decorative Lines:** Use 1px "Hairline" strokes in primary or white (at 30% opacity) to connect elements or divide sections, punctuated by 4-point star icons at intersections.

## Shapes
The shape language is defined by large, sweeping curves that feel organic and inviting.
- **Panels & Images:** Use a consistent `rounded-xl` (1.5rem) radius to soften the academic structure.
- **Buttons:** All primary actions must be **pill-shaped** (fully rounded) to contrast against the rectangular layout of the content panels.
- **Accents:** Use a 4-pointed sparkle (star) icon as a recurring motif for bullet points or decorative flourishes.

## Components
- **Buttons:** Pill-shaped with a solid primary color background and white text. Secondary buttons should be translucent glass with a thin white border.
- **Cards/Panels:** Large white translucent containers with `backdrop-filter`. No heavy borders; use a soft inner glow or 1px stroke at 20% opacity.
- **Input Fields:** Minimalist lines or very softly rounded translucent boxes. Focus states should be indicated by a slight increase in the backdrop blur intensity.
- **Chips/Labels:** Small, capsule-shaped elements with `label-bold` typography. Use them for "Tags" or "Project Categories."
- **Progress Indicators:** Use soft, circular "dot" paginators (as seen in the reference) to emphasize the slide-based navigation.
- **Decorative Accents:** Incorporate thin horizontal lines that terminate in star icons to separate headlines from body copy.