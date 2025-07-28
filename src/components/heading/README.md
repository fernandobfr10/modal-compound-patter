# 🎯 Heading Component

A foundational heading primitive based on **Radix UI** patterns, providing semantic heading elements with consistent typography and advanced text features.

## 🎯 **Key Features**

✅ **Size Scale 1-9** - Following Radix UI scaling optimized for headings  
✅ **AsChild Support** - Render custom elements  
✅ **Semantic Elements** - h1, h2, h3, h4, h5, h6 (default: h1)  
✅ **Font Weights** - light, regular, medium, bold  
✅ **Text Alignment** - left, center, right  
✅ **🆕 Text Trimming** - normal, start, end, both  
✅ **Text Truncation** - ellipsis overflow handling  
✅ **🆕 Text Wrapping** - wrap, nowrap, pretty, balance  
✅ **Style-agnostic** - Zero inline styles  
✅ **TypeScript** - Full type safety  
✅ **Accessibility** - Proper semantic HTML structure  

## 🚀 **Basic Usage**

```tsx
import { Heading } from './components/heading'
import './components/heading/heading.css' // Required

// Basic heading (renders as h1 by default, size 6)
<Heading>Main Page Title</Heading>

// Different heading levels with appropriate sizes
<Heading as="h1" size="8">Page Title</Heading>
<Heading as="h2" size="7">Section Title</Heading>
<Heading as="h3" size="6">Subsection Title</Heading>
<Heading as="h4" size="5">Sub-subsection Title</Heading>

// With advanced features
<Heading size="7" weight="bold" align="center" trim="both" wrap="balance">
  Perfectly Balanced Heading with Advanced Typography
</Heading>
```

## 🆕 **Advanced Text Features**

### Text Trimming (`trim` prop)
Removes whitespace around heading content:

```tsx
<Heading trim="normal">Normal spacing (default)</Heading>
<Heading trim="start">Trimmed top spacing</Heading>
<Heading trim="end">Trimmed bottom spacing</Heading>
<Heading trim="both">Trimmed top and bottom spacing</Heading>
```

### Text Wrapping (`wrap` prop)
Controls how headings wrap within containers:

```tsx
<Heading wrap="wrap">Normal wrapping (default)</Heading>
<Heading wrap="nowrap">No wrapping, heading overflows</Heading>
<Heading wrap="pretty">Optimized line breaks for readability</Heading>
<Heading wrap="balance">Balanced line lengths for visual harmony</Heading>
```

## 🎭 **AsChild Pattern**

Use `asChild` to render custom elements while maintaining heading styling:

```tsx
// Custom button with heading styling
<Heading asChild size="6" weight="bold" wrap="balance">
  <button className="cta-button">Call to Action</button>
</Heading>

// Custom div with heading features
<Heading asChild size="8" weight="bold" align="center" trim="both">
  <div className="hero-title">Hero Section Title</div>
</Heading>
```

## 🔧 **Props API**

```tsx
interface HeadingProps {
  children: ReactNode
  
  // AsChild pattern
  asChild?: boolean
  
  // HTML heading element (default: "h1")
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  
  // Size scale 1-9 (default: "6")
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  
  // Font weight (default: "regular")  
  weight?: 'light' | 'regular' | 'medium' | 'bold'
  
  // Text alignment
  align?: 'left' | 'center' | 'right'
  
  // 🆕 Text trimming (default: "normal")
  trim?: 'normal' | 'start' | 'end' | 'both'
  
  // Truncate with ellipsis (default: false)
  truncate?: boolean
  
  // 🆕 Text wrapping (default: "wrap")
  wrap?: 'wrap' | 'nowrap' | 'pretty' | 'balance'
  
  // Standard HTML attributes
  className?: string
  style?: CSSProperties
  // ... all other HTML attributes
}
```

## 📏 **Size Scale Reference**

Following **Radix UI** heading scale (optimized for headings):

| Size | Font Size | Line Height | Use Case |
|------|-----------|-------------|----------|
| `1`  | 14px      | 20px        | Fine details, captions |
| `2`  | 16px      | 22px        | Small headings, metadata |
| `3`  | 18px      | 24px        | Sub-subsection titles |
| `4`  | 20px      | 26px        | Subsection titles |
| `5`  | 24px      | 32px        | Section headings |
| `6`  | 30px      | 36px        | **Default**, main headings |
| `7`  | 36px      | 40px        | Page section titles |
| `8`  | 48px      | 48px        | Page titles |
| `9`  | 64px      | 64px        | Hero titles, display headings |

## 🎨 **CSS Classes**

The component uses these CSS classes that you can customize:

