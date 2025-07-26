import { Modal } from './index'
import './modal.css'

/**
 * AsChild Demo: Demonstrates the asChild functionality
 * 
 * Shows how to use asChild prop to render custom elements
 * while keeping the component's behavior and functionality.
 */

export function AsChildDemo() {

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1000px', 
      margin: '0 auto', 
      fontFamily: 'system-ui'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ margin: 0, color: '#1f2937' }}>🎭 AsChild Functionality Demo</h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem', fontSize: '1.125rem' }}>
          Render custom elements while keeping component behavior - just like Radix UI!
        </p>
      </header>

      {/* Feature Explanation */}
      <div style={{ 
        backgroundColor: '#f0f9ff', 
        border: '2px solid #0ea5e9',
        borderRadius: '0.75rem',
        padding: '2rem',
        marginBottom: '3rem'
      }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#0c4a6e' }}>🎯 O que é AsChild?</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#0369a1', margin: '0 0 1rem 0' }}>❌ Sem AsChild (Padrão)</h4>
            <div style={{
              backgroundColor: '#0c4a6e',
              color: '#bae6fd',
              padding: '1rem',
              borderRadius: '0.5rem',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '0.875rem',
              marginBottom: '1rem'
            }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Modal.Trigger>
  Click me
</Modal.Trigger>

// Renderiza:
<button class="modal-trigger">
  Click me
</button>`}
              </pre>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#059669', margin: '0 0 1rem 0' }}>✅ Com AsChild</h4>
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
{`<Modal.Trigger asChild>
  <div className="custom-trigger">
    Click me
  </div>
</Modal.Trigger>

// Renderiza:
<div class="modal-trigger custom-trigger">
  Click me
</div>`}
              </pre>
            </div>
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: '#ecfdf5',
          padding: '1rem',
          borderRadius: '0.25rem',
          marginTop: '1rem'
        }}>
          <strong style={{ color: '#065f46' }}>✨ Resultado:</strong> Seu elemento customizado + comportamento do componente!
        </div>
      </div>

      {/* Demo Buttons */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {/* Basic Modal */}
        <div style={{ 
          padding: '1.5rem',
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '0.5rem',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#1e293b' }}>🔹 Modal Padrão</h3>
          <p style={{ margin: '0 0 1.5rem 0', color: '#64748b', fontSize: '0.875rem' }}>
            Componentes com elementos padrão (sem asChild)
          </p>
          
          <Modal.Root>
            <Modal.Trigger className="modal-trigger-primary">
              Trigger Padrão (Button)
            </Modal.Trigger>
            
            <Modal.Portal>
              <Modal.Overlay />
              <Modal.Content>
                <Modal.Close />
                                 <Modal.Header>
                   <Modal.Title>
                     Título Padrão (H2)
                   </Modal.Title>
                   <Modal.Description>
                     Description padrão (P)
                   </Modal.Description>
                 </Modal.Header>
                
                <Modal.Body>
                  <div style={{ 
                    backgroundColor: '#f1f5f9',
                    padding: '1rem',
                    borderRadius: '0.25rem',
                    marginBottom: '1rem'
                  }}>
                                         <h5 style={{ margin: '0 0 0.5rem 0' }}>📦 Elementos Renderizados:</h5>
                     <ul style={{ margin: 0, fontSize: '0.875rem', textAlign: 'left' }}>
                       <li><code>{'<button>'}</code> para Trigger</li>
                       <li><code>{'<h2>'}</code> para Title</li>
                       <li><code>{'<p>'}</code> para Description</li>
                       <li><code>{'<div>'}</code> para Body</li>
                     </ul>
                  </div>
                  
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    Elementos padrão com classes e comportamentos aplicados automaticamente.
                  </p>
                </Modal.Body>
              </Modal.Content>
            </Modal.Portal>
          </Modal.Root>
        </div>

        {/* Custom Modal */}
        <div style={{ 
          padding: '1.5rem',
          backgroundColor: '#fefce8',
          border: '1px solid #fbbf24',
          borderRadius: '0.5rem',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#92400e' }}>⚡ Modal Customizado</h3>
          <p style={{ margin: '0 0 1.5rem 0', color: '#a16207', fontSize: '0.875rem' }}>
            Componentes com elementos customizados (usando asChild)
          </p>
          
          <Modal.Root>
            <Modal.Trigger asChild>
              <div 
                style={{
                  background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  display: 'inline-block',
                  fontWeight: '600',
                  transform: 'translateY(0)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                🚀 Trigger Customizado (Div)
              </div>
            </Modal.Trigger>
            
                             <Modal.Portal>
                   <Modal.Overlay />
                   <Modal.Content>
                     <Modal.Close asChild>
                       <div style={{
                         position: 'absolute',
                         top: '12px',
                         right: '12px',
                         width: '28px',
                         height: '28px',
                         borderRadius: '50%',
                         background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                         color: 'white',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         cursor: 'pointer',
                         fontSize: '14px',
                         fontWeight: 'bold',
                         border: 'none'
                       }}>
                         ✕
                       </div>
                     </Modal.Close>
                     <Modal.Header>
                       <Modal.Title asChild>
                         <h1 style={{
                           background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                           backgroundClip: 'text',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           fontSize: '2rem',
                           fontWeight: 'bold',
                           margin: 0
                         }}>
                                                  🎨 Título Customizado (H1)
                     </h1>
                   </Modal.Title>
                   <Modal.Description asChild>
                     <div style={{
                       color: '#a16207',
                       fontSize: '0.875rem',
                       fontStyle: 'italic',
                       padding: '0.75rem',
                       backgroundColor: 'rgba(254, 243, 199, 0.5)',
                       borderRadius: '0.375rem',
                       border: '1px dashed #f59e0b',
                       textAlign: 'center'
                     }}>
                       ✨ Description customizada (DIV) com estilo especial!
                     </div>
                   </Modal.Description>
                 </Modal.Header>
                
                <Modal.Body asChild>
                  <section style={{
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
                    padding: '1.5rem',
                    borderRadius: '0.5rem',
                    border: '2px dashed #f59e0b'
                  }}>
                    <div style={{ marginBottom: '1rem' }}>
                                             <h5 style={{ margin: '0 0 0.5rem 0', color: '#92400e' }}>🎭 Elementos Customizados:</h5>
                       <ul style={{ margin: 0, fontSize: '0.875rem', textAlign: 'left', color: '#a16207' }}>
                         <li><code>{'<div>'}</code> para Trigger (com gradiente)</li>
                         <li><code>{'<div>'}</code> para Close (botão circular)</li>
                         <li><code>{'<h1>'}</code> para Title (com gradiente de texto)</li>
                         <li><code>{'<div>'}</code> para Description (DIV estilizado)</li>
                         <li><code>{'<section>'}</code> para Body (com background especial)</li>
                       </ul>
                    </div>
                    
                    <div style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      padding: '1rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem'
                    }}>
                      <strong>✨ Magia do AsChild:</strong> Todos os elementos mantêm o comportamento original 
                      (onClick, classes, IDs para acessibilidade), mas renderizam como elementos customizados!
                    </div>
                  </section>
                </Modal.Body>
              </Modal.Content>
            </Modal.Portal>
          </Modal.Root>
        </div>
      </div>

      {/* Code Examples */}
      <div style={{ 
        backgroundColor: '#f3f4f6', 
        padding: '2rem', 
        borderRadius: '0.75rem',
        marginBottom: '2rem'
      }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#374151' }}>💻 Exemplos de Código</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#1f2937', margin: '0 0 1rem 0' }}>🔹 Trigger Customizado</h4>
            <div style={{
              backgroundColor: '#1f2937',
              color: '#f9fafb',
              padding: '1rem',
              borderRadius: '0.25rem',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '0.75rem',
              overflow: 'auto'
            }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Modal.Trigger asChild>
  <div className="custom-button">
    Meu Botão Customizado
  </div>
</Modal.Trigger>

// ou com link
<Modal.Trigger asChild>
  <a href="#" className="link-trigger">
    Abrir Modal
  </a>
</Modal.Trigger>`}
              </pre>
            </div>
          </div>
          
          <div>
                         <h4 style={{ color: '#1f2937', margin: '0 0 1rem 0' }}>🔸 Title e Description</h4>
             <div style={{
               backgroundColor: '#1f2937',
               color: '#f9fafb',
               padding: '1rem',
               borderRadius: '0.25rem',
               fontFamily: 'Monaco, Consolas, monospace',
               fontSize: '0.75rem',
               overflow: 'auto'
             }}>
               <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
 {`<Modal.Title asChild>
   <h1 className="custom-title">
     Título Grande
   </h1>
 </Modal.Title>
 
 <Modal.Description asChild>
   <div className="styled-description">
     📝 Description customizada
   </div>
 </Modal.Description>`}
               </pre>
             </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ 
        backgroundColor: '#ecfdf5', 
        border: '2px solid #10b981',
        borderRadius: '0.75rem',
        padding: '2rem'
      }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#065f46' }}>🎯 Benefícios do AsChild</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎨</div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#047857' }}>Flexibilidade Total</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#065f46' }}>
              Use qualquer elemento HTML ou componente React mantendo o comportamento
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔧</div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#047857' }}>Comportamento Preservado</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#065f46' }}>
              Todos os event handlers, classes e acessibilidade são mantidos
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#047857' }}>API Limpa</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#065f46' }}>
              Uma prop simples transforma completamente a renderização
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 