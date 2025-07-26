import { useState } from "react"
import { Modal } from "./components/modal"
import { AsChildDemo } from "./components/modal/as-child-demo"
import { DescriptionAsChildDemo } from "./components/modal/description-aschild-demo"
import { HtmlValidationFixDemo } from "./components/modal/html-validation-fix-demo"
import "./components/modal/modal.css"
import { UnifiedTriggerDemo } from "./components/modal/unified-trigger-demo"

export const App = () => {
  const [isAsChildDemoOpen, setIsAsChildDemoOpen] = useState(false)
  const [isCloseAsChildOpen, setIsCloseAsChildOpen] = useState(false)
  const [isDescriptionDemoOpen, setIsDescriptionDemoOpen] = useState(false)
  const [isHtmlFixDemoOpen, setIsHtmlFixDemoOpen] = useState(false)
  const [isUnifiedTriggerOpen, setIsUnifiedTriggerOpen] = useState(false)

  return (
    <div className="app" style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>🎭 Modal AsChild Demo</h1>
      
      <div style={{ marginBottom: "2rem" }}>
        <button 
          onClick={() => setIsAsChildDemoOpen(true)}
          className="modal-trigger modal-trigger-primary"
          style={{ marginRight: "1rem", marginBottom: "0.5rem" }}
        >
          Ver Demo AsChild Completo
        </button>

        <button 
          onClick={() => setIsCloseAsChildOpen(true)}
          className="modal-trigger modal-trigger-secondary"
          style={{ marginRight: "1rem", marginBottom: "0.5rem" }}
        >
          🆕 Demo Close AsChild
        </button>

        <button 
          onClick={() => setIsDescriptionDemoOpen(true)}
          className="modal-trigger"
          style={{ 
            backgroundColor: "#fbbf24",
            borderColor: "#fbbf24",
            color: "#92400e",
            marginRight: "1rem",
            marginBottom: "0.5rem"
          }}
        >
          📝 Demo Description AsChild
        </button>

        <button 
          onClick={() => setIsHtmlFixDemoOpen(true)}
          className="modal-trigger"
          style={{ 
            backgroundColor: "#ef4444",
            borderColor: "#ef4444",
            color: "white",
            marginRight: "1rem",
            marginBottom: "0.5rem"
          }}
        >
          🚨 Corrigir Erros HTML
        </button>

        <button 
          onClick={() => setIsUnifiedTriggerOpen(true)}
          className="modal-trigger"
          style={{ 
            backgroundColor: "#10b981",
            borderColor: "#10b981",
            color: "white",
            marginBottom: "0.5rem"
          }}
        >
          🔄 Trigger Unificado
        </button>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h3>🚀 Teste Rápido - Trigger Unificado:</h3>
        
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          {/* Trigger interno (dentro do contexto) */}
          <Modal.Root>
            <Modal.Trigger className="modal-trigger-secondary">
              Trigger Interno
            </Modal.Trigger>
            
            <Modal.Portal>
              <Modal.Overlay />
              <Modal.Content>
                <Modal.Close />
                <Modal.Header>
                  <Modal.Title>Modal com Trigger Interno</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Este trigger está <strong>dentro</strong> do Modal.Root e usa o contexto automaticamente!</p>
                </Modal.Body>
              </Modal.Content>
            </Modal.Portal>
          </Modal.Root>

          {/* Trigger externo (fora do contexto) - NOVO! */}
          <Modal.Trigger 
            onOpenChange={setIsCloseAsChildOpen}
            className="modal-trigger"
            style={{ 
              backgroundColor: "#fbbf24",
              borderColor: "#fbbf24",
              color: "#92400e"
            }}
          >
            Trigger Externo (NOVO!)
          </Modal.Trigger>
        </div>

        <div style={{
          backgroundColor: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "0.875rem"
        }}>
          <strong>🎯 API Unificada:</strong> Agora você pode usar <code>Modal.Trigger</code> em qualquer lugar! 
          Se estiver dentro do <code>Modal.Root</code>, usa o contexto automaticamente. 
          Se estiver fora, basta passar <code>onOpenChange</code>.
        </div>
      </div>

      {/* Modal Close AsChild Demo */}
      <Modal.Root open={isCloseAsChildOpen} onOpenChange={setIsCloseAsChildOpen}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            {/* Close customizado com asChild */}
            <Modal.Close asChild>
              <div style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, #ef4444, #dc2626)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "none",
                fontSize: "18px",
                fontWeight: "bold",
                boxShadow: "0 2px 8px rgba(239, 68, 68, 0.3)",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)"
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(239, 68, 68, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(239, 68, 68, 0.3)"
              }}
              title="Fechar modal"
              >
                ✕
              </div>
            </Modal.Close>
            
            <Modal.Header>
              <Modal.Title>🔄 Trigger Unificado + AsChild</Modal.Title>
              <Modal.Description asChild>
                <div style={{
                  color: "#6b7280",
                  fontSize: "0.875rem",
                  fontStyle: "italic",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f9fafb",
                  borderRadius: "0.25rem",
                  border: "1px dashed #d1d5db"
                }}>
                  📝 Este modal foi aberto por um trigger <strong>externo</strong> usando a nova API unificada!
                </div>
              </Modal.Description>
            </Modal.Header>
            
            <Modal.Body>
              <div style={{ 
                backgroundColor: "#f0fdf4", 
                border: "2px solid #bbf7d0",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                marginBottom: "1rem"
              }}>
                <h4 style={{ margin: "0 0 1rem 0", color: "#047857" }}>🎉 API Unificada Funcionando!</h4>
                
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#059669" }}>✨ O que mudou:</strong>
                  <ul style={{ margin: "0.5rem 0", fontSize: "0.875rem", color: "#065f46" }}>
                    <li>Agora <code>Modal.Trigger</code> funciona em <strong>qualquer lugar</strong></li>
                    <li>Detecta automaticamente se está dentro ou fora do contexto</li>
                    <li>API mais simples: um só componente para todas as situações</li>
                    <li>Mantém compatibilidade total com <code>asChild</code></li>
                    <li>Código mais limpo sem componentes deprecated</li>
                  </ul>
                </div>
                
                <div style={{
                  backgroundColor: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  borderRadius: "0.25rem",
                  padding: "1rem",
                  fontSize: "0.875rem"
                }}>
                  <strong style={{ color: "#047857" }}>💡 Exemplo prático:</strong>
                  <pre style={{ 
                    margin: "0.5rem 0 0 0", 
                    fontFamily: "Monaco, Consolas, monospace",
                    fontSize: "0.75rem",
                    color: "#065f46",
                    whiteSpace: "pre-wrap"
                  }}>
{`// Funciona em qualquer lugar!
<Modal.Trigger onOpenChange={setOpen}>
  Abrir Modal
</Modal.Trigger>

// Com asChild também
<Modal.Trigger asChild onOpenChange={setOpen}>
  <MyCustomButton>Customizado</MyCustomButton>
</Modal.Trigger>`}
                  </pre>
                </div>
              </div>
              
              <div style={{ 
                backgroundColor: "#f0f9ff", 
                padding: "1rem", 
                borderRadius: "0.25rem",
                border: "1px solid #0ea5e9"
              }}>
                <strong style={{ color: "#0c4a6e" }}>🎯 Sistema Completo:</strong>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr 1fr", 
                  gap: "0.5rem", 
                  marginTop: "0.5rem",
                  fontSize: "0.875rem"
                }}>
                  <div>✅ Modal.Trigger (unificado)</div>
                  <div>✅ Modal.Close</div>
                  <div>✅ Modal.Title</div>
                  <div>✅ Modal.Description</div>
                  <div>✅ Modal.Body</div>
                  <div style={{ gridColumn: "1 / -1", fontWeight: "600", color: "#059669" }}>
                    🔄 API mais simples e consistente!
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Demo Modal Principal */}
      <Modal.Root open={isAsChildDemoOpen} onOpenChange={setIsAsChildDemoOpen}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content className="modal-content-large">
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>Demo AsChild Completo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AsChildDemo />
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Demo Description AsChild */}
      <Modal.Root open={isDescriptionDemoOpen} onOpenChange={setIsDescriptionDemoOpen}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content className="modal-content-large">
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>📝 Demo Description AsChild</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DescriptionAsChildDemo />
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Demo HTML Fix */}
      <Modal.Root open={isHtmlFixDemoOpen} onOpenChange={setIsHtmlFixDemoOpen}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content className="modal-content-large">
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>🚨 Corrigindo Erros de HTML</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <HtmlValidationFixDemo />
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>

      {/* Demo Trigger Unificado */}
      <Modal.Root open={isUnifiedTriggerOpen} onOpenChange={setIsUnifiedTriggerOpen}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content className="modal-content-large">
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>🔄 Demo Trigger Unificado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UnifiedTriggerDemo />
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  )
}