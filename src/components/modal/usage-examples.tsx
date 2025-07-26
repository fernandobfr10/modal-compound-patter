import { useState } from 'react'
import { Modal } from './index'
import './modal.css'

/**
 * Usage examples for the Modal component
 * 
 * Shows different patterns and use cases for the modal system
 */

export function ModalUsageExamples() {
  const [basicModal, setBasicModal] = useState(false)
  const [cleanModal, setCleanModal] = useState(false)

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      fontFamily: 'system-ui'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ margin: 0, color: '#1f2937' }}>📚 Modal Usage Examples</h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem', fontSize: '1.125rem' }}>
          Different patterns and use cases for the modal component
        </p>
      </header>

      {/* Example Buttons */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem',
        marginBottom: '3rem'
      }}>
        <button 
          onClick={() => setBasicModal(true)}
          className="modal-trigger modal-trigger-primary"
        >
          Basic Modal
        </button>

        <button 
          onClick={() => setCleanModal(true)}
          className="modal-trigger modal-trigger-secondary"
        >
          Clean Modal (No Overlay)
        </button>
      </div>

      {/* Basic Modal */}
      <Modal.Root open={basicModal} onOpenChange={setBasicModal}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>Basic Modal Example</Modal.Title>
              <Modal.Description>
                A standard modal with overlay, header, body, and footer.
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <p>This is a basic modal with all the standard components:</p>
              <ul>
                <li>✅ Modal.Overlay for the backdrop</li>
                <li>✅ Modal.Content as the main container</li>
                <li>✅ Modal.Header with title and description</li>
                <li>✅ Modal.Body for the main content</li>
                <li>✅ Modal.Footer for actions</li>
                <li>✅ Modal.Close button</li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <button 
                onClick={() => setBasicModal(false)}
                className="modal-trigger modal-trigger-secondary"
              >
                Cancel
              </button>
              <button 
                onClick={() => setBasicModal(false)}
                className="modal-trigger modal-trigger-primary"
              >
                Confirm
              </button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Clean Modal (Without Overlay) */}
      <Modal.Root open={cleanModal} onOpenChange={setCleanModal}>
        <Modal.Portal>
          <Modal.Content>
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>Clean Modal (No Overlay)</Modal.Title>
              <Modal.Description>
                A modal without backdrop overlay - notice the page is still visible behind.
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <p>This modal demonstrates:</p>
              <ul>
                <li>🚫 No Modal.Overlay (no backdrop)</li>
                <li>✅ Still perfectly centered</li>
                <li>✅ All accessibility features intact</li>
                <li>⚠️ No click-outside-to-close (no backdrop)</li>
                <li>⚠️ No scroll lock (page remains scrollable)</li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <button 
                onClick={() => setCleanModal(false)}
                className="modal-trigger modal-trigger-primary"
              >
                Close
              </button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  )
}

// Form Modal Example (External Trigger)
export function FormModalExample() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submitted!')
    setIsOpen(false)
  }

  return (
    <>
      <Modal.Trigger 
        onOpenChange={setIsOpen}
        className="modal-trigger modal-trigger-primary"
      >
        Open Form Modal
      </Modal.Trigger>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Close />
            
            <Modal.Header>
              <Modal.Title>Contact Form</Modal.Title>
              <Modal.Description>
                Fill out the form below to send us a message.
              </Modal.Description>
            </Modal.Header>
            
            <Modal.Body>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="modal-form-group">
                  <label className="modal-label" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="modal-input"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="modal-form-group">
                  <label className="modal-label" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="modal-input"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="modal-form-group">
                  <label className="modal-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="modal-input"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                  />
                </div>
              </form>
            </Modal.Body>
            
            <Modal.Footer>
              <button 
                type="button"
                onClick={() => setIsOpen(false)}
                className="modal-trigger modal-trigger-secondary"
              >
                Cancel
              </button>
              <button 
                type="submit"
                onClick={handleSubmit}
                className="modal-trigger modal-trigger-primary"
              >
                Send Message
              </button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </>
  )
}

// Confirmation Modal Example
export function ConfirmationModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  const handleConfirm = () => {
    alert('Action confirmed!')
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Modal.Trigger 
        onOpenChange={setIsOpen}
        className="modal-trigger modal-trigger-danger"
      >
        Delete Item
      </Modal.Trigger>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content className="modal-content-small">
            <Modal.Header>
              <Modal.Title>Confirm Deletion</Modal.Title>
              <Modal.Description>
                Are you sure you want to delete this item? This action cannot be undone.
              </Modal.Description>
            </Modal.Header>
            
            <Modal.Footer>
              <button 
                onClick={handleCancel}
                className="modal-trigger modal-trigger-secondary"
              >
                Cancel
              </button>
              <button 
                onClick={handleConfirm}
                className="modal-trigger modal-trigger-danger"
              >
                Delete
              </button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </>
  )
}

// Modal with AsChild Example
export function AsChildModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Modal.Trigger 
        asChild
        onOpenChange={setIsOpen}
      >
        <div style={{
          background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontWeight: '600',
          display: 'inline-block',
          border: 'none'
        }}>
          🎨 Custom Trigger (AsChild)
        </div>
      </Modal.Trigger>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Close asChild>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                backgroundColor: '#ef4444',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: 'none',
                fontSize: '1rem'
              }}>
                ×
              </div>
            </Modal.Close>
            
            <Modal.Header>
              <Modal.Title asChild>
                <h1 style={{
                  background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: 0
                }}>
                  🎭 AsChild Examples
                </h1>
              </Modal.Title>
              <Modal.Description asChild>
                <div style={{
                  backgroundColor: '#f3f4f6',
                  padding: '0.75rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  fontStyle: 'italic'
                }}>
                  This modal demonstrates asChild usage in multiple components
                </div>
              </Modal.Description>
            </Modal.Header>
            
            <Modal.Body asChild>
              <section style={{
                backgroundColor: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ margin: '0 0 1rem 0' }}>AsChild Components Used:</h3>
                <ul style={{ margin: 0 }}>
                  <li>🎯 <strong>Modal.Trigger</strong> - Custom gradient div</li>
                  <li>❌ <strong>Modal.Close</strong> - Custom circular button</li>
                  <li>📝 <strong>Modal.Title</strong> - Custom h1 with gradient text</li>
                  <li>📄 <strong>Modal.Description</strong> - Custom styled div</li>
                  <li>📦 <strong>Modal.Body</strong> - Custom section element</li>
                </ul>
              </section>
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </>
  )
} 