import { Text } from './text'
import './text.css'

/**
 * Comprehensive demo showcasing the Text component following Radix UI patterns
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
          📝 Text Component (Radix UI)
        </Text>
        <Text size="4" style={{ marginTop: '0.5rem', opacity: 0.7 }}>
          Foundational text primitive with trim & wrap support
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
            <Text size="3">The quick brown fox jumps over the lazy dog (default)</Text>
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

      {/* Elements Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          HTML Elements (default: p)
        </Text>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Paragraph (default):
            </Text>
            <Text size="3">This is a paragraph element (default)</Text>
          </div>
          
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Span:
            </Text>
            <Text as="span" size="3">This is a span element</Text>
          </div>
          
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Div:
            </Text>
            <Text as="div" size="3">This is a div element</Text>
          </div>
          
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Label:
            </Text>
            <Text as="label" size="3">This is a label element</Text>
          </div>
          
          <div>
            <Text size="2" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Bold (b):
            </Text>
            <div>
              Regular text with <Text as="b" size="3">bold text inline</Text> in the middle
            </div>
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

      {/* Text Trimming Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          🆕 Text Trimming (trim prop)
        </Text>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{ backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '0.25rem' }}>
            <Text size="2" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="normal" (default):
            </Text>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Text size="3" trim="normal">
                
                This text has normal spacing above and below with default line-height and margins.
                
              </Text>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '0.25rem' }}>
            <Text size="2" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="start":
            </Text>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Text size="3" trim="start">
                
                This text has trimmed whitespace at the start (top).
                
              </Text>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#fce7f3', padding: '1rem', borderRadius: '0.25rem' }}>
            <Text size="2" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="end":
            </Text>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Text size="3" trim="end">
                
                This text has trimmed whitespace at the end (bottom).
                
              </Text>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#e0e7ff', padding: '1rem', borderRadius: '0.25rem' }}>
            <Text size="2" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="both":
            </Text>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Text size="3" trim="both">
                
                This text has trimmed whitespace at both start and end.
                
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Text Wrapping Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          🆕 Text Wrapping (wrap prop)
        </Text>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{ backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '0.25rem' }}>
            <Text size="2" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="wrap" (default):
            </Text>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px' }}>
              <Text size="3" wrap="wrap">
                This is a long text that will wrap normally when it reaches the container boundary and continues on the next line.
              </Text>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '0.25rem' }}>
            <Text size="2" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="nowrap":
            </Text>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px', overflow: 'hidden' }}>
              <Text size="3" wrap="nowrap">
                This text will not wrap and will overflow the container if it's too long.
              </Text>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#fce7f3', padding: '1rem', borderRadius: '0.25rem' }}>
            <Text size="2" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="pretty":
            </Text>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px' }}>
              <Text size="3" wrap="pretty">
                This text uses pretty wrapping for better line breaks and improved readability with optimized word placement.
              </Text>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#e0e7ff', padding: '1rem', borderRadius: '0.25rem' }}>
            <Text size="2" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="balance":
            </Text>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px' }}>
              <Text size="3" wrap="balance">
                This text uses balanced wrapping to create more even line lengths and better visual harmony.
              </Text>
            </div>
          </div>
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
              Custom div with text styling and wrap balance:
            </Text>
            <Text asChild size="5" weight="bold" align="center" wrap="balance">
              <div style={{
                padding: '1rem',
                backgroundColor: '#f3f4f6',
                border: '2px dashed #9ca3af',
                borderRadius: '0.5rem',
                width: '300px'
              }}>
                Custom Styled Container with Balanced Text Wrapping
              </div>
            </Text>
          </div>
        </div>
      </section>

      {/* Advanced Combinations */}
      <section style={{ marginBottom: '3rem' }}>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          🔥 Advanced Combinations
        </Text>
        
        <div style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          padding: '2rem'
        }}>
          <Text size="5" weight="bold" trim="both" wrap="balance" style={{ marginBottom: '0.5rem' }}>
            Advanced Article Title with Balanced Wrapping and Trimmed Spacing
          </Text>
          <Text size="2" style={{ opacity: 0.6, marginBottom: '1rem' }} trim="start">
            Published on March 15, 2024 • Reading time: 5 minutes
          </Text>
          <Text size="3" wrap="pretty" style={{ marginBottom: '1rem' }}>
            This article demonstrates how the Text component can be used in real-world scenarios 
            with advanced text rendering features like balanced wrapping, trimmed spacing, and 
            optimized line breaks for better readability.
          </Text>
          <Text size="3" weight="medium" wrap="balance" style={{ color: '#3b82f6' }}>
            Continue reading this fascinating article about modern text rendering →
          </Text>
        </div>
      </section>

      {/* Props Summary */}
      <section>
        <Text size="6" weight="medium" style={{ marginBottom: '1.5rem' }}>
          📋 Props Summary
        </Text>
        
        <div style={{
          backgroundColor: '#f0f9ff',
          border: '1px solid #0ea5e9',
          borderRadius: '0.5rem',
          padding: '1.5rem'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'auto 1fr auto', 
            gap: '0.75rem',
            fontSize: '0.875rem',
            alignItems: 'center'
          }}>
            <Text size="2" weight="bold">as:</Text>
            <Text size="2">"span" | "div" | "label" | "p" | "b"</Text>
            <Text size="1" style={{ opacity: 0.6 }}>default: "p"</Text>
            
            <Text size="2" weight="bold">size:</Text>
            <Text size="2">"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"</Text>
            <Text size="1" style={{ opacity: 0.6 }}>default: "3"</Text>
            
            <Text size="2" weight="bold">weight:</Text>
            <Text size="2">"light" | "regular" | "medium" | "bold"</Text>
            <Text size="1" style={{ opacity: 0.6 }}>default: "regular"</Text>
            
            <Text size="2" weight="bold">align:</Text>
            <Text size="2">"left" | "center" | "right"</Text>
            <Text size="1" style={{ opacity: 0.6 }}>default: undefined</Text>
            
            <Text size="2" weight="bold" style={{ color: '#059669' }}>trim:</Text>
            <Text size="2" style={{ color: '#059669' }}>"normal" | "start" | "end" | "both"</Text>
            <Text size="1" style={{ opacity: 0.6, color: '#059669' }}>default: "normal"</Text>
            
            <Text size="2" weight="bold" style={{ color: '#7c2d12' }}>wrap:</Text>
            <Text size="2" style={{ color: '#7c2d12' }}>"wrap" | "nowrap" | "pretty" | "balance"</Text>
            <Text size="1" style={{ opacity: 0.6, color: '#7c2d12' }}>default: "wrap"</Text>
            
            <Text size="2" weight="bold">truncate:</Text>
            <Text size="2">boolean</Text>
            <Text size="1" style={{ opacity: 0.6 }}>default: false</Text>
            
            <Text size="2" weight="bold">asChild:</Text>
            <Text size="2">boolean</Text>
            <Text size="1" style={{ opacity: 0.6 }}>default: false</Text>
          </div>
        </div>
      </section>
    </div>
  )
} 