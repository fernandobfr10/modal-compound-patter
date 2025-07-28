import { Heading } from './heading'
import './heading.css'

/**
 * Comprehensive demo showcasing the Heading component following Radix UI patterns
 */
export function HeadingDemo() {
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto', 
      fontFamily: 'system-ui'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Heading size="9" weight="bold">
          🎯 Heading Component
        </Heading>
        <Heading size="5" weight="regular" style={{ marginTop: '0.5rem', opacity: 0.7 }}>
          Foundational heading primitive based on Radix UI
        </Heading>
      </div>

      {/* Size Scale Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Heading size="7" weight="medium" style={{ marginBottom: '1.5rem' }}>
          Size Scale (1-9)
        </Heading>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 1:
            </Heading>
            <Heading size="1">Small heading for fine details</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 2:
            </Heading>
            <Heading size="2">Smaller heading for subdetails</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 3:
            </Heading>
            <Heading size="3">Small section heading</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 4:
            </Heading>
            <Heading size="4">Medium section heading</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 5:
            </Heading>
            <Heading size="5">Subsection heading</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 6 (default):
            </Heading>
            <Heading size="6">Main section heading (default)</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 7:
            </Heading>
            <Heading size="7">Page section title</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 8:
            </Heading>
            <Heading size="8">Page title</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 9:
            </Heading>
            <Heading size="9">Hero title</Heading>
          </div>
        </div>
      </section>

      {/* Heading Elements Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Heading size="7" weight="medium" style={{ marginBottom: '1.5rem' }}>
          Heading Elements (default: h1)
        </Heading>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              H1 (default):
            </Heading>
            <Heading as="h1" size="6">This is an H1 heading (default)</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              H2:
            </Heading>
            <Heading as="h2" size="6">This is an H2 heading</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              H3:
            </Heading>
            <Heading as="h3" size="6">This is an H3 heading</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              H4:
            </Heading>
            <Heading as="h4" size="6">This is an H4 heading</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              H5:
            </Heading>
            <Heading as="h5" size="6">This is an H5 heading</Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              H6:
            </Heading>
            <Heading as="h6" size="6">This is an H6 heading</Heading>
          </div>
        </div>
      </section>

      {/* Weight Variants */}
      <section style={{ marginBottom: '3rem' }}>
        <Heading size="7" weight="medium" style={{ marginBottom: '1.5rem' }}>
          Font Weights
        </Heading>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          <Heading size="6" weight="light">Light weight heading</Heading>
          <Heading size="6" weight="regular">Regular weight heading (default)</Heading>
          <Heading size="6" weight="medium">Medium weight heading</Heading>
          <Heading size="6" weight="bold">Bold weight heading</Heading>
        </div>
      </section>

      {/* Text Trimming Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Heading size="7" weight="medium" style={{ marginBottom: '1.5rem' }}>
          🆕 Text Trimming (trim prop)
        </Heading>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{ backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '0.25rem' }}>
            <Heading size="3" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="normal" (default):
            </Heading>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Heading size="5" trim="normal">
                
                Heading with normal spacing above and below
                
              </Heading>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '0.25rem' }}>
            <Heading size="3" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="start":
            </Heading>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Heading size="5" trim="start">
                
                Heading with trimmed top spacing
                
              </Heading>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#fce7f3', padding: '1rem', borderRadius: '0.25rem' }}>
            <Heading size="3" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="end":
            </Heading>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Heading size="5" trim="end">
                
                Heading with trimmed bottom spacing
                
              </Heading>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#e0e7ff', padding: '1rem', borderRadius: '0.25rem' }}>
            <Heading size="3" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="both":
            </Heading>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Heading size="5" trim="both">
                
                Heading with trimmed spacing on both ends
                
              </Heading>
            </div>
          </div>
        </div>
      </section>

      {/* Text Wrapping Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Heading size="7" weight="medium" style={{ marginBottom: '1.5rem' }}>
          🆕 Text Wrapping (wrap prop)
        </Heading>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{ backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '0.25rem' }}>
            <Heading size="3" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="wrap" (default):
            </Heading>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px' }}>
              <Heading size="5" wrap="wrap">
                Long heading that wraps normally when reaching container boundaries
              </Heading>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '0.25rem' }}>
            <Heading size="3" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="nowrap":
            </Heading>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px', overflow: 'hidden' }}>
              <Heading size="5" wrap="nowrap">
                Long heading that will not wrap and overflow instead
              </Heading>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#fce7f3', padding: '1rem', borderRadius: '0.25rem' }}>
            <Heading size="3" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="pretty":
            </Heading>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px' }}>
              <Heading size="5" wrap="pretty">
                Heading with optimized line breaks for improved readability
              </Heading>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#e0e7ff', padding: '1rem', borderRadius: '0.25rem' }}>
            <Heading size="3" weight="medium" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="balance":
            </Heading>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px' }}>
              <Heading size="5" wrap="balance">
                Perfectly balanced heading with even line distribution
              </Heading>
            </div>
          </div>
        </div>
      </section>

      {/* Text Alignment */}
      <section style={{ marginBottom: '3rem' }}>
        <Heading size="7" weight="medium" style={{ marginBottom: '1.5rem' }}>
          Text Alignment
        </Heading>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem'
        }}>
          <Heading size="5" align="left">Left aligned heading (default)</Heading>
          <Heading size="5" align="center">Center aligned heading</Heading>
          <Heading size="5" align="right">Right aligned heading</Heading>
        </div>
      </section>

      {/* Truncate Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Heading size="7" weight="medium" style={{ marginBottom: '1.5rem' }}>
          Text Truncation
        </Heading>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem'
        }}>
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Normal heading (no truncation):
            </Heading>
            <Heading size="5">
              This is a very long heading that will wrap to multiple lines if needed
            </Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Truncated heading:
            </Heading>
            <Heading size="5" truncate>
              This is a very long heading that will be truncated with ellipsis
            </Heading>
          </div>
        </div>
      </section>

      {/* AsChild Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Heading size="7" weight="medium" style={{ marginBottom: '1.5rem' }}>
          AsChild Examples
        </Heading>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Custom button with heading styling:
            </Heading>
            <Heading asChild size="6" weight="bold">
              <button style={{
                padding: '1rem 2rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer'
              }}>
                Call to Action
              </button>
            </Heading>
          </div>
          
          <div>
            <Heading size="3" weight="medium" style={{ opacity: 0.6, marginBottom: '0.5rem' }}>
              Custom div with heading styling and balance:
            </Heading>
            <Heading asChild size="7" weight="bold" align="center" wrap="balance">
              <div style={{
                padding: '1.5rem',
                backgroundColor: '#f3f4f6',
                border: '2px dashed #9ca3af',
                borderRadius: '0.75rem',
                width: '350px'
              }}>
                Custom Container with Balanced Heading Typography
              </div>
            </Heading>
          </div>
        </div>
      </section>

      {/* Semantic Hierarchy Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <Heading size="7" weight="medium" style={{ marginBottom: '1.5rem' }}>
          🏗️ Semantic Hierarchy Example
        </Heading>
        
        <div style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          padding: '2rem'
        }}>
          <Heading as="h1" size="8" weight="bold" trim="both" wrap="balance" style={{ marginBottom: '1rem' }}>
            Article: Advanced Typography in Modern Web Design
          </Heading>
          
          <Heading as="h2" size="6" weight="medium" trim="start" style={{ marginBottom: '0.75rem' }}>
            Introduction to Typography Systems
          </Heading>
          
          <Heading as="h3" size="5" weight="medium" style={{ marginBottom: '0.5rem' }}>
            Understanding Text Hierarchy
          </Heading>
          
          <Heading as="h4" size="4" weight="medium" style={{ marginBottom: '0.5rem' }}>
            Size Scale Considerations
          </Heading>
          
          <Heading as="h5" size="3" weight="medium" style={{ marginBottom: '0.25rem' }}>
            Implementation Details
          </Heading>
          
          <Heading as="h6" size="2" weight="medium">
            Technical Notes
          </Heading>
        </div>
      </section>

      {/* Props Summary */}
      <section>
        <Heading size="7" weight="medium" style={{ marginBottom: '1.5rem' }}>
          📋 Props Summary
        </Heading>
        
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
            <Heading size="2" weight="bold">as:</Heading>
            <Heading size="2">"h1" | "h2" | "h3" | "h4" | "h5" | "h6"</Heading>
            <Heading size="1" style={{ opacity: 0.6 }}>default: "h1"</Heading>
            
            <Heading size="2" weight="bold">size:</Heading>
            <Heading size="2">"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"</Heading>
            <Heading size="1" style={{ opacity: 0.6 }}>default: "6"</Heading>
            
            <Heading size="2" weight="bold">weight:</Heading>
            <Heading size="2">"light" | "regular" | "medium" | "bold"</Heading>
            <Heading size="1" style={{ opacity: 0.6 }}>default: "regular"</Heading>
            
            <Heading size="2" weight="bold">align:</Heading>
            <Heading size="2">"left" | "center" | "right"</Heading>
            <Heading size="1" style={{ opacity: 0.6 }}>default: undefined</Heading>
            
            <Heading size="2" weight="bold" style={{ color: '#059669' }}>trim:</Heading>
            <Heading size="2" style={{ color: '#059669' }}>"normal" | "start" | "end" | "both"</Heading>
            <Heading size="1" style={{ opacity: 0.6, color: '#059669' }}>default: "normal"</Heading>
            
            <Heading size="2" weight="bold" style={{ color: '#7c2d12' }}>wrap:</Heading>
            <Heading size="2" style={{ color: '#7c2d12' }}>"wrap" | "nowrap" | "pretty" | "balance"</Heading>
            <Heading size="1" style={{ opacity: 0.6, color: '#7c2d12' }}>default: "wrap"</Heading>
            
            <Heading size="2" weight="bold">truncate:</Heading>
            <Heading size="2">boolean</Heading>
            <Heading size="1" style={{ opacity: 0.6 }}>default: false</Heading>
            
            <Heading size="2" weight="bold">asChild:</Heading>
            <Heading size="2">boolean</Heading>
            <Heading size="1" style={{ opacity: 0.6 }}>default: false</Heading>
          </div>
        </div>
      </section>
    </div>
  )
} 