import { Link } from './link'
import './link.css'

/**
 * Comprehensive demo showcasing the Link component following Radix UI patterns
 */
export function LinkDemo() {
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto', 
      fontFamily: 'system-ui'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>
          🔗 Link Component
        </h1>
        <p style={{ fontSize: '1.25rem', margin: 0, opacity: 0.7 }}>
          Foundational link primitive based on Radix UI (always renders as &lt;a&gt;)
        </p>
      </div>

      {/* Size Scale Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          Size Scale (1-9)
        </h2>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 1:
            </p>
            <Link size="1" href="#size1">Small link for fine details</Link>
          </div>
          
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 2:
            </p>
            <Link size="2" href="#size2">Small link for captions</Link>
          </div>
          
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 3 (default):
            </p>
            <Link size="3" href="#size3">Standard inline link (default)</Link>
          </div>
          
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 4:
            </p>
            <Link size="4" href="#size4">Medium link for emphasis</Link>
          </div>
          
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 5:
            </p>
            <Link size="5" href="#size5">Large link for prominence</Link>
          </div>
          
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 6:
            </p>
            <Link size="6" href="#size6">Extra large link</Link>
          </div>
          
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 7:
            </p>
            <Link size="7" href="#size7">Heading-style link</Link>
          </div>
          
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 8:
            </p>
            <Link size="8" href="#size8">Display link</Link>
          </div>
          
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Size 9:
            </p>
            <Link size="9" href="#size9">Hero link</Link>
          </div>
        </div>
      </section>

      {/* Weight Variants */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          Font Weights
        </h2>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          <Link size="4" weight="light" href="#light">Light weight link</Link>
          <Link size="4" weight="regular" href="#regular">Regular weight link (default)</Link>
          <Link size="4" weight="medium" href="#medium">Medium weight link</Link>
          <Link size="4" weight="bold" href="#bold">Bold weight link</Link>
        </div>
      </section>

      {/* Underline Variants */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          🆕 Underline Behavior (underline prop)
        </h2>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{ backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              underline="auto" (default):
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Link size="4" underline="auto" href="#auto">Smart underline (hover to see)</Link>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              underline="always":
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Link size="4" underline="always" href="#always">Always underlined link</Link>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#fce7f3', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              underline="hover":
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Link size="4" underline="hover" href="#hover">Hover-only underline</Link>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#e0e7ff', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              underline="none":
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Link size="4" underline="none" href="#none">Never underlined link</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Text Trimming Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          🆕 Text Trimming (trim prop)
        </h2>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{ backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="normal" (default):
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Link size="4" trim="normal" href="#trim-normal">
                
                Link with normal spacing above and below
                
              </Link>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="start":
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Link size="4" trim="start" href="#trim-start">
                
                Link with trimmed top spacing
                
              </Link>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#fce7f3', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="end":
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Link size="4" trim="end" href="#trim-end">
                
                Link with trimmed bottom spacing
                
              </Link>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#e0e7ff', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              trim="both":
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db' }}>
              <Link size="4" trim="both" href="#trim-both">
                
                Link with trimmed spacing on both ends
                
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Text Wrapping Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          🆕 Text Wrapping (wrap prop)
        </h2>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{ backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="wrap" (default):
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px' }}>
              <Link size="4" wrap="wrap" href="#wrap">
                Long link that wraps normally when reaching container boundaries
              </Link>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="nowrap":
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px', overflow: 'hidden' }}>
              <Link size="4" wrap="nowrap" href="#nowrap">
                Long link that will not wrap and overflow instead
              </Link>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#fce7f3', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="pretty":
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px' }}>
              <Link size="4" wrap="pretty" href="#pretty">
                Link with optimized line breaks for improved readability
              </Link>
            </div>
          </div>
          
          <div style={{ backgroundColor: '#e0e7ff', padding: '1rem', borderRadius: '0.25rem' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.8, marginBottom: '0.5rem' }}>
              wrap="balance":
            </p>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', border: '1px dashed #d1d5db', width: '300px' }}>
              <Link size="4" wrap="balance" href="#balance">
                Perfectly balanced link with even line distribution
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Text Alignment */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          Text Alignment
        </h2>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem'
        }}>
          <Link size="4" align="left" href="#left">Left aligned link (default)</Link>
          <Link size="4" align="center" href="#center">Center aligned link</Link>
          <Link size="4" align="right" href="#right">Right aligned link</Link>
        </div>
      </section>

      {/* Truncate Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          Text Truncation
        </h2>
        
        <div style={{ 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          padding: '1.5rem',
          display: 'grid',
          gap: '1rem'
        }}>
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Normal link (no truncation):
            </p>
            <Link size="4" href="#normal">
              This is a very long link that will wrap to multiple lines if needed
            </Link>
          </div>
          
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Truncated link:
            </p>
            <Link size="4" truncate href="#truncated">
              This is a very long link that will be truncated with ellipsis
            </Link>
          </div>
        </div>
      </section>

      {/* AsChild Demo */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          AsChild Examples
        </h2>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Custom button with link styling:
            </p>
            <Link asChild size="4" weight="bold" underline="hover">
              <button style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer'
              }}>
                Custom Link Button
              </button>
            </Link>
          </div>
          
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, opacity: 0.6, marginBottom: '0.5rem' }}>
              Custom div with link styling and balance:
            </p>
            <Link asChild size="5" weight="medium" align="center" wrap="balance" underline="always">
              <div style={{
                padding: '1.5rem',
                backgroundColor: '#f3f4f6',
                border: '2px dashed #9ca3af',
                borderRadius: '0.75rem',
                width: '350px',
                cursor: 'pointer'
              }}>
                Custom Container with Balanced Link Typography
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          🌍 Real-world Examples
        </h2>
        
        <div style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          padding: '2rem'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
              Navigation Links
            </h3>
            <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <Link size="3" weight="medium" underline="hover" href="#home">Home</Link>
              <Link size="3" weight="medium" underline="hover" href="#about">About</Link>
              <Link size="3" weight="medium" underline="hover" href="#services">Services</Link>
              <Link size="3" weight="medium" underline="hover" href="#contact">Contact</Link>
            </nav>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
              Content Links
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
              This is a paragraph with inline links. You can visit our{' '}
              <Link size="3" underline="auto" href="#guidelines">style guidelines</Link>{' '}
              or check out the{' '}
              <Link size="3" underline="auto" href="#documentation">complete documentation</Link>{' '}
              for more information. Don't forget to{' '}
              <Link size="3" weight="medium" underline="always" href="#subscribe">subscribe to our newsletter</Link>{' '}
              for updates.
            </p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
              Call-to-Action Links
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link size="5" weight="bold" underline="none" href="#get-started" style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '0.5rem',
                textDecoration: 'none'
              }}>
                Get Started
              </Link>
              <Link size="4" weight="medium" underline="hover" href="#learn-more">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Props Summary */}
      <section>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          📋 Props Summary
        </h2>
        
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
            <strong>size:</strong>
            <span>"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"</span>
            <span style={{ opacity: 0.6 }}>default: "3"</span>
            
            <strong>weight:</strong>
            <span>"light" | "regular" | "medium" | "bold"</span>
            <span style={{ opacity: 0.6 }}>default: "regular"</span>
            
            <strong>align:</strong>
            <span>"left" | "center" | "right"</span>
            <span style={{ opacity: 0.6 }}>default: undefined</span>
            
            <strong style={{ color: '#059669' }}>trim:</strong>
            <span style={{ color: '#059669' }}>"normal" | "start" | "end" | "both"</span>
            <span style={{ opacity: 0.6, color: '#059669' }}>default: "normal"</span>
            
            <strong style={{ color: '#7c2d12' }}>wrap:</strong>
            <span style={{ color: '#7c2d12' }}>"wrap" | "nowrap" | "pretty" | "balance"</span>
            <span style={{ opacity: 0.6, color: '#7c2d12' }}>default: "wrap"</span>
            
            <strong style={{ color: '#dc2626' }}>underline:</strong>
            <span style={{ color: '#dc2626' }}>"auto" | "always" | "hover" | "none"</span>
            <span style={{ opacity: 0.6, color: '#dc2626' }}>default: "auto"</span>
            
            <strong>truncate:</strong>
            <span>boolean</span>
            <span style={{ opacity: 0.6 }}>default: false</span>
            
            <strong>asChild:</strong>
            <span>boolean</span>
            <span style={{ opacity: 0.6 }}>default: false</span>
          </div>
        </div>
      </section>
    </div>
  )
} 