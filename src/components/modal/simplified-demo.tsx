import { useState } from 'react'
import { Modal } from './index'
import './modal.css'

/**
 * Simplified Demo: New Automatic Centering Approach
 * 
 * Shows how Modal.Content is now ALWAYS centered automatically,
 * regardless of whether it's inside an overlay or not.
 */

export function SimplifiedDemo() {
  const [withOverlay, setWithOverlay] = useState(false)
  const [withoutOverlay, setWithoutOverlay] = useState(false)

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto', 
      fontFamily: 'system-ui'
    }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ margin: 0, color: '#1f2937' }}>🎯 Centralização Simplificada</h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
          Modal.Content agora SEMPRE se centraliza automaticamente - CSS puro!
        </p>
      </header>

      {/* Comparison Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* With Overlay */}
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: '#f8fafc', 
          borderRadius: '0.5rem',
          border: '2px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#1e293b' }}>✅ Com Overlay</h3>
          <div style={{ 
            backgroundColor: '#1e293b', 
            color: 'white', 
            padding: '0.5rem', 
            borderRadius: '0.25rem',
            marginBottom: '1rem',
            fontSize: '0.875rem'
          }}>
            <code>{'<Modal.Overlay><Modal.Content /></Modal.Overlay>'}</code>
          </div>
          
          <ul style={{ 
            textAlign: 'left', 
            fontSize: '0.875rem', 
            color: '#475569',
            marginBottom: '1rem'
          }}>
            <li>✅ Backdrop escuro</li>
            <li>✅ Scroll lock</li>
            <li>✅ Click fora fecha</li>
            <li>✅ Centralizado via CSS</li>
          </ul>
          
          <button
            onClick={() => setWithOverlay(true)}
            className="modal-trigger modal-trigger-primary"
          >
            Testar com Overlay
          </button>
        </div>

        {/* Without Overlay */}
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: '#f0fdf4', 
          borderRadius: '0.5rem',
          border: '2px solid #bbf7d0',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#14532d' }}>✅ Sem Overlay</h3>
          <div style={{ 
            backgroundColor: '#14532d', 
            color: 'white', 
            padding: '0.5rem', 
            borderRadius: '0.25rem',
            marginBottom: '1rem',
            fontSize: '0.875rem'
          }}>
            <code>{'<Modal.Content />'}</code>
          </div>
          
          <ul style={{ 
            textAlign: 'left', 
            fontSize: '0.875rem', 
            color: '#166534',
            marginBottom: '1rem'
          }}>
            <li>🚫 Sem backdrop</li>
            <li>⚠️ Sem scroll lock</li>
            <li>⚠️ Sem click fora</li>
            <li>✅ Centralizado via CSS</li>
          </ul>
          
          <button
            onClick={() => setWithoutOverlay(true)}
            className="modal-trigger modal-trigger-success"
          >
            Testar sem Overlay
          </button>
        </div>
      </div>

      {/* Key Points */}
      <div style={{ 
        backgroundColor: '#fef3c7', 
        border: '2px solid #fbbf24',
        borderRadius: '0.5rem', 
        padding: '1.5rem',
        marginBottom: '2rem'
      }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#92400e' }}>🔑 Pontos-Chave da Nova Abordagem</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <h4 style={{ color: '#dc2626', margin: '0 0 0.5rem 0' }}>❌ Antes (Complexo)</h4>
            <ul style={{ fontSize: '0.875rem', color: '#7c2d12', margin: 0 }}>
              <li>JavaScript detectava contexto</li>
              <li>Classes CSS condicionais</li>
              <li>useState + useEffect</li>
              <li>Dois comportamentos diferentes</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#059669', margin: '0 0 0.5rem 0' }}>✅ Agora (Simples)</h4>
            <ul style={{ fontSize: '0.875rem', color: '#14532d', margin: 0 }}>
              <li>CSS puro para centralização</li>
              <li>Uma classe única sempre</li>
              <li>Zero JavaScript extra</li>
              <li>Comportamento consistente</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CSS Explanation */}
      <div style={{ 
        backgroundColor: '#f3f4f6', 
        padding: '1.5rem', 
        borderRadius: '0.5rem',
        marginBottom: '2rem'
      }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#374151' }}>🎨 Como Funciona o CSS</h3>
        
        <div style={{ 
          backgroundColor: '#1f2937', 
          color: '#f9fafb', 
          padding: '1rem', 
          borderRadius: '0.25rem',
          fontFamily: 'Monaco, Consolas, monospace',
          fontSize: '0.875rem',
          overflow: 'auto'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>/* Modal.Content - SEMPRE centralizado */</div>
            <div>.modal-content {'{'}
              <div style={{ paddingLeft: '1rem' }}>
                position: fixed;<br/>
                top: 50%;<br/>
                left: 50%;<br/>
                transform: translate(-50%, -50%);<br/>
                width: 90vw;<br/>
                max-width: 32rem;
              </div>
            {'}'}</div>
          </div>
          
          <div>
            <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>/* Modal.Overlay - Apenas backdrop */</div>
            <div>.modal-overlay {'{'}
              <div style={{ paddingLeft: '1rem' }}>
                position: fixed;<br/>
                inset: 0;<br/>
                background-color: rgba(0, 0, 0, 0.8);<br/>
                {/* Sem display: flex! */}
              </div>
            {'}'}</div>
          </div>
        </div>
      </div>

      {/* Modal with Overlay */}
      <Modal.Root open={withOverlay} onOpenChange={setWithOverlay}>
        <Modal.Portal>
          <Modal.Overlay>
            <Modal.Content>
              <Modal.Close />
              <Modal.Header>
                <Modal.Title>Modal COM Overlay</Modal.Title>
                <Modal.Description>
                  Este modal tem um backdrop escuro e todas as funcionalidades tradicionais.
                </Modal.Description>
              </Modal.Header>
              
              <Modal.Body>
                <div style={{ 
                  padding: '1rem', 
                  backgroundColor: '#f0f9ff', 
                  borderRadius: '0.25rem',
                  marginBottom: '1rem'
                }}>
                  <h5 style={{ margin: '0 0 0.5rem 0', color: '#0369a1' }}>✅ Características:</h5>
                  <ul style={{ margin: 0, color: '#0369a1', fontSize: '0.875rem' }}>
                    <li>Backdrop escuro com blur</li>
                    <li>Scroll da página bloqueado</li>
                    <li>Click fora do modal fecha</li>
                    <li>Escape fecha o modal</li>
                    <li>Focus trap ativo</li>
                  </ul>
                </div>
                
                <div style={{ 
                  padding: '1rem', 
                  backgroundColor: '#f3f4f6', 
                  borderRadius: '0.25rem'
                }}>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#4b5563' }}>
                    <strong>CSS aplicado:</strong> Apenas <code>.modal-content</code> - 
                    centralizado via <code>position: fixed + transform</code>
                  </p>
                </div>
              </Modal.Body>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Portal>
      </Modal.Root>

      {/* Modal without Overlay */}
      <Modal.Root open={withoutOverlay} onOpenChange={setWithoutOverlay}>
        <Modal.Portal>
          <Modal.Content>
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>Modal SEM Overlay</Modal.Title>
              <Modal.Description>
                Este modal funciona sem backdrop, mas fica centralizado da mesma forma!
              </Modal.Description>
            </Modal.Header>
            
            <Modal.Body>
              <div style={{ 
                padding: '1rem', 
                backgroundColor: '#fef3c7', 
                borderRadius: '0.25rem',
                marginBottom: '1rem'
              }}>
                <h5 style={{ margin: '0 0 0.5rem 0', color: '#92400e' }}>⚠️ Diferenças:</h5>
                <ul style={{ margin: 0, color: '#92400e', fontSize: '0.875rem' }}>
                  <li>Sem backdrop (página visível atrás)</li>
                  <li>Scroll da página NÃO é bloqueado</li>
                  <li>Click fora NÃO fecha o modal</li>
                  <li>Escape ainda fecha (focus trap ativo)</li>
                  <li>Focus trap ainda funciona</li>
                </ul>
              </div>
              
              <div style={{ 
                padding: '1rem', 
                backgroundColor: '#f0fdf4', 
                borderRadius: '0.25rem'
              }}>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#14532d' }}>
                  <strong>CSS aplicado:</strong> Exatamente o mesmo! <code>.modal-content</code> - 
                  centralizado via <code>position: fixed + transform</code>
                </p>
              </div>
            </Modal.Body>
            
            <Modal.Footer>
              <button
                onClick={() => setWithoutOverlay(false)}
                className="modal-trigger modal-trigger-primary"
              >
                Fechar Modal
              </button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Final Summary */}
      <div style={{ 
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#ecfdf5',
        borderRadius: '0.5rem',
        border: '2px solid #a7f3d0'
      }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#065f46' }}>🎉 Resultado Final</h3>
        <p style={{ margin: '0 0 1rem 0', color: '#065f46', fontSize: '1.125rem' }}>
          <strong>Modal.Content agora SEMPRE fica centralizado!</strong>
        </p>
        <p style={{ margin: 0, color: '#047857', fontSize: '0.875rem' }}>
          Sem JavaScript complexo, sem classes condicionais, sem detecção de contexto.<br/>
          Apenas CSS puro e simples que funciona em qualquer situação! 🚀
        </p>
      </div>
    </div>
  )
} 