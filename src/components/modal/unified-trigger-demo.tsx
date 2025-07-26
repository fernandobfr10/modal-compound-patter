import { useState } from 'react'
import { Modal } from './index'
import './modal.css'

/**
 * Demo do ModalTrigger Unificado
 * 
 * Mostra como o mesmo componente ModalTrigger funciona tanto
 * dentro quanto fora do contexto Modal.Root
 */

export function UnifiedTriggerDemo() {
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1000px', 
      margin: '0 auto', 
      fontFamily: 'system-ui'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ margin: 0, color: '#1f2937' }}>🔄 ModalTrigger Unificado</h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem', fontSize: '1.125rem' }}>
          Um único componente que funciona em qualquer contexto!
        </p>
      </header>

      {/* Comparação de APIs */}
      <div style={{ 
        backgroundColor: '#f0fdf4', 
        border: '2px solid #10b981',
        borderRadius: '0.75rem',
        padding: '2rem',
        marginBottom: '3rem'
      }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#065f46' }}>🎯 API Simplificada</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#b91c1c', margin: '0 0 1rem 0' }}>❌ Antes (API confusa - REMOVIDO)</h4>
            <div style={{
              backgroundColor: '#7f1d1d',
              color: '#fecaca',
              padding: '1rem',
              borderRadius: '0.25rem',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '0.75rem'
            }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`// Dentro do contexto
<Modal.Root>
  <Modal.Trigger>Interno</Modal.Trigger>
</Modal.Root>

// Fora do contexto - ❌ REMOVIDO!
<Modal.ExternalTrigger 
  onOpenChange={setOpen}
>
  Externo
</Modal.ExternalTrigger>

// Qual usar? Confuso! 😵`}
              </pre>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#059669', margin: '0 0 1rem 0' }}>✅ Agora (API clara)</h4>
            <div style={{
              backgroundColor: '#064e3b',
              color: '#a7f3d0',
              padding: '1rem',
              borderRadius: '0.25rem',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '0.75rem'
            }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`// Dentro do contexto
<Modal.Root>
  <Modal.Trigger>Interno</Modal.Trigger>
</Modal.Root>

// Fora do contexto
<Modal.Trigger onOpenChange={setOpen}>
  Externo
</Modal.Trigger>

// Sempre Modal.Trigger! 🎯`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Demos Interativos */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#1f2937' }}>🧪 Demos Interativos</h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem'
        }}>
          {/* Demo 1: Trigger Interno */}
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#1e293b' }}>🏠 Trigger Interno</h4>
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.875rem', color: '#64748b' }}>
              Usado dentro do Modal.Root (contexto disponível)
            </p>
            
            <Modal.Root>
              <Modal.Trigger className="modal-trigger-primary">
                Abrir Modal Interno
              </Modal.Trigger>
              
              <Modal.Portal>
                <Modal.Overlay />
                <Modal.Content>
                  <Modal.Close />
                  <Modal.Header>
                    <Modal.Title>Modal com Trigger Interno</Modal.Title>
                    <Modal.Description>
                      Este trigger está dentro do Modal.Root e usa o contexto automaticamente.
                    </Modal.Description>
                  </Modal.Header>
                  <Modal.Body>
                    <div style={{
                      backgroundColor: '#f0f9ff',
                      padding: '1rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem'
                    }}>
                      <strong>🔧 Como funciona:</strong>
                      <ul style={{ margin: '0.5rem 0', textAlign: 'left' }}>
                        <li>Modal.Trigger detecta que está dentro do contexto</li>
                        <li>Usa automaticamente <code>context.onOpenChange</code></li>
                        <li>Não precisa da prop <code>onOpenChange</code></li>
                      </ul>
                    </div>
                  </Modal.Body>
                </Modal.Content>
              </Modal.Portal>
            </Modal.Root>
          </div>

          {/* Demo 2: Trigger Externo */}
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#fefce8',
            border: '1px solid #fbbf24',
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#92400e' }}>🌍 Trigger Externo</h4>
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.875rem', color: '#a16207' }}>
              Usado fora do Modal.Root (sem contexto)
            </p>
            
            <Modal.Trigger 
              onOpenChange={setModal2}
              className="modal-trigger"
              style={{ 
                backgroundColor: "#fbbf24",
                borderColor: "#fbbf24",
                color: "#92400e"
              }}
            >
              Abrir Modal Externo
            </Modal.Trigger>
          </div>

          {/* Demo 3: Trigger AsChild */}
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#ecfdf5',
            border: '1px solid #10b981',
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#065f46' }}>🎭 Trigger AsChild</h4>
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.875rem', color: '#047857' }}>
              Com elemento customizado
            </p>
            
            <Modal.Trigger 
              asChild
              onOpenChange={setModal3}
            >
              <div style={{
                background: 'linear-gradient(45deg, #10b981, #059669)',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '600',
                display: 'inline-block'
              }}>
                🚀 Trigger Customizado
              </div>
            </Modal.Trigger>
          </div>
        </div>
      </div>

      {/* Modal Externo */}
      <Modal.Root open={modal2} onOpenChange={setModal2}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>Modal com Trigger Externo</Modal.Title>
              <Modal.Description>
                Este modal foi aberto por um trigger que está FORA do Modal.Root.
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <div style={{
                backgroundColor: '#fef3c7',
                border: '1px solid #fbbf24',
                padding: '1rem',
                borderRadius: '0.25rem',
                fontSize: '0.875rem'
              }}>
                <strong>🔧 Como funciona:</strong>
                <ul style={{ margin: '0.5rem 0', textAlign: 'left' }}>
                  <li>Modal.Trigger detecta que está fora do contexto</li>
                  <li>Usa a prop <code>onOpenChange</code> fornecida</li>
                  <li>Funciona perfeitamente mesmo sem contexto</li>
                </ul>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Modal AsChild */}
      <Modal.Root open={modal3} onOpenChange={setModal3}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>Modal com Trigger AsChild</Modal.Title>
              <Modal.Description>
                Este modal foi aberto por um trigger customizado usando asChild.
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <div style={{
                backgroundColor: '#f0fdf4',
                border: '1px solid #10b981',
                padding: '1rem',
                borderRadius: '0.25rem',
                fontSize: '0.875rem'
              }}>
                <strong>🎭 AsChild + Trigger Unificado:</strong>
                <ul style={{ margin: '0.5rem 0', textAlign: 'left' }}>
                  <li>Combina flexibilidade do asChild</li>
                  <li>Com praticidade do trigger unificado</li>
                  <li>Uma única API para todos os casos</li>
                </ul>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Guia de Migração */}
      <div style={{ 
        backgroundColor: '#f0f9ff', 
        border: '2px solid #0ea5e9',
        borderRadius: '0.75rem',
        padding: '2rem'
      }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#0c4a6e' }}>🗑️ Limpeza Concluída</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: '#0369a1', margin: '0 0 1rem 0' }}>✅ O que foi removido</h4>
          
          <div style={{
            backgroundColor: '#0c4a6e',
            color: '#bae6fd',
            padding: '1rem',
            borderRadius: '0.25rem',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`// ❌ Removido completamente
<Modal.ExternalTrigger onOpenChange={setOpen}>
  Trigger
</Modal.ExternalTrigger>

// ✅ Use apenas isso agora
<Modal.Trigger onOpenChange={setOpen}>
  Trigger
</Modal.Trigger>`}
            </pre>
          </div>
        </div>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '1rem',
          borderRadius: '0.25rem',
          fontSize: '0.875rem'
        }}>
          <strong>💡 Benefícios da limpeza:</strong>
          <ul style={{ margin: '0.5rem 0' }}>
            <li>✅ Bundle menor (menos código desnecessário)</li>
            <li>✅ API mais limpa (menos opções confusas)</li>
            <li>✅ Documentação simplificada</li>
            <li>✅ Menos manutenção (menos componentes)</li>
            <li>✅ Developer Experience melhorada</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 