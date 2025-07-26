import { useState } from 'react'
import { Modal } from './index'

/**
 * DEMONSTRATION: Modal Components Without vs With CSS
 * 
 * This file demonstrates the CRITICAL importance of CSS classes
 * for modal functionality and appearance.
 */

export function ComparisonDemo() {
  const [withoutCSS, setWithoutCSS] = useState(false)
  const [withCSS, setWithCSS] = useState(false)

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>🚨 Modal Comparison: Without vs With CSS</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {/* WITHOUT CSS */}
        <div style={{ 
          padding: '1.5rem', 
          border: '2px solid #ef4444',
          borderRadius: '0.5rem',
          backgroundColor: '#fef2f2'
        }}>
          <h2 style={{ color: '#dc2626', marginTop: 0 }}>❌ WITHOUT CSS Classes</h2>
          <p style={{ color: '#7f1d1d' }}>
            Components render but are invisible/unusable
          </p>
          
          <button
            onClick={() => setWithoutCSS(true)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer'
            }}
          >
            Open Modal (NO CSS)
          </button>
          
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#7f1d1d' }}>
            <strong>Result:</strong>
            <ul style={{ margin: '0.5rem 0', paddingLeft: '1rem' }}>
              <li>Modal opens but is invisible</li>
              <li>No positioning or styling</li>
              <li>Completely unusable</li>
              <li>Just empty divs in DOM</li>
            </ul>
          </div>
        </div>

        {/* WITH CSS */}
        <div style={{ 
          padding: '1.5rem', 
          border: '2px solid #10b981',
          borderRadius: '0.5rem',
          backgroundColor: '#f0fdf4'
        }}>
          <h2 style={{ color: '#059669', marginTop: 0 }}>✅ WITH CSS Classes</h2>
          <p style={{ color: '#064e3b' }}>
            Components render and function perfectly
          </p>
          
          <button
            onClick={() => setWithCSS(true)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer'
            }}
          >
            Open Modal (WITH CSS)
          </button>
          
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#064e3b' }}>
            <strong>Result:</strong>
            <ul style={{ margin: '0.5rem 0', paddingLeft: '1rem' }}>
              <li>Modal fully visible and functional</li>
              <li>Proper positioning and styling</li>
              <li>Complete accessibility</li>
              <li>Professional appearance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal WITHOUT CSS Classes - This will be invisible/broken */}
      <Modal.Root open={withoutCSS} onOpenChange={setWithoutCSS}>
        <Modal.Portal>
          <Modal.Overlay>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>
                  Invisible Modal (No CSS)
                </Modal.Title>
                <Modal.Description>
                  This modal has no CSS classes, so it's invisible!
                </Modal.Description>
              </Modal.Header>
              
              <Modal.Body>
                <p>You probably can't see this modal because it has no styling.</p>
                <p>Check the DOM inspector - the elements are there but invisible.</p>
              </Modal.Body>
              
              <Modal.Footer>
                <Modal.Close>Close (Invisible)</Modal.Close>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Portal>
      </Modal.Root>

      {/* Modal WITH CSS Classes - This will work perfectly */}
      <Modal.Root open={withCSS} onOpenChange={setWithCSS}>
        <Modal.Portal>
          <Modal.Overlay className="modal-overlay">
            <Modal.Content className="modal-content">
              <Modal.Close className="modal-close" />
              
              <Modal.Header className="modal-header">
                <Modal.Title className="modal-title">
                  Visible Modal (With CSS)
                </Modal.Title>
                <Modal.Description className="modal-description">
                  This modal has CSS classes, so it's fully functional!
                </Modal.Description>
              </Modal.Header>
              
              <Modal.Body className="modal-body">
                <p>✅ This modal is fully visible and functional because it uses CSS classes.</p>
                <p>🎨 All styling comes from the imported CSS file.</p>
                <p>⚡ Zero inline styles = maximum performance.</p>
                <p>🎯 You have complete control over appearance.</p>
              </Modal.Body>
              
              <Modal.Footer className="modal-footer">
                <Modal.Close className="modal-trigger modal-trigger-secondary">
                  Close (Visible)
                </Modal.Close>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Portal>
      </Modal.Root>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        backgroundColor: '#fef3c7',
        border: '2px solid #f59e0b',
        borderRadius: '0.5rem'
      }}>
        <h3 style={{ color: '#92400e', marginTop: 0 }}>
          🚨 CRITICAL: CSS Import Required
        </h3>
        <p style={{ color: '#78350f' }}>
          For modals to work, you MUST import the CSS file:
        </p>
        <pre style={{ 
          backgroundColor: '#451a03', 
          color: '#fef3c7', 
          padding: '1rem', 
          borderRadius: '0.25rem',
          overflow: 'auto'
        }}>
{`import { Modal } from './components/modal'
import './components/modal/modal.css' // REQUIRED!`}
        </pre>
        <p style={{ color: '#78350f', marginBottom: 0 }}>
          Without CSS import, components are just empty, invisible divs.
        </p>
      </div>
    </div>
  )
} 