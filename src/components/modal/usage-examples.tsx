import { useState } from 'react'
import { Modal } from './index'
import './modal.css'

/**
 * Examples of using Modal components with ZERO inline styles
 * All styling comes from CSS classes
 */

// Basic Modal Example
export function BasicModalExample() {
  return (
    <Modal.Root>
      <Modal.Trigger className="modal-trigger modal-trigger-primary">
        Open Basic Modal
      </Modal.Trigger>
      
      <Modal.Portal>
        <Modal.Overlay className="modal-overlay">
          <Modal.Content className="modal-content">
            <Modal.Close className="modal-close" />
            
            <Modal.Header className="modal-header">
              <Modal.Title className="modal-title">
                Basic Modal Title
              </Modal.Title>
              <Modal.Description className="modal-description">
                This modal uses only CSS classes - no inline styles.
              </Modal.Description>
            </Modal.Header>
            
            <Modal.Body className="modal-body">
              <p>All styling comes from CSS classes.</p>
              <p>Components are completely style-agnostic.</p>
            </Modal.Body>
            
            <Modal.Footer className="modal-footer">
              <Modal.Close className="modal-trigger modal-trigger-secondary">
                Cancel
              </Modal.Close>
              <button className="modal-trigger modal-trigger-primary">
                Confirm
              </button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Overlay>
      </Modal.Portal>
    </Modal.Root>
  )
}

// Controlled Modal Example
export function ControlledModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="modal-trigger modal-trigger-success"
      >
        Open Controlled Modal
      </button>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Portal>
          <Modal.Overlay className="modal-overlay">
            <Modal.Content className="modal-content modal-content-small">
              <Modal.Header className="modal-header">
                <Modal.Title className="modal-title">
                  Controlled Modal
                </Modal.Title>
                <Modal.Description className="modal-description">
                  State managed externally with useState.
                </Modal.Description>
              </Modal.Header>
              
              <Modal.Footer className="modal-footer">
                <Modal.Close className="modal-trigger modal-trigger-secondary">
                  Close
                </Modal.Close>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Portal>
      </Modal.Root>
    </>
  )
}

// Form Modal Example
export function FormModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submitted!')
    setIsOpen(false)
  }

  return (
    <>
      <Modal.ExternalTrigger 
        onOpenChange={setIsOpen}
        className="modal-trigger modal-trigger-primary"
      >
        Open Form Modal
      </Modal.ExternalTrigger>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Portal>
          <Modal.Overlay className="modal-overlay">
            <Modal.Content className="modal-content">
              <Modal.Close className="modal-close" />
              
              <Modal.Header className="modal-header">
                <Modal.Title className="modal-title">
                  Contact Form
                </Modal.Title>
                <Modal.Description className="modal-description">
                  Fill out the form below to get in touch.
                </Modal.Description>
              </Modal.Header>
              
              <form onSubmit={handleSubmit}>
                <Modal.Body className="modal-body">
                  <div className="modal-form-group">
                    <label className="modal-label">Name</label>
                    <input 
                      type="text" 
                      required 
                      className="modal-input"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="modal-form-group">
                    <label className="modal-label">Email</label>
                    <input 
                      type="email" 
                      required 
                      className="modal-input"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="modal-form-group">
                    <label className="modal-label">Message</label>
                    <textarea 
                      required 
                      className="modal-input"
                      rows={4}
                      placeholder="Your message here..."
                    />
                  </div>
                </Modal.Body>
                
                <Modal.Footer className="modal-footer">
                  <Modal.Close className="modal-trigger modal-trigger-secondary">
                    Cancel
                  </Modal.Close>
                  <button 
                    type="submit" 
                    className="modal-trigger modal-trigger-primary"
                  >
                    Send Message
                  </button>
                </Modal.Footer>
              </form>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Portal>
      </Modal.Root>
    </>
  )
}

// Custom Styled Modal Example (using custom CSS classes)
export function CustomStyledModalExample() {
  return (
    <Modal.Root>
      <Modal.Trigger className="custom-trigger">
        Open Custom Styled Modal
      </Modal.Trigger>
      
      <Modal.Portal>
        <Modal.Overlay className="custom-overlay">
          <Modal.Content className="custom-content">
            <Modal.Close className="custom-close">✕</Modal.Close>
            
            <Modal.Header className="custom-header">
              <Modal.Title className="custom-title">
                Custom Styled Modal
              </Modal.Title>
              <Modal.Description className="custom-description">
                This modal uses completely custom CSS classes.
              </Modal.Description>
            </Modal.Header>
            
            <Modal.Body className="custom-body">
              <p>You have full control over styling!</p>
              <ul>
                <li>Custom colors</li>
                <li>Custom spacing</li>
                <li>Custom animations</li>
                <li>Custom everything!</li>
              </ul>
            </Modal.Body>
          </Modal.Content>
        </Modal.Overlay>
      </Modal.Portal>
    </Modal.Root>
  )
}

/* 
  Example of custom CSS classes (add to your CSS file):

  .custom-trigger {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 2rem;
    cursor: pointer;
    font-weight: bold;
  }

  .custom-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    background: linear-gradient(45deg, rgba(255,107,107,0.8), rgba(78,205,196,0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .custom-content {
    position: relative;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 1rem;
    max-width: 28rem;
    width: 100%;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
  }

  .custom-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custom-header {
    padding: 2rem 2rem 0;
  }

  .custom-title {
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
    font-weight: bold;
  }

  .custom-description {
    margin: 0;
    opacity: 0.9;
  }

  .custom-body {
    padding: 1.5rem 2rem 2rem;
  }
*/ 