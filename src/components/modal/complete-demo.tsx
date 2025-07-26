import { useState } from 'react'
import { cn } from '../../utils/cn'
import { Modal } from './index'
import './modal.css'

/**
 * Complete Demo: All Modal Features with Class Helper System
 * 
 * This demo showcases:
 * - Automatic default classes
 * - Class merging with cn() function
 * - Conditional classes
 * - External triggers
 * - Different modal variants
 * - Complex class combinations
 */

export function CompleteDemo() {
  // Modal states
  const [formOpen, setFormOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [customOpen, setCustomOpen] = useState(false)
  
  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Modal configuration
  const [modalConfig, setModalConfig] = useState({
    variant: 'default' as 'default' | 'success' | 'warning' | 'danger',
    size: 'default' as 'small' | 'default' | 'large',
    animation: 'default' as 'default' | 'slide' | 'fade' | 'zoom',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}`)
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
    setFormOpen(false)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ margin: 0, color: '#1f2937' }}>🎨 Complete Modal System Demo</h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
          Demonstrating automatic classes, helper functions, and all modal features
        </p>
      </header>

      {/* Configuration Panel */}
      <section style={{ 
        backgroundColor: '#f9fafb', 
        padding: '1.5rem', 
        borderRadius: '0.5rem', 
        marginBottom: '2rem',
        border: '1px solid #e5e7eb'
      }}>
        <h3 style={{ marginTop: 0, color: '#374151' }}>⚙️ Configure Custom Modal</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Variant:
            </label>
            <select
              value={modalConfig.variant}
              onChange={(e) => setModalConfig(prev => ({ 
                ...prev, 
                variant: e.target.value as typeof modalConfig.variant 
              }))}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d1d5db' }}
            >
              <option value="default">Default</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="danger">Danger</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Size:
            </label>
            <select
              value={modalConfig.size}
              onChange={(e) => setModalConfig(prev => ({ 
                ...prev, 
                size: e.target.value as typeof modalConfig.size 
              }))}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d1d5db' }}
            >
              <option value="small">Small</option>
              <option value="default">Default</option>
              <option value="large">Large</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Animation:
            </label>
            <select
              value={modalConfig.animation}
              onChange={(e) => setModalConfig(prev => ({ 
                ...prev, 
                animation: e.target.value as typeof modalConfig.animation 
              }))}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d1d5db' }}
            >
              <option value="default">Default</option>
              <option value="slide">Slide</option>
              <option value="fade">Fade</option>
              <option value="zoom">Zoom</option>
            </select>
          </div>
        </div>
        
        <button
          onClick={() => setCustomOpen(true)}
          className={cn('modal-trigger', {
            'modal-trigger-primary': modalConfig.variant === 'default',
            'modal-trigger-success': modalConfig.variant === 'success',
            'modal-trigger-warning': modalConfig.variant === 'warning',
            'modal-trigger-danger': modalConfig.variant === 'danger',
          })}
          style={{ marginTop: '1rem' }}
        >
          Open Configured Modal
        </button>
      </section>

      {/* Demo Buttons Grid */}
      <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#374151', marginBottom: '1rem' }}>🚀 Modal Examples</h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1rem' 
        }}>
          {/* Basic Modal - Uses default classes only */}
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: 'white', 
            borderRadius: '0.5rem', 
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>Default Classes</h4>
            <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.875rem' }}>
              Components use default classes automatically
            </p>
            
            <Modal.Root>
              <Modal.Trigger>
                Open Basic Modal
              </Modal.Trigger>
              
              <Modal.Portal>
                <Modal.Overlay>
                  <Modal.Content>
                    <Modal.Close />
                    <Modal.Header>
                      <Modal.Title>Basic Modal</Modal.Title>
                      <Modal.Description>
                        This modal uses only default classes applied automatically.
                      </Modal.Description>
                    </Modal.Header>
                    
                    <Modal.Body>
                      <div style={{ backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.25rem' }}>
                        <h5>Classes Applied:</h5>
                        <ul style={{ fontSize: '0.875rem', margin: '0.5rem 0' }}>
                          <li><code>modal-overlay</code></li>
                          <li><code>modal-content</code></li>
                          <li><code>modal-header</code></li>
                          <li><code>modal-title</code></li>
                          <li><code>modal-body</code></li>
                          <li><code>modal-close</code></li>
                        </ul>
                        <p style={{ fontSize: '0.875rem', margin: 0 }}>
                          No className props needed!
                        </p>
                      </div>
                    </Modal.Body>
                  </Modal.Content>
                </Modal.Overlay>
              </Modal.Portal>
            </Modal.Root>
          </div>

          {/* Form Modal - External trigger */}
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: 'white', 
            borderRadius: '0.5rem', 
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>Contact Form</h4>
            <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.875rem' }}>
              External trigger with form handling
            </p>
            
            <Modal.ExternalTrigger
              onOpenChange={setFormOpen}
              className="modal-trigger-success"
            >
              Open Contact Form
            </Modal.ExternalTrigger>
          </div>

          {/* Confirmation Modal */}
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: 'white', 
            borderRadius: '0.5rem', 
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>Confirmation</h4>
            <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.875rem' }}>
              Small modal with custom styling
            </p>
            
            <button
              onClick={() => setConfirmOpen(true)}
              className="modal-trigger modal-trigger-danger"
            >
              Delete Account
            </button>
          </div>

          {/* Info Panel */}
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: '#eff6ff', 
            borderRadius: '0.5rem', 
            border: '1px solid #bfdbfe' 
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e40af' }}>💡 How It Works</h4>
            <ul style={{ fontSize: '0.875rem', color: '#1e40af', margin: 0, paddingLeft: '1rem' }}>
              <li>Default classes applied automatically</li>
              <li>Your classes merge with defaults</li>
              <li>Use cn() for conditional classes</li>
              <li>External triggers work anywhere</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <Modal.Root open={formOpen} onOpenChange={setFormOpen}>
        <Modal.Portal>
          <Modal.Overlay>
            <Modal.Content className="modal-content-large">
              <Modal.Close />
              <Modal.Header>
                <Modal.Title>Contact Us</Modal.Title>
                <Modal.Description>
                  Send us a message and we'll get back to you soon.
                </Modal.Description>
              </Modal.Header>
              
              <form onSubmit={handleSubmit}>
                <Modal.Body>
                  <div className="modal-form-group">
                    <label className="modal-label">Full Name</label>
                    <input
                      type="text"
                      required
                      className="modal-input"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="modal-form-group">
                    <label className="modal-label">Email Address</label>
                    <input
                      type="email"
                      required
                      className="modal-input"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="modal-form-group">
                    <label className="modal-label">Message</label>
                    <textarea
                      required
                      className="modal-input"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Tell us how we can help..."
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {isSubmitting && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '1rem',
                      backgroundColor: '#f0f9ff',
                      border: '1px solid #bae6fd',
                      borderRadius: '0.25rem',
                      color: '#0369a1'
                    }}>
                      <div style={{
                        width: '1rem',
                        height: '1rem',
                        border: '2px solid #e0e7ff',
                        borderTopColor: '#3b82f6',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      Sending your message...
                    </div>
                  )}
                </Modal.Body>
                
                <Modal.Footer>
                  <Modal.Close 
                    className={cn('modal-trigger-secondary', {
                      'opacity-50': isSubmitting
                    })}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Modal.Close>
                  <button
                    type="submit"
                    className={cn('modal-trigger modal-trigger-primary', {
                      'opacity-50': isSubmitting
                    })}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </Modal.Footer>
              </form>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Portal>
      </Modal.Root>

      {/* Confirmation Modal */}
      <Modal.Root open={confirmOpen} onOpenChange={setConfirmOpen}>
        <Modal.Portal>
          <Modal.Overlay className="confirmation-overlay">
            <Modal.Content className="modal-content-small confirmation-modal">
              <Modal.Header>
                <Modal.Title className="danger-title">⚠️ Delete Account</Modal.Title>
                <Modal.Description>
                  This action cannot be undone. All your data will be permanently deleted.
                </Modal.Description>
              </Modal.Header>
              
              <Modal.Footer>
                <Modal.Close className="modal-trigger-secondary">
                  Cancel
                </Modal.Close>
                <button
                  onClick={() => {
                    alert('Account would be deleted!')
                    setConfirmOpen(false)
                  }}
                  className="modal-trigger modal-trigger-danger"
                >
                  Delete Account
                </button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Portal>
      </Modal.Root>

      {/* Custom Configured Modal */}
      <Modal.Root open={customOpen} onOpenChange={setCustomOpen}>
        <Modal.Portal>
          <Modal.Overlay 
            className={cn(`overlay-${modalConfig.animation}`, {
              'overlay-variant-success': modalConfig.variant === 'success',
              'overlay-variant-warning': modalConfig.variant === 'warning',
              'overlay-variant-danger': modalConfig.variant === 'danger',
            })}
          >
            <Modal.Content 
              className={cn({
                'modal-content-small': modalConfig.size === 'small',
                'modal-content-large': modalConfig.size === 'large',
                'modal-variant-success': modalConfig.variant === 'success',
                'modal-variant-warning': modalConfig.variant === 'warning',
                'modal-variant-danger': modalConfig.variant === 'danger',
                [`modal-animation-${modalConfig.animation}`]: modalConfig.animation !== 'default',
              })}
            >
              <Modal.Close />
              <Modal.Header>
                <Modal.Title 
                  className={cn({
                    'title-success': modalConfig.variant === 'success',
                    'title-warning': modalConfig.variant === 'warning',
                    'title-danger': modalConfig.variant === 'danger',
                  })}
                >
                  {modalConfig.variant === 'success' && '✅ '}
                  {modalConfig.variant === 'warning' && '⚠️ '}
                  {modalConfig.variant === 'danger' && '🚨 '}
                  Configured Modal
                </Modal.Title>
                <Modal.Description>
                  This modal demonstrates the class helper system with dynamic configuration.
                </Modal.Description>
              </Modal.Header>
              
              <Modal.Body>
                <div style={{ 
                  backgroundColor: modalConfig.variant === 'success' ? '#f0fdf4' : 
                                  modalConfig.variant === 'warning' ? '#fffbeb' :
                                  modalConfig.variant === 'danger' ? '#fef2f2' : '#f9fafb',
                  padding: '1rem',
                  borderRadius: '0.25rem',
                  marginBottom: '1rem'
                }}>
                  <h5>Current Configuration:</h5>
                  <ul style={{ margin: '0.5rem 0' }}>
                    <li><strong>Variant:</strong> {modalConfig.variant}</li>
                    <li><strong>Size:</strong> {modalConfig.size}</li>
                    <li><strong>Animation:</strong> {modalConfig.animation}</li>
                  </ul>
                </div>
                
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  <p><strong>Generated Classes:</strong></p>
                  <code style={{ 
                    display: 'block', 
                    backgroundColor: '#f3f4f6', 
                    padding: '0.5rem', 
                    borderRadius: '0.25rem',
                    wordBreak: 'break-all'
                  }}>
                    {cn('modal-content', {
                      'modal-content-small': modalConfig.size === 'small',
                      'modal-content-large': modalConfig.size === 'large',
                      'modal-variant-success': modalConfig.variant === 'success',
                      'modal-variant-warning': modalConfig.variant === 'warning',
                      'modal-variant-danger': modalConfig.variant === 'danger',
                      [`modal-animation-${modalConfig.animation}`]: modalConfig.animation !== 'default',
                    })}
                  </code>
                </div>
              </Modal.Body>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Portal>
      </Modal.Root>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .confirmation-overlay {
          background-color: rgba(239, 68, 68, 0.8) !important;
        }
        
        .confirmation-modal {
          border: 2px solid #fca5a5;
        }
        
        .danger-title {
          color: #dc2626 !important;
        }
        
        .modal-variant-success {
          border-left: 4px solid #10b981;
        }
        
        .modal-variant-warning {
          border-left: 4px solid #f59e0b;
        }
        
        .modal-variant-danger {
          border-left: 4px solid #ef4444;
        }
        
        .title-success { color: #059669; }
        .title-warning { color: #d97706; }
        .title-danger { color: #dc2626; }
        
        .overlay-variant-success {
          background-color: rgba(16, 185, 129, 0.8) !important;
        }
        
        .overlay-variant-warning {
          background-color: rgba(245, 158, 11, 0.8) !important;
        }
        
        .overlay-variant-danger {
          background-color: rgba(239, 68, 68, 0.8) !important;
        }
        
        .modal-trigger-warning {
          background-color: #f59e0b;
          color: white;
        }
        
        .modal-trigger-warning:hover {
          background-color: #d97706;
        }
      `}</style>
    </div>
  )
} 