import { Text } from './text'
import './text.css'

/**
 * Simple demo showcasing the Text component following Radix UI patterns
 */
export function TextDemo() {
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto', 
      fontFamily: 'system-ui'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Text size="8" weight="bold">
          📝 Text Component
        </Text>
        <Text size="4" style={{ marginTop: '0.5rem', opacity: 0.7 }}>
          A foundational text primitive based on Radix UI
        </Text>
      </div>

      {/* Size Scale Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          Size Scale (1-9)
        </Text>
        
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Text size="2" weight="medium" style={{ minWidth: '80px', opacity: 0.6 }}>
              Size 1:
            </Text>
            <Text size="1">The quick brown fox jumps over the lazy dog</Text>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Text size="2" weight="medium" style={{ minWidth: '80px', opacity: 0.6 }}>
              Size 2:
            </Text>
            <Text size="2">The quick brown fox jumps over the lazy dog</Text>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Text size="2" weight="medium" style={{ minWidth: '80px', opacity: 0.6 }}>
              Size 3:
            </Text>
            <Text size="3">The quick brown fox jumps over the lazy dog</Text>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Text size="2" weight="medium" style={{ minWidth: '80px', opacity: 0.6 }}>
              Size 4:
            </Text>
            <Text size="4">The quick brown fox jumps over the lazy dog</Text>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Text size="2" weight="medium" style={{ minWidth: '80px', opacity: 0.6 }}>
              Size 5:
            </Text>
            <Text size="5">The quick brown fox jumps over the lazy dog</Text>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Text size="2" weight="medium" style={{ minWidth: '80px', opacity: 0.6 }}>
              Size 6:
            </Text>
            <Text size="6">The quick brown fox jumps over the lazy dog</Text>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Text size="2" weight="medium" style={{ minWidth: '80px', opacity: 0.6 }}>
              Size 7:
            </Text>
            <Text size="7">The quick brown fox jumps</Text>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Text size="2" weight="medium" style={{ minWidth: '80px', opacity: 0.6 }}>
              Size 8:
            </Text>
            <Text size="8">The quick brown fox</Text>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Text size="2" weight="medium" style={{ minWidth: '80px', opacity: 0.6 }}>
              Size 9:
            </Text>
            <Text size="9">The quick brown</Text>
          </div>
        </div>
      </section>

      {/* Weight Variants */}
      <section style={{ marginBottom: '3rem' }}>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          Font Weights
        </Text>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          <Text size="4" weight="light">Light weight text</Text>
          <Text size="4" weight="regular">Regular weight text (default)</Text>
          <Text size="4" weight="medium">Medium weight text</Text>
          <Text size="4" weight="bold">Bold weight text</Text>
        </div>
      </section>

      {/* Text Alignment */}
      <section style={{ marginBottom: '3rem' }}>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          Text Alignment
        </Text>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem'
        }}>
          <Text size="4" align="left">Left aligned text (default)</Text>
          <Text size="4" align="center">Center aligned text</Text>
          <Text size="4" align="right">Right aligned text</Text>
        </div>
      </section>

      {/* Different Elements */}
      <section style={{ marginBottom: '3rem' }}>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          Different HTML Elements
        </Text>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Span (default):
            </Text>
            <Text size="3">This is a span element</Text>
          </div>
          
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Paragraph:
            </Text>
            <Text as="p" size="3">This is a paragraph element</Text>
          </div>
          
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Label:
            </Text>
            <Text as="label" size="3">This is a label element</Text>
          </div>
          
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Semantic elements:
            </Text>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Text as="b" size="3">Bold</Text>
              <Text as="i" size="3">Italic</Text>
              <Text as="u" size="3">Underlined</Text>
              <Text as="small" size="2">Small</Text>
            </div>
          </div>
        </div>
      </section>

      {/* Truncate Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          Text Truncation
        </Text>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem'
        }}>
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Normal text (no truncation):
            </Text>
            <Text size="3">
              This is a very long text that will wrap to multiple lines if needed and demonstrate the normal text behavior
            </Text>
          </div>
          
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Truncated text:
            </Text>
            <Text size="3" truncate>
              This is a very long text that will be truncated with ellipsis and demonstrate the truncate behavior
            </Text>
          </div>
        </div>
      </section>

      {/* AsChild Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          AsChild Examples
        </Text>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Custom button with text styling:
            </Text>
            <Text asChild size="4" weight="medium">
              <button style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer'
              }}>
                Custom Button
              </button>
            </Text>
          </div>
          
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Custom div with text styling:
            </Text>
            <Text asChild size="5" weight="bold" align="center">
              <div style={{
                padding: '1rem',
                backgroundColor: '#f3f4f6',
                border: '2px dashed #9ca3af',
                borderRadius: '0.5rem'
              }}>
                Custom Styled Container
              </div>
            </Text>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          Real-world Usage
        </Text>
        
        <div style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          padding: '2rem'
        }}>
          <Text size="5" weight="bold" style={{ marginBottom: '0.5rem' }}>
            Article Title
          </Text>
          <Text size="2" style={{ opacity: 0.6, marginBottom: '1rem' }}>
            Published on March 15, 2024 by John Doe
          </Text>
          <Text as="p" size="3" style={{ marginBottom: '1rem' }}>
            This is a sample article that demonstrates how the Text component can be used 
            in real-world scenarios. Notice how different sizes and weights create a clear 
            visual hierarchy.
          </Text>
          <Text size="3" weight="medium" style={{ color: '#3b82f6' }}>
            Read more →
          </Text>
        </div>
      </section>
    </div>
  )
} 