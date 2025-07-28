# 🔗 Link Component

A foundational link primitive based on **Radix UI** patterns, providing semantic links with consistent typography and advanced underline behavior. **Always renders as `<a>` element.**

## 🎯 **Key Features**

✅ **Size Scale 1-9** - Following Radix UI scaling optimized for links  
✅ **AsChild Support** - Render custom elements  
✅ **Always `<a>` element** - Semantic anchor links following Radix UI  
✅ **Font Weights** - light, regular, medium, bold  
✅ **Text Alignment** - left, center, right  
✅ **🆕 Text Trimming** - normal, start, end, both  
✅ **Text Truncation** - ellipsis overflow handling  
✅ **🆕 Text Wrapping** - wrap, nowrap, pretty, balance  
✅ **🔗 Underline Behavior** - auto, always, hover, none  
✅ **Style-agnostic** - Zero inline styles  
✅ **TypeScript** - Full type safety  
✅ **Accessibility** - Proper focus states and contrast  

## 🚀 **Basic Usage**

```tsx
import { Link } from './components/link'
import './components/link/link.css' // Required

// Basic link (always renders as <a>, size 3)
<Link href="/about">About Page</Link>

// External link
<Link href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Link
</Link>

// With advanced features
<Link size="5" weight="bold" underline="hover" trim="both" wrap="balance">
  Perfectly Styled Link with Advanced Typography
</Link>
```

## 🆕 **Link-Specific Features**

### Underline Behavior (`underline` prop)
Control how and when links are underlined:

```tsx
<Link underline="auto">Smart underline (default - hover/focus)</Link>
<Link underline="always">Always underlined</Link>
<Link underline="hover">Only on hover/focus</Link>
<Link underline="none">Never underlined</Link>
```

### Text Trimming (`trim` prop)
Removes whitespace around link content:

```tsx
<Link trim="normal">Normal spacing (default)</Link>
<Link trim="start">Trimmed top spacing</Link>
<Link trim="end">Trimmed bottom spacing</Link>
<Link trim="both">Trimmed top and bottom spacing</Link>
```

### Text Wrapping (`wrap` prop)
Controls how links wrap within containers:

```tsx
<Link wrap="wrap">Normal wrapping (default)</Link>
<Link wrap="nowrap">No wrapping, link overflows</Link>
<Link wrap="pretty">Optimized line breaks for readability</Link>
<Link wrap="balance">Balanced line lengths for visual harmony</Link>
```

## 🎭 **AsChild Pattern**

Use `asChild` to render custom elements while maintaining link styling:

```tsx
// Custom button with link styling
<Link asChild size="4" weight="medium" underline="hover">
  <button className="custom-button">Custom Link Button</button>
</Link>

// Custom div with link features
<Link asChild size="5" weight="bold" align="center" underline="always">
  <div className="card-link">Interactive Card</div>
</Link>
```

## 🔧 **Props API**

```tsx
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  
  // AsChild pattern
  asChild?: boolean
  
  // Size scale 1-9 (default: "3")
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
  
  // 🔗 Underline behavior (default: "auto")
  underline?: 'auto' | 'always' | 'hover' | 'none'
  
  // Standard anchor attributes
  href?: string
  target?: string
  rel?: string
  download?: string
  className?: string
  style?: CSSProperties
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  // ... all other anchor attributes
}
```

## 📏 **Size Scale Reference**

Following **Radix UI** text scale (optimized for inline links):

| Size | Font Size | Line Height | Use Case |
|------|-----------|-------------|----------|
| `1`  | 12px      | 16px        | Fine print links, footnotes |
| `2`  | 14px      | 20px        | Small inline links |
| `3`  | 16px      | 24px        | **Default**, standard inline links |
| `4`  | 18px      | 28px        | Emphasized links |
| `5`  | 20px      | 30px        | Large content links |
| `6`  | 24px      | 32px        | Prominent links |
| `7`  | 30px      | 36px        | Heading-style links |
| `8`  | 36px      | 40px        | Display links |
| `9`  | 48px      | 48px        | Hero links, large CTAs |

## 🎨 **CSS Classes**

The component uses these CSS classes that you can customize:

