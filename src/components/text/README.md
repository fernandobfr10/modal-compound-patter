# 📝 Text Component

A foundational text primitive based on **Radix UI** patterns, providing a consistent and flexible text styling system.

## 🎯 **Key Features**

✅ **Size Scale 1-9** - Following Radix UI scaling  
✅ **AsChild Support** - Render custom elements  
✅ **Multiple Elements** - span, p, label, div, and more  
✅ **Font Weights** - light, regular, medium, bold  
✅ **Text Alignment** - left, center, right  
✅ **Text Truncation** - ellipsis overflow handling  
✅ **Style-agnostic** - Zero inline styles  
✅ **TypeScript** - Full type safety  

## 🚀 **Basic Usage**

```tsx
import { Text } from './components/text'
import './components/text/text.css' // Required

// Basic text (renders as span by default)
<Text>Hello world</Text>

// Different sizes (1-9 scale)
<Text size="1">Very small text</Text>
<Text size="3">Default size text</Text>
<Text size="6">Large text</Text>
<Text size="9">Extra large text</Text>

// Different elements
<Text as="p">Paragraph text</Text>
<Text as="label">Label text</Text>
<Text as="div">Div element</Text>

// With styling
<Text size="4" weight="bold" align="center">
  Centered bold text
</Text>
```

## 🎭 **AsChild Pattern**

Use `asChild` to render custom elements while maintaining Text styling:

```tsx
// Custom button with text styling
<Text asChild size="4" weight="medium">
  <button className="custom-button">Custom Button</button>
</Text>

// Custom div with text styling  
<Text asChild size="5" weight="bold" align="center">
  <div className="custom-container">Custom Container</div>
</Text>
```

## 🔧 **Props API**

```tsx
interface TextProps {
  children: ReactNode
  
  // AsChild pattern
  asChild?: boolean
  
  // HTML element (default: "span")
  as?: 'span' | 'div' | 'label' | 'p' | 'b' | 'i' | 'u' | 's' | 'mark' | 'small' | 'del' | 'ins' | 'sub' | 'sup'
  
  // Size scale 1-9 (default: "3")
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  
  // Font weight (default: "regular")  
  weight?: 'light' | 'regular' | 'medium' | 'bold'
  
  // Text alignment
  align?: 'left' | 'center' | 'right'
  
  // Truncate with ellipsis (default: false)
  truncate?: boolean
  
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

/* Utilities */
.text-truncate                /* Ellipsis overflow */
```

## 📱 **Responsive Design**

Sizes automatically adjust on mobile devices:

- Size 7-9 become smaller on screens < 768px
- Maintains readability and hierarchy
- Smooth transitions between breakpoints

## 💡 **Usage Examples**

### Article Content
```tsx
<article>
  <Text size="6" weight="bold" as="h1">
    Article Title
  </Text>
  <Text size="2" weight="regular" style={{ opacity: 0.7 }}>
    Published on March 15, 2024
  </Text>
  <Text size="3" as="p">
    Article content goes here...
  </Text>
</article>
```

### Form Labels
```tsx
<div>
  <Text as="label" size="3" weight="medium">
    Email Address
  </Text>
  <input type="email" />
  <Text size="2" style={{ opacity: 0.6 }}>
    We'll never share your email
  </Text>
</div>
```

### Custom Components
```tsx
<Text asChild size="4" weight="bold" align="center">
  <button className="cta-button">
    Get Started
  </button>
</Text>
```

## 🎯 **Best Practices**

1. **Use size 3 as default** for body text
2. **Create visual hierarchy** with different sizes
3. **Be consistent** with size usage across your app
4. **Use semantic elements** (`as` prop) for proper HTML
5. **Combine with color** via CSS for themed variants
6. **Use `asChild`** when integrating with design systems

---

**📝 Simple, consistent, and powerful text rendering for React applications!** 