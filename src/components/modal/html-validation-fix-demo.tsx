import { useState } from 'react'
import { Modal } from './index'
import './modal.css'

/**
 * Demo mostrando como resolver erros de HTML inválido usando asChild
 * 
 * Demonstra o problema comum de aninhamento de elementos heading
 * e como o asChild resolve isso elegantemente.
 */

// Simulando o componente DsHeading do design system
const DsHeading = ({ type, children, className, ...props }: {
  type: 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'heading-5'
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLHeadingElement>) => {
  const getElement = (): React.ElementType => {
    switch (type) {
      case 'heading-1': return 'h1'
      case 'heading-2': return 'h2'
      case 'heading-3': return 'h3'
      case 'heading-4': return 'h4'
      case 'heading-5': return 'h5'
      default: return 'h2'
    }
  }

  const Element = getElement()
  
  return (
    <Element 
      className={`ds-heading ds-heading--${type} ${className || ''}`}
      data-testid="ds-heading-test"
      {...props}
    >
      {children}
    </Element>
  )
}

export function HtmlValidationFixDemo() {
  const [wrongWay, setWrongWay] = useState(false)
  const [rightWay, setRightWay] = useState(false)

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '900px', 
      margin: '0 auto', 
      fontFamily: 'system-ui'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ margin: 0, color: '#1f2937' }}>🚨 Corrigindo Erros de HTML Inválido</h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem', fontSize: '1.125rem' }}>
          Como usar AsChild para resolver problemas de aninhamento de elementos
        </p>
      </header>

      {/* Explicação do Problema */}
      <div style={{ 
        backgroundColor: '#fef2f2', 
        border: '2px solid #fecaca',
        borderRadius: '0.75rem',
        padding: '2rem',
        marginBottom: '3rem'
      }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#b91c1c' }}>🚨 O Problema</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <strong style={{ color: '#dc2626' }}>Erro no Console:</strong>
          <div style={{
            backgroundColor: '#7f1d1d',
            color: '#fecaca',
            padding: '1rem',
            borderRadius: '0.25rem',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '0.875rem',
            marginTop: '0.5rem'
          }}>
            In HTML, &lt;h5&gt; cannot be a child of &lt;h1&gt;.<br/>
            This will cause a hydration error.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#b91c1c', margin: '0 0 1rem 0' }}>❌ Código Problemático</h4>
            <div style={{
              backgroundColor: '#7f1d1d',
              color: '#fecaca',
              padding: '1rem',
              borderRadius: '0.25rem',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '0.75rem'
            }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Modal.Title>
  <DsHeading type="heading-5">
    Título
  </DsHeading>
</Modal.Title>

// Resultado HTML inválido:
<h1>
  <h5>Título</h5> ❌
</h1>`}
              </pre>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#059669', margin: '0 0 1rem 0' }}>✅ Solução com AsChild</h4>
            <div style={{
              backgroundColor: '#064e3b',
              color: '#a7f3d0',
              padding: '1rem',
              borderRadius: '0.25rem',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '0.75rem'
            }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Modal.Title asChild>
  <DsHeading type="heading-5">
    Título
  </DsHeading>
</Modal.Title>

// Resultado HTML válido:
<h5 id="title-id" class="...">
  Título
</h5> ✅`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Buttons */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <button 
          onClick={() => setWrongWay(true)}
          style={{
            padding: '1.5rem',
            borderRadius: '0.5rem',
            border: '2px solid #ef4444',
            backgroundColor: '#fef2f2',
            cursor: 'pointer',
            textAlign: 'center',
            color: '#b91c1c'
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>❌</div>
          <strong>Ver Problema</strong>
          <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.8 }}>
            HTML inválido (abre console)
          </div>
        </button>

        <button 
          onClick={() => setRightWay(true)}
          style={{
            padding: '1.5rem',
            borderRadius: '0.5rem',
            border: '2px solid #10b981',
            backgroundColor: '#ecfdf5',
            cursor: 'pointer',
            textAlign: 'center',
            color: '#065f46'
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
          <strong>Ver Solução</strong>
          <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.8 }}>
            HTML válido com asChild
          </div>
        </button>
      </div>

      {/* Modal Problemático */}
      <Modal.Root open={wrongWay} onOpenChange={setWrongWay}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Close />
            <Modal.Header>
              {/* ❌ PROBLEMA: Aninhamento inválido */}
              <Modal.Title>
                <DsHeading type="heading-5">
                  ⚠️ Título Problemático (H5 dentro de H1)
                </DsHeading>
              </Modal.Title>
              <Modal.Description>
                Este modal demonstra o problema. Abra o console do navegador para ver o erro!
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <div style={{
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#b91c1c' }}>🚨 Problema Detectado</h4>
                <ul style={{ margin: 0, fontSize: '0.875rem', color: '#7f1d1d' }}>
                  <li>HTML inválido: <code>&lt;h1&gt;&lt;h5&gt;...&lt;/h5&gt;&lt;/h1&gt;</code></li>
                  <li>Erro de hidratação no React</li>
                  <li>Console mostra warning</li>
                  <li>Pode quebrar SEO e acessibilidade</li>
                </ul>
                
                <div style={{
                  backgroundColor: '#7f1d1d',
                  color: '#fecaca',
                  padding: '1rem',
                  borderRadius: '0.25rem',
                  fontFamily: 'Monaco, Consolas, monospace',
                  fontSize: '0.75rem',
                  marginTop: '1rem'
                }}>
                  Inspect Element para ver: <br/>
                  &lt;h1&gt;&lt;h5&gt;Título&lt;/h5&gt;&lt;/h1&gt;
                </div>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Modal Correto */}
      <Modal.Root open={rightWay} onOpenChange={setRightWay}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Close />
            <Modal.Header>
              {/* ✅ SOLUÇÃO: AsChild */}
              <Modal.Title asChild>
                <DsHeading type="heading-5">
                  ✅ Título Correto (H5 diretamente)
                </DsHeading>
              </Modal.Title>
              <Modal.Description asChild>
                <div style={{
                  color: '#059669',
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                  padding: '0.75rem',
                  backgroundColor: '#ecfdf5',
                  borderRadius: '0.25rem',
                  border: '1px solid #bbf7d0'
                }}>
                  ✨ Description também usando asChild - HTML válido!
                </div>
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <div style={{
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#047857' }}>✅ Problema Resolvido</h4>
                <ul style={{ margin: 0, fontSize: '0.875rem', color: '#065f46' }}>
                  <li>HTML válido: <code>&lt;h5 id="title-id"&gt;...&lt;/h5&gt;</code></li>
                  <li>Sem erros de hidratação</li>
                  <li>Console limpo</li>
                  <li>SEO e acessibilidade preservados</li>
                  <li>Todas as props e comportamentos mantidos</li>
                </ul>
                
                <div style={{
                  backgroundColor: '#064e3b',
                  color: '#a7f3d0',
                  padding: '1rem',
                  borderRadius: '0.25rem',
                  fontFamily: 'Monaco, Consolas, monospace',
                  fontSize: '0.75rem',
                  marginTop: '1rem'
                }}>
                  Inspect Element para ver: <br/>
                  &lt;h5 id="title-id" class="modal-title ds-heading..."&gt;<br/>
                  &nbsp;&nbsp;Título<br/>
                  &lt;/h5&gt;
                </div>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Guia de Correção */}
      <div style={{ 
        backgroundColor: '#f0f9ff', 
        border: '2px solid #0ea5e9',
        borderRadius: '0.75rem',
        padding: '2rem'
      }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#0c4a6e' }}>🔧 Como Corrigir Seu Código</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#0369a1', margin: '0 0 1rem 0' }}>1️⃣ Identifique o Problema</h4>
            <div style={{
              backgroundColor: '#0c4a6e',
              color: '#bae6fd',
              padding: '1rem',
              borderRadius: '0.25rem',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '0.75rem'
            }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`// ❌ Problemático
<Modal.Title>
  <DsHeading type="heading-5">
    Título
  </DsHeading>
</Modal.Title>`}
              </pre>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#059669', margin: '0 0 1rem 0' }}>2️⃣ Aplique a Solução</h4>
            <div style={{
              backgroundColor: '#064e3b',
              color: '#a7f3d0',
              padding: '1rem',
              borderRadius: '0.25rem',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '0.75rem'
            }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`// ✅ Correto
<Modal.Title asChild>
  <DsHeading type="heading-5">
    Título
  </DsHeading>
</Modal.Title>`}
              </pre>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '1rem',
          borderRadius: '0.25rem',
          marginTop: '1.5rem',
          fontSize: '0.875rem'
        }}>
          <strong>🎯 O que acontece:</strong> O <code>asChild</code> faz com que o <code>Modal.Title</code> 
          renderize o <code>DsHeading</code> diretamente, ao invés de envolvê-lo em um <code>&lt;h1&gt;</code> 
          adicional. Assim você obtém HTML válido mantendo toda a funcionalidade!
        </div>
      </div>
    </div>
  )
} 