```css
/* Base */
.link-base                        /* Applied to all Link components */

/* Size Scale */
.link-size-1 to .link-size-9      /* Size variants */

/* Font Weights */
.link-weight-light                /* 300 */
.link-weight-regular              /* 400 */
.link-weight-medium               /* 500 */
.link-weight-bold                 /* 700 */

/* Alignment */
.link-align-left
.link-align-center  
.link-align-right

/* 🆕 Text Trimming */
.link-trim-normal                 /* Default spacing */
.link-trim-start                  /* Trim top spacing */
.link-trim-end                    /* Trim bottom spacing */
.link-trim-both                   /* Trim both */

/* Utilities */
.link-truncate                    /* Ellipsis overflow */

/* 🆕 Text Wrapping */
.link-wrap-wrap                   /* Normal wrapping */
.link-wrap-nowrap                 /* No wrapping */
.link-wrap-pretty                 /* Pretty wrapping */
.link-wrap-balance                /* Balanced wrapping */

/* 🔗 Underline Behavior */
.link-underline-auto              /* Smart underline (default) */
.link-underline-always            /* Always underlined */
.link-underline-hover             /* Hover-only underline */
.link-underline-none              /* No underline */
```

## 📱 **Responsive Design**

Link sizes automatically scale down on mobile devices:

- Size 7-9 become smaller on screens < 768px
- Maintains touch-friendly targets
- Optimized for mobile interaction

## 🌍 **Real-world Usage Examples**

### Navigation Links
```tsx
<nav>
  <Link size="3" weight="medium" underline="hover" href="/home">Home</Link>
  <Link size="3" weight="medium" underline="hover" href="/about">About</Link>
  <Link size="3" weight="medium" underline="hover" href="/contact">Contact</Link>
</nav>
```

### Inline Content Links
```tsx
<p>
  Read our <Link underline="auto" href="/guide">complete guide</Link> or 
  <Link weight="medium" underline="always" href="/subscribe">subscribe</Link> for updates.
</p>
```

### External Links
```tsx
<Link 
  href="https://example.com" 
  target="_blank" 
  rel="noopener noreferrer"
  underline="hover"
>
  Visit External Site
</Link>
```

### Call-to-Action Links
```tsx
<section>
  <Link size="5" weight="bold" underline="none" href="/signup" 
        className="btn-primary">
    Get Started
  </Link>
  <Link size="4" weight="medium" underline="hover" href="/learn">
    Learn More →
  </Link>
</section>
```

### Download Links
```tsx
<Link 
  href="/files/document.pdf" 
  download="document.pdf"
  size="4" 
  weight="medium"
  underline="always"
>
  📄 Download PDF
</Link>
```

## 🎯 **Best Practices**

1. **Always `<a>` element** - Link component always renders semantic anchor tags
2. **Size 3 as default** - Good balance for most inline links
3. **Smart underlines** - Use `underline="auto"` for content links
4. **Clear hover states** - Use `underline="hover"` for navigation
5. **Accessibility first** - Ensure proper focus states and contrast
6. **External links** - Always use `target="_blank"` and `rel="noopener noreferrer"`
7. **Use `wrap="balance"`** for short links that might wrap
8. **Use `wrap="pretty"`** for longer links
9. **Leverage `trim` prop** for tight spacing control
10. **Use `asChild`** for complex interactive elements that need link styling

## 🔄 **Text vs Link vs Heading**

| Feature | Text | Link | Heading |
|---------|------|------|---------|
| **Element** | `p`, `span`, `div`, `label`, `b` | **Always `<a>`** | `h1`, `h2`, `h3`, `h4`, `h5`, `h6` |
| **Default Size** | `3` (16px) | `3` (16px) | `6` (30px) |
| **Purpose** | Body text, inline text | **Navigation, links** | Titles, section headers |
| **Unique Features** | Versatile elements | **underline** behavior | Semantic hierarchy |
| **Base Colors** | Inherit | **Blue (#2563eb)** | Inherit |
| **Props** | `as` prop available | **No `as` prop** | `as` prop available |

## 🆕 **What's New**

- **Always `<a>` element** - Following Radix UI pattern exactly
- **Underline control** - Fine-grained underline behavior management
- **Link-optimized colors** - Default blue (#2563eb) with visited states
- **Smart defaults** - Auto underline behavior for better UX
- **Accessibility features** - Enhanced focus states and contrast support
- **All Text features** - trim, wrap, weight, align, truncate, asChild
- **Semantic link behavior** - Proper visited states and link colors
- **External link support** - Full anchor attribute support

---

**🔗 Professional, accessible, and semantic link typography for modern web applications!** 