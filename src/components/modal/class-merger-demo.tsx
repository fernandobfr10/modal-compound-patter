import { useState } from 'react'
import { cn, modalClasses } from '../../utils/cn'
import { Modal } from './index'

/**
 * Advanced Demo: Using cn function directly
 * Shows how to use the class merger function for complex scenarios
 */

export function ClassMergerDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const [variant, setVariant] = useState<'default' | 'success' | 'danger'>('default')
  const [size, setSize] = useState<'small' | 'default' | 'large'>('default')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>🎨 Advanced Class Merging Demo</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Configure Modal:</h3>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <label>
            Variant:
            <select 
              value={variant} 
                             onChange={(e) => setVariant(e.target.value as 'default' | 'success' | 'danger')}
              style={{ marginLeft: '0.5rem' }}
            >
              <option value="default">Default</option>
              <option value="success">Success</option>
              <option value="danger">Danger</option>
            </select>
          </label>
          
          <label>
            Size:
            <select 
              value={size} 
                             onChange={(e) => setSize(e.target.value as 'small' | 'default' | 'large')}
              style={{ marginLeft: '0.5rem' }}
            >
              <option value="small">Small</option>
              <option value="default">Default</option>
              <option value="large">Large</option>
            </select>
          </label>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="checkbox" 
              checked={isLoading}
              onChange={(e) => setIsLoading(e.target.checked)}
            />
            Loading State
          </label>
        </div>
        
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            'modal-trigger',
            {
              'modal-trigger-primary': variant === 'default',
              'modal-trigger-success': variant === 'success', 
              'modal-trigger-danger': variant === 'danger',
            }
          )}
        >
          Open Configurable Modal
        </button>
      </div>

      <div style={{ 
        backgroundColor: '#f9fafb', 
        padding: '1.5rem', 
        borderRadius: '0.5rem',
        marginBottom: '2rem'
      }}>
        <h3>🔧 How cn() Function Works:</h3>
        
        <div style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
          <p><strong>Basic Usage:</strong></p>
          <pre style={{ backgroundColor: '#1f2937', color: '#f9fafb', padding: '1rem', borderRadius: '0.25rem' }}>
{`// Simple merging
cn('base-class', 'additional-class')
// → "base-class additional-class"

// Conditional classes
cn('base-class', { 
  'active-class': isActive,
  'disabled-class': isDisabled 
})

// With modalClasses helper
modalClasses.content('my-custom-class')
// → "modal-content my-custom-class"`}
          </pre>
        </div>
        
        <p><strong>Current Modal Classes:</strong></p>
        <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', backgroundColor: '#e5e7eb', padding: '1rem', borderRadius: '0.25rem' }}>
          <p><strong>Content:</strong> {cn(
            modalClasses.content(),
            {
              'modal-content-small': size === 'small',
              'modal-content-large': size === 'large',
              'modal-variant-success': variant === 'success',
              'modal-variant-danger': variant === 'danger',
              'modal-loading': isLoading,
            }
          )}</p>
          
          <p><strong>Trigger:</strong> {cn(
            'modal-trigger',
            {
              'modal-trigger-primary': variant === 'default',
              'modal-trigger-success': variant === 'success',
              'modal-trigger-danger': variant === 'danger',
            }
          )}</p>
        </div>
      </div>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Portal>
          <Modal.Overlay 
            className={cn({
              'overlay-variant-success': variant === 'success',
              'overlay-variant-danger': variant === 'danger',
            })}
          >
            <Modal.Content 
              className={cn({
                'modal-content-small': size === 'small',
                'modal-content-large': size === 'large',
                'modal-variant-success': variant === 'success',
                'modal-variant-danger': variant === 'danger',
                'modal-loading': isLoading,
              })}
            >
              <Modal.Close />
              
              <Modal.Header>
                <Modal.Title 
                  className={cn({
                    'title-variant-success': variant === 'success',
                    'title-variant-danger': variant === 'danger',
                  })}
                >
                  {variant === 'success' && '✅ '}
                  {variant === 'danger' && '⚠️ '}
                  Configurable Modal
                </Modal.Title>
                <Modal.Description>
                  This modal demonstrates advanced class merging with the cn() function.
                </Modal.Description>
              </Modal.Header>
              
              <Modal.Body>
                <div style={{ marginBottom: '1rem' }}>
                  <h4>Current Configuration:</h4>
                  <ul>
                    <li><strong>Variant:</strong> {variant}</li>
                    <li><strong>Size:</strong> {size}</li>
                    <li><strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}</li>
                  </ul>
                </div>
                
                {isLoading && (
                  <div className="loading-spinner" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '0.25rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '1rem',
                      height: '1rem',
                      border: '2px solid #e5e7eb',
                      borderTopColor: '#3b82f6',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Loading...
                  </div>
                )}
                
                <div style={{ 
                  backgroundColor: variant === 'success' ? '#f0fdf4' : variant === 'danger' ? '#fef2f2' : '#f9fafb',
                  padding: '1rem',
                  borderRadius: '0.25rem',
                  border: `1px solid ${variant === 'success' ? '#bbf7d0' : variant === 'danger' ? '#fecaca' : '#e5e7eb'}`
                }}>
                  <p>The classes are merged intelligently:</p>
                  <ul>
                    <li>Default modal classes are always applied</li>
                    <li>Conditional classes are added based on state</li>
                    <li>Custom classes override defaults when needed</li>
                    <li>No duplicate classes in final output</li>
                  </ul>
                </div>
              </Modal.Body>
              
              <Modal.Footer>
                <Modal.Close 
                  className={cn('modal-trigger-secondary', {
                    'opacity-50': isLoading
                  })}
                  disabled={isLoading}
                >
                  {isLoading ? 'Please wait...' : 'Close'}
                </Modal.Close>
                
                <button
                  className={cn('modal-trigger', {
                    'modal-trigger-success': variant === 'success',
                    'modal-trigger-danger': variant === 'danger',
                    'modal-trigger-primary': variant === 'default',
                    'opacity-50 cursor-not-allowed': isLoading,
                  })}
                  disabled={isLoading}
                  onClick={() => {
                    setIsLoading(true)
                    setTimeout(() => {
                      setIsLoading(false)
                      setIsOpen(false)
                    }, 2000)
                  }}
                >
                  {isLoading ? 'Processing...' : 
                   variant === 'danger' ? 'Delete' : 
                   variant === 'success' ? 'Confirm' : 'Save'}
                </button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Portal>
      </Modal.Root>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .modal-variant-success {
          border-color: #10b981 !important;
          box-shadow: 0 0 0 1px #10b981 !important;
        }
        
        .modal-variant-danger {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 1px #ef4444 !important;
        }
        
        .title-variant-success {
          color: #059669 !important;
        }
        
        .title-variant-danger {
          color: #dc2626 !important;
        }
        
        .overlay-variant-success {
          background-color: rgba(16, 185, 129, 0.8) !important;
        }
        
        .overlay-variant-danger {
          background-color: rgba(239, 68, 68, 0.8) !important;
        }
        
        .modal-loading {
          pointer-events: none;
        }
      `}</style>
    </div>
  )
} 