```css
/* Base */
.heading-base                     /* Applied to all Heading components */

/* Size Scale */
.heading-size-1 to .heading-size-9 /* Size variants */

/* Font Weights */
.heading-weight-light             /* 300 */
.heading-weight-regular           /* 400 */
.heading-weight-medium            /* 500 */
.heading-weight-bold              /* 700 */

/* Alignment */
.heading-align-left
.heading-align-center  
.heading-align-right

/* 🆕 Text Trimming */
.heading-trim-normal              /* Default spacing */
.heading-trim-start               /* Trim top spacing */
.heading-trim-end                 /* Trim bottom spacing */
.heading-trim-both                /* Trim both */

/* Utilities */
.heading-truncate                 /* Ellipsis overflow */

/* 🆕 Text Wrapping */
.heading-wrap-wrap                /* Normal wrapping */
.heading-wrap-nowrap              /* No wrapping */
.heading-wrap-pretty              /* Pretty wrapping */
.heading-wrap-balance             /* Balanced wrapping */
```

## 📱 **Responsive Design**

Heading sizes automatically scale down on mobile devices:

- Size 7-9 become smaller on screens < 768px
- Maintains visual hierarchy and readability
- Optimized for mobile typography

## 🏗️ **Semantic Hierarchy**

### Recommended Heading Structure
```tsx
<article>
  <Heading as="h1" size="8" weight="bold" trim="both" wrap="balance">
    Article: Advanced Typography in Web Design
  </Heading>
  
  <Heading as="h2" size="6" weight="medium" trim="start">
    Introduction to Typography Systems
  </Heading>
  
  <Heading as="h3" size="5" weight="medium">
    Understanding Text Hierarchy
  </Heading>
  
  <Heading as="h4" size="4" weight="medium">
    Implementation Guidelines
  </Heading>
  
  <Heading as="h5" size="3" weight="medium">
    Technical Details
  </Heading>
  
  <Heading as="h6" size="2" weight="medium">
    Notes and References
  </Heading>
</article>
```

## 💡 **Usage Examples**

### Hero Section
```tsx
<section className="hero">
  <Heading size="9" weight="bold" align="center" wrap="balance">
    Transform Your Digital Experience
  </Heading>
  <Heading size="5" weight="regular" align="center" wrap="pretty" style={{ opacity: 0.8 }}>
    Build modern, accessible, and performant web applications with our design system
  </Heading>
</section>
```

### Blog Post Structure
```tsx
<article>
  <Heading as="h1" size="8" weight="bold" trim="both">
    The Future of Web Typography
  </Heading>
  
  <Heading as="h2" size="6" weight="medium">
    Modern CSS Features
  </Heading>
  
  <Heading as="h3" size="5" weight="medium">
    Text Wrapping and Trimming
  </Heading>
</article>
```

### Custom Components
```tsx
<Heading asChild size="7" weight="bold" align="center" wrap="balance">
  <button className="hero-cta" onClick={handleClick}>
    Start Your Journey Today
  </button>
</Heading>
```

### Card Titles
```tsx
<div className="card">
  <Heading as="h3" size="5" weight="medium" truncate>
    Very Long Card Title That Might Need Truncation
  </Heading>
</div>
```

## 🎯 **Best Practices**

1. **Use appropriate heading levels** - Follow semantic HTML structure (h1 → h2 → h3)
2. **Size 6 as default** - Good balance for most headings
3. **Create visual hierarchy** - Use size and weight to establish importance
4. **Use `wrap="balance"`** for titles and short headings
5. **Use `wrap="pretty"`** for longer headings that might wrap
6. **Leverage `trim` prop** for tight spacing control in layouts
7. **Consider accessibility** - Maintain proper heading structure for screen readers
8. **Use semantic elements** - Match visual hierarchy with HTML hierarchy when possible
9. **Be consistent** - Establish heading patterns across your application
10. **Use `asChild`** for interactive headings while preserving semantics

## 🔄 **Text vs Heading**

| Feature | Text | Heading |
|---------|------|---------|
| **Default Element** | `p` | `h1` |
| **Default Size** | `3` (16px) | `6` (30px) |
| **Elements** | `span`, `div`, `label`, `p`, `b` | `h1`, `h2`, `h3`, `h4`, `h5`, `h6` |
| **Purpose** | Body text, inline text | Titles, section headers |
| **Base Font Weight** | 400 (regular) | 600 (medium-bold) |
| **Semantic Role** | Content text | Document structure |

## 🆕 **What's New**

- **Heading-optimized sizes** - Larger scale appropriate for titles
- **Semantic HTML elements** - h1 through h6 for proper document structure
- **Enhanced typography** - Better letter spacing and line heights for headings
- **Accessibility features** - Proper heading hierarchy support
- **All Text features** - trim, wrap, weight, align, truncate, asChild
- **Mobile optimization** - Responsive scaling for better mobile readability

---

**🎯 Professional, semantic, and powerful heading typography for modern web applications!** 