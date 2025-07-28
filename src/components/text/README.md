# 📝 Text Component

A foundational text primitive based on **Radix UI** patterns, providing a consistent and flexible text styling system with advanced text rendering features.

## 🎯 **Key Features**

✅ **Size Scale 1-9** - Following Radix UI scaling  
✅ **AsChild Support** - Render custom elements  
✅ **Limited Elements** - span, div, label, p, b (default: p)  
✅ **Font Weights** - light, regular, medium, bold  
✅ **Text Alignment** - left, center, right  
✅ **🆕 Text Trimming** - normal, start, end, both  
✅ **Text Truncation** - ellipsis overflow handling  
✅ **🆕 Text Wrapping** - wrap, nowrap, pretty, balance  
✅ **Style-agnostic** - Zero inline styles  
✅ **TypeScript** - Full type safety  

## 🚀 **Basic Usage**

```tsx
import { Text } from './components/text'
import './components/text/text.css' // Required

// Basic text (renders as p by default)
<Text>Hello world</Text>

// Different sizes (1-9 scale)
<Text size="1">Very small text</Text>
<Text size="3">Default size text</Text>
<Text size="6">Large text</Text>
<Text size="9">Extra large text</Text>

// Different elements
<Text as="span">Span text</Text>
<Text as="div">Div element</Text>
<Text as="label">Label text</Text>
<Text as="b">Bold inline text</Text>

// With styling and new features
<Text size="4" weight="bold" align="center" trim="both" wrap="balance">
  Advanced text with trimming and balanced wrapping
</Text>
```

## 🆕 **New Text Features**

### Text Trimming (`trim` prop)
Removes whitespace around text content:

```tsx
<Text trim="normal">Normal spacing (default)</Text>
<Text trim="start">Trimmed top spacing</Text>
<Text trim="end">Trimmed bottom spacing</Text>
<Text trim="both">Trimmed top and bottom spacing</Text>
```

### Text Wrapping (`wrap` prop)
Controls how text wraps within containers:

```tsx
<Text wrap="wrap">Normal wrapping (default)</Text>
<Text wrap="nowrap">No wrapping, text overflows</Text>
<Text wrap="pretty">Optimized line breaks for readability</Text>
<Text wrap="balance">Balanced line lengths for harmony</Text>
```

## 🎭 **AsChild Pattern**

Use `asChild` to render custom elements while maintaining Text styling:

```tsx
// Custom button with text styling
<Text asChild size="4" weight="medium" wrap="balance">
  <button className="custom-button">Custom Button</button>
</Text>

// Custom div with advanced text features
<Text asChild size="5" weight="bold" align="center" trim="both">
  <div className="custom-container">Custom Container</div>
</Text>
```

## 🔧 **Props API**

```tsx
interface TextProps {
  children: ReactNode
  
  // AsChild pattern
  asChild?: boolean
  
  // HTML element (default: "p")
  as?: 'span' | 'div' | 'label' | 'p' | 'b'
  
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
  
  // Standard HTML attributes
  className?: string
  style?: CSSProperties
  // ... all other HTML attributes
}
```

## 📏 **Size Scale Reference**

Following **Radix UI** size scale:

| Size | Font Size | Line Height | Use Case |
|------|-----------|-------------|----------|
| `1`  | 12px      | 20px        | Captions, fine print |
| `2`  | 14px      | 20px        | Small text, metadata |
| `3`  | 16px      | 24px        | **Default**, body text |
| `4`  | 18px      | 26px        | Emphasized text |
| `5`  | 20px      | 28px        | Subheadings |
| `6`  | 24px      | 32px        | Small headings |
| `7`  | 30px      | 36px        | Medium headings |
| `8`  | 36px      | 40px        | Large headings |
| `9`  | 48px      | 48px        | Display text |

## 🎨 **CSS Classes**

The component uses these CSS classes that you can customize:

```css
/* Base */
.text-base                    /* Applied to all Text components */

/* Size Scale */
.text-size-1 to .text-size-9  /* Size variants */

/* Font Weights */
.text-weight-light            /* 300 */
.text-weight-regular          /* 400 */
.text-weight-medium           /* 500 */
.text-weight-bold             /* 700 */

/* Alignment */
.text-align-left
.text-align-center  
.text-align-right

/* 🆕 Text Trimming */
.text-trim-normal             /* Default spacing */
.text-trim-start              /* Trim top spacing */
.text-trim-end                /* Trim bottom spacing */
.text-trim-both               /* Trim both */

/* Utilities */
.text-truncate                /* Ellipsis overflow */

/* 🆕 Text Wrapping */
.text-wrap-wrap               /* Normal wrapping */
.text-wrap-nowrap             /* No wrapping */
.text-wrap-pretty             /* Pretty wrapping */
.text-wrap-balance            /* Balanced wrapping */
```

## 📱 **Responsive Design**

Sizes automatically adjust on mobile devices:

- Size 7-9 become smaller on screens < 768px
- Maintains readability and hierarchy
- Smooth transitions between breakpoints

## 💡 **Usage Examples**

### Article Content with Advanced Features
```tsx
<article>
  <Text size="6" weight="bold" as="h1" trim="both" wrap="balance">
    Article Title with Balanced Wrapping
  </Text>
  <Text size="2" weight="regular" trim="start" style={{ opacity: 0.7 }}>
    Published on March 15, 2024 • 5 min read
  </Text>
  <Text size="3" wrap="pretty">
    Article content with optimized line breaks for better readability...
  </Text>
</article>
```

### Inline Bold Text
```tsx
<Text size="3">
  This is regular text with <Text as="b" size="3">bold text inline</Text> for emphasis.
</Text>
```

### Form Labels with Trimming
```tsx
<div>
  <Text as="label" size="3" weight="medium" trim="end">
    Email Address
  </Text>
  <input type="email" />
  <Text size="2" style={{ opacity: 0.6 }} wrap="balance">
    We'll never share your email with anyone else
  </Text>
</div>
```

### Custom Components with Advanced Wrapping
```tsx
<Text asChild size="4" weight="bold" align="center" wrap="balance">
  <button className="cta-button">
    Get Started with Our Amazing Platform
  </button>
</Text>
```

## 🎯 **Best Practices**

1. **Use paragraph as default** - `as="p"` is now the default element
2. **Use size 3 as default** for body text
3. **Create visual hierarchy** with different sizes
4. **Leverage trim prop** for tight spacing control
5. **Use wrap="balance"** for headings and short text blocks
6. **Use wrap="pretty"** for body text and longer content
7. **Use `as="b"` for inline emphasis** within other text
8. **Be consistent** with size usage across your app
9. **Use semantic elements** (`as` prop) for proper HTML
10. **Combine with color** via CSS for themed variants
11. **Use `asChild`** when integrating with design systems

## 🆕 **What's New**

- **Default element changed** from `span` to `p`
- **Added `"b"` element** for inline bold text
- **Limited `as` options** to `span | div | label | p | b` only
- **New `trim` prop** for whitespace control
- **New `wrap` prop** for advanced text wrapping
- **Modern CSS features** with fallbacks for older browsers
- **Enhanced demos** showcasing all new features

---

**📝 Modern, consistent, and powerful text rendering with advanced typography features!** 