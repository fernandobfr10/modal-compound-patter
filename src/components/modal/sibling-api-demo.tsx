import { useState } from 'react'
import { Modal } from './index'
import './modal.css'

/**
 * Sibling API Demo: Overlay and Content as Siblings
 * 
 * Demonstrates the new cleaner API where Modal.Overlay and Modal.Content
 * are sibling elements instead of parent-child.
 */

export function SiblingApiDemo() {
  const [showComparison, setShowComparison] = useState(false)

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '900px', 
      margin: '0 auto', 
      fontFamily: 'system-ui'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ margin: 0, color: '#1f2937' }}>🎯 Nova API: Elementos Irmãos</h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem', fontSize: '1.125rem' }}>
          Overlay e Content agora são irmãos - API mais limpa e intuitiva!
        </p>
      </header>

      {/* API Comparison */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {/* Old API */}
        <div style={{ 
          padding: '2rem',
          backgroundColor: '#fef2f2',
          border: '2px solid #fecaca',
          borderRadius: '0.75rem'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#dc2626' }}>❌ API Anterior (Aninhada)</h3>
          
          <div style={{
            backgroundColor: '#7f1d1d',
            color: '#fecaca',
            padding: '1rem',
            borderRadius: '0.5rem',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Modal.Portal>
  <Modal.Overlay>
    <Modal.Content>
      {/* conteúdo */}
    </Modal.Content>
  </Modal.Overlay>
</Modal.Portal>`}
            </pre>
          </div>
          
          <ul style={{ fontSize: '0.875rem', color: '#7f1d1d', margin: 0 }}>
            <li>Overlay pai do Content</li>
            <li>Mais aninhamento HTML</li>
            <li>Overlay responsável por centralizar</li>
            <li>Lógica misturada (backdrop + layout)</li>
          </ul>
        </div>

        {/* New API */}
        <div style={{ 
          padding: '2rem',
          backgroundColor: '#f0fdf4',
          border: '2px solid #bbf7d0',
          borderRadius: '0.75rem'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#059669' }}>✅ Nova API (Irmãos)</h3>
          
          <div style={{
            backgroundColor: '#064e3b',
            color: '#a7f3d0',
            padding: '1rem',
            borderRadius: '0.5rem',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Modal.Portal>
  <Modal.Overlay />
  <Modal.Content>
    {/* conteúdo */}
  </Modal.Content>
</Modal.Portal>`}
            </pre>
          </div>
          
          <ul style={{ fontSize: '0.875rem', color: '#065f46', margin: 0 }}>
            <li>Overlay e Content são irmãos</li>
            <li>HTML mais limpo e plano</li>
            <li>Content se auto-centraliza</li>
            <li>Separação clara de responsabilidades</li>
          </ul>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ 
        backgroundColor: '#fffbeb', 
        border: '2px solid #fbbf24',
        borderRadius: '0.75rem',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#92400e' }}>🚀 Benefícios da Nova API</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#92400e', margin: '0 0 1rem 0' }}>📦 Estrutura</h4>
            <ul style={{ fontSize: '0.875rem', color: '#78350f', margin: 0 }}>
              <li>Menos aninhamento no JSX</li>
              <li>HTML mais semântico</li>
              <li>Estrutura mais plana</li>
              <li>Mais fácil de ler e manter</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#92400e', margin: '0 0 1rem 0' }}>🎯 Responsabilidades</h4>
            <ul style={{ fontSize: '0.875rem', color: '#78350f', margin: 0 }}>
              <li>Overlay = Apenas backdrop</li>
              <li>Content = Auto-centralização</li>
              <li>Separação clara de funções</li>
              <li>Mais flexível e modular</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Demo Button */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <button
          onClick={() => setShowComparison(true)}
          className="modal-trigger modal-trigger-primary"
          style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}
        >
          🎮 Ver Demo da Nova API
        </button>
      </div>

      {/* Technical Details */}
      <div style={{ 
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '0.5rem',
        padding: '2rem'
      }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#1e293b' }}>🔧 Detalhes Técnicos</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#475569', margin: '0 0 1rem 0' }}>Modal.Overlay</h4>
            <div style={{
              backgroundColor: '#1e293b',
              color: '#cbd5e1',
              padding: '1rem',
              borderRadius: '0.25rem',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '0.75rem'
            }}>
              <pre style={{ margin: 0 }}>
{`z-index: 50;
position: fixed;
inset: 0;
background: rgba(0,0,0,0.8);
// Apenas backdrop!`}
              </pre>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#475569', margin: '0 0 1rem 0' }}>Modal.Content</h4>
            <div style={{
              backgroundColor: '#1e293b',
              color: '#cbd5e1',
              padding: '1rem',
              borderRadius: '0.25rem',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '0.75rem'
            }}>
              <pre style={{ margin: 0 }}>
{`z-index: 51;
position: fixed;
top: 50%; left: 50%;
transform: translate(-50%,-50%);
// Auto-centralizado!`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <Modal.Root open={showComparison} onOpenChange={setShowComparison}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content className="modal-content-large">
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>🎯 Demo da Nova API (Irmãos)</Modal.Title>
              <Modal.Description>
                Este modal está usando a nova API onde Overlay e Content são elementos irmãos!
              </Modal.Description>
            </Modal.Header>
            
            <Modal.Body>
              <div style={{ 
                backgroundColor: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                <h5 style={{ margin: '0 0 1rem 0', color: '#1e40af' }}>✨ Estrutura Atual do Modal:</h5>
                
                <div style={{
                  backgroundColor: '#1e40af',
                  color: '#dbeafe',
                  padding: '1rem',
                  borderRadius: '0.25rem',
                  fontFamily: 'Monaco, Consolas, monospace',
                  fontSize: '0.875rem'
                }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Modal.Portal>
  <Modal.Overlay />          {/* Backdrop irmão */}
  <Modal.Content>            {/* Content irmão */}
    <Modal.Close />
    <Modal.Header>
      <Modal.Title>...</Modal.Title>
      <Modal.Description>...</Modal.Description>
    </Modal.Header>
    <Modal.Body>
      {/* Este conteúdo */}
    </Modal.Body>
  </Modal.Content>
</Modal.Portal>`}
                  </pre>
                </div>
              </div>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  backgroundColor: '#fef3c7',
                  padding: '1rem',
                  borderRadius: '0.25rem'
                }}>
                  <h6 style={{ margin: '0 0 0.5rem 0', color: '#92400e' }}>🎭 Overlay (Backdrop)</h6>
                  <ul style={{ fontSize: '0.75rem', color: '#78350f', margin: 0 }}>
                    <li>Z-index: 50</li>
                    <li>Cobre toda a tela</li>
                    <li>Click fecha modal</li>
                    <li>Blur/escuro</li>
                  </ul>
                </div>
                
                <div style={{
                  backgroundColor: '#ecfdf5',
                  padding: '1rem',
                  borderRadius: '0.25rem'
                }}>
                  <h6 style={{ margin: '0 0 0.5rem 0', color: '#065f46' }}>📦 Content (Modal)</h6>
                  <ul style={{ fontSize: '0.75rem', color: '#047857', margin: 0 }}>
                    <li>Z-index: 51</li>
                    <li>Auto-centralizado</li>
                    <li>Scroll interno</li>
                    <li>Focus trap</li>
                  </ul>
                </div>
              </div>
              
              <div style={{
                backgroundColor: '#f3f4f6',
                padding: '1rem',
                borderRadius: '0.25rem',
                textAlign: 'center'
              }}>
                <strong style={{ color: '#374151' }}>
                  🎉 Resultado: API mais limpa, mesma funcionalidade!
                </strong>
              </div>
            </Modal.Body>
            
            <Modal.Footer>
              <button
                onClick={() => setShowComparison(false)}
                className="modal-trigger modal-trigger-primary"
              >
                Perfeito! Entendi a Nova API
              </button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  )
} 