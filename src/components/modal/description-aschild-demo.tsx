import { useState } from 'react'
import { Modal } from './index'
import './modal.css'

/**
 * Demo específico para ModalDescription AsChild
 * 
 * Mostra diferentes formas de customizar a description usando asChild
 */

export function DescriptionAsChildDemo() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto', 
      fontFamily: 'system-ui'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0, color: '#1f2937' }}>📝 Modal.Description AsChild Demo</h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
          Veja diferentes formas de customizar a description do modal
        </p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {/* Modal com description padrão */}
        <button 
          onClick={() => setModal1(true)}
          style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '2px solid #e5e7eb',
            backgroundColor: '#f9fafb',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          📄 Description Padrão
          <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>
            Elemento &lt;p&gt; normal
          </div>
        </button>

        {/* Modal com description estilizada */}
        <button 
          onClick={() => setModal2(true)}
          style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '2px solid #fbbf24',
            backgroundColor: '#fefce8',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          🎨 Description Estilizada
          <div style={{ fontSize: '0.75rem', color: '#92400e', marginTop: '0.5rem' }}>
            DIV com bordas e cores
          </div>
        </button>

        {/* Modal com description como card */}
        <button 
          onClick={() => setModal3(true)}
          style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '2px solid #10b981',
            backgroundColor: '#ecfdf5',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          💳 Description Card
          <div style={{ fontSize: '0.75rem', color: '#065f46', marginTop: '0.5rem' }}>
            Section como card
          </div>
        </button>
      </div>

      {/* Modal 1: Description padrão */}
      <Modal.Root open={modal1} onOpenChange={setModal1}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>Modal com Description Padrão</Modal.Title>
              <Modal.Description>
                Esta é uma description padrão usando o elemento &lt;p&gt; normal.
                Funciona perfeitamente para casos simples onde você só precisa de texto.
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <div style={{
                backgroundColor: '#f3f4f6',
                padding: '1rem',
                borderRadius: '0.25rem',
                fontSize: '0.875rem'
              }}>
                <strong>🔧 Como está renderizado:</strong>
                <pre style={{ 
                  margin: '0.5rem 0 0 0',
                  fontFamily: 'Monaco, Consolas, monospace',
                  fontSize: '0.75rem'
                }}>
{`<p id="description-id" class="modal-description">
  Esta é uma description padrão...
</p>`}
                </pre>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Modal 2: Description estilizada */}
      <Modal.Root open={modal2} onOpenChange={setModal2}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>Modal com Description Estilizada</Modal.Title>
              <Modal.Description asChild>
                <div style={{
                  backgroundColor: '#fef3c7',
                  border: '2px solid #fbbf24',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  color: '#92400e',
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}>
                  ✨ Esta description está usando <strong>asChild</strong> para renderizar como DIV!
                  <br />
                  Agora ela tem bordas coloridas, background e estilo personalizado.
                </div>
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <div style={{
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                padding: '1rem',
                borderRadius: '0.25rem',
                fontSize: '0.875rem'
              }}>
                <strong>🔧 Como está renderizado:</strong>
                <pre style={{ 
                  margin: '0.5rem 0 0 0',
                  fontFamily: 'Monaco, Consolas, monospace',
                  fontSize: '0.75rem',
                  color: '#166534'
                }}>
{`<div 
  id="description-id" 
  class="modal-description"
  style="background: #fef3c7; border: 2px solid #fbbf24; ..."
>
  ✨ Esta description está usando asChild...
</div>`}
                </pre>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Modal 3: Description como card */}
      <Modal.Root open={modal3} onOpenChange={setModal3}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>Modal com Description Card</Modal.Title>
              <Modal.Description asChild>
                <section style={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  margin: '0.5rem 0'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem'
                    }}>
                      💳
                    </div>
                    <div>
                      <h4 style={{ margin: 0, color: '#1f2937' }}>Description em formato Card</h4>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#6b7280' }}>
                        Com ícone e layout estruturado
                      </p>
                    </div>
                  </div>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '0.875rem', 
                    color: '#374151',
                    lineHeight: '1.5'
                  }}>
                    Esta description usa <code>asChild</code> para renderizar como uma <strong>section</strong>,
                    criando um layout de card completo com ícone, título e conteúdo estruturado.
                  </p>
                </section>
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <div style={{
                backgroundColor: '#f0f9ff',
                border: '1px solid #0ea5e9',
                padding: '1rem',
                borderRadius: '0.25rem',
                fontSize: '0.875rem'
              }}>
                <strong>🔧 Como está renderizado:</strong>
                <pre style={{ 
                  margin: '0.5rem 0 0 0',
                  fontFamily: 'Monaco, Consolas, monospace',
                  fontSize: '0.75rem',
                  color: '#0c4a6e'
                }}>
{`<section 
  id="description-id" 
  class="modal-description"
  style="background: white; border: 1px solid #e5e7eb; ..."
>
  <div style="display: flex; align-items: center; ...">
    <!-- Ícone e título -->
  </div>
  <p>Esta description usa asChild...</p>
</section>`}
                </pre>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Benefícios */}
      <div style={{ 
        backgroundColor: '#f0fdf4', 
        border: '2px solid #10b981',
        borderRadius: '0.75rem',
        padding: '2rem',
        marginTop: '2rem'
      }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#065f46' }}>
          🎯 Casos de Uso para Modal.Description AsChild
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div>
            <h4 style={{ color: '#047857', margin: '0 0 0.5rem 0' }}>✅ Quando usar AsChild</h4>
            <ul style={{ margin: 0, fontSize: '0.875rem', color: '#065f46' }}>
              <li>Description com estilo visual especial</li>
              <li>Layout estruturado (ícones, cards)</li>
              <li>Integração com design system</li>
              <li>Tipografia customizada</li>
              <li>Conteúdo semântico específico</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#047857', margin: '0 0 0.5rem 0' }}>📄 Quando usar padrão</h4>
            <ul style={{ margin: 0, fontSize: '0.875rem', color: '#065f46' }}>
              <li>Texto simples e direto</li>
              <li>Sem necessidade de estilo especial</li>
              <li>Conformidade com HTML semântico</li>
              <li>Prototipagem rápida</li>
              <li>Casos básicos de uso</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 