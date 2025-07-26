import { useState } from "react"
import { Modal } from "./components/modal"
import { AsChildDemo } from "./components/modal/as-child-demo"
import { DescriptionAsChildDemo } from "./components/modal/description-aschild-demo"
import "./components/modal/modal.css"

export const App = () => {
  const [isAsChildDemoOpen, setIsAsChildDemoOpen] = useState(false)
  const [isCloseAsChildOpen, setIsCloseAsChildOpen] = useState(false)
  const [isDescriptionDemoOpen, setIsDescriptionDemoOpen] = useState(false)

  return (
    <div className="app" style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>🎭 Modal AsChild Demo</h1>
      
      <div style={{ marginBottom: "2rem" }}>
        <button 
          onClick={() => setIsAsChildDemoOpen(true)}
          className="modal-trigger modal-trigger-primary"
          style={{ marginRight: "1rem" }}
        >
          Ver Demo AsChild Completo
        </button>

        <button 
          onClick={() => setIsCloseAsChildOpen(true)}
          className="modal-trigger modal-trigger-secondary"
          style={{ marginRight: "1rem" }}
        >
          🆕 Demo Close AsChild
        </button>

        <button 
          onClick={() => setIsDescriptionDemoOpen(true)}
          className="modal-trigger"
          style={{ 
            backgroundColor: "#fbbf24",
            borderColor: "#fbbf24",
            color: "#92400e"
          }}
        >
          📝 Demo Description AsChild
        </button>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h3>🚀 Teste Rápido - AsChild em Ação:</h3>
        
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {/* Trigger padrão */}
          <Modal.Root>
            <Modal.Trigger className="modal-trigger-secondary">
              Trigger Padrão (Button)
            </Modal.Trigger>
            
            <Modal.Portal>
              <Modal.Overlay />
              <Modal.Content>
                <Modal.Close />
                <Modal.Header>
                  <Modal.Title>Modal com Elementos Padrão</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Este modal usa todos os elementos padrão sem asChild.</p>
                </Modal.Body>
              </Modal.Content>
            </Modal.Portal>
          </Modal.Root>

          {/* Trigger customizado com asChild */}
          <Modal.Root>
            <Modal.Trigger asChild>
              <div style={{
                background: "linear-gradient(45deg, #3b82f6, #1d4ed8)",
                color: "white",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                fontWeight: "600",
                display: "inline-block"
              }}>
                🎨 Trigger AsChild (Div)
              </div>
            </Modal.Trigger>
            
            <Modal.Portal>
              <Modal.Overlay />
              <Modal.Content>
                <Modal.Close />
                <Modal.Header>
                  <Modal.Title asChild>
                    <h1 style={{
                      background: "linear-gradient(45deg, #3b82f6, #1d4ed8)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "1.5rem",
                      margin: 0
                    }}>
                      ✨ Título AsChild (H1)
                    </h1>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body asChild>
                  <section style={{
                    background: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border: "2px dashed #3b82f6"
                  }}>
                    <p style={{ margin: 0 }}>
                      Este modal usa <strong>asChild</strong> nos componentes Trigger, Title e Body!
                    </p>
                  </section>
                </Modal.Body>
              </Modal.Content>
            </Modal.Portal>
          </Modal.Root>
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
              <Modal.Title>🆕 Modal Close AsChild Demo</Modal.Title>
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
                  📝 Description customizada com asChild - agora usando um DIV estilizado!
                </div>
              </Modal.Description>
            </Modal.Header>
            
            <Modal.Body>
              <div style={{ 
                backgroundColor: "#fef2f2", 
                border: "2px solid #fecaca",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                marginBottom: "1rem"
              }}>
                <h4 style={{ margin: "0 0 1rem 0", color: "#b91c1c" }}>🎯 Modal.Close e Description AsChild</h4>
                
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#dc2626" }}>✨ O que mudou:</strong>
                  <ul style={{ margin: "0.5rem 0", fontSize: "0.875rem", color: "#7f1d1d" }}>
                    <li>Agora <code>Modal.Close</code> e <code>Modal.Description</code> também suportam <code>asChild</code></li>
                    <li>Botão customizado em formato circular com gradiente</li>
                    <li>Description como DIV estilizado ao invés de parágrafo</li>
                    <li>Animação de hover personalizada</li>
                    <li>Mantém toda a funcionalidade e acessibilidade</li>
                  </ul>
                </div>
                
                <div style={{
                  backgroundColor: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: "0.25rem",
                  padding: "1rem",
                  fontSize: "0.875rem"
                }}>
                  <strong style={{ color: "#15803d" }}>💡 Exemplo de código:</strong>
                  <pre style={{ 
                    margin: "0.5rem 0 0 0", 
                    fontFamily: "Monaco, Consolas, monospace",
                    fontSize: "0.75rem",
                    color: "#166534",
                    whiteSpace: "pre-wrap"
                  }}>
{`<Modal.Close asChild>
  <div className="custom-close-button">
    ✕
  </div>
</Modal.Close>

<Modal.Description asChild>
  <div className="styled-description">
    Descrição customizada
  </div>
</Modal.Description>`}
                  </pre>
                </div>
              </div>
              
              <div style={{ 
                backgroundColor: "#f0f9ff", 
                padding: "1rem", 
                borderRadius: "0.25rem",
                border: "1px solid #0ea5e9"
              }}>
                <strong style={{ color: "#0c4a6e" }}>🎉 Todos os componentes com AsChild:</strong>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr 1fr", 
                  gap: "0.5rem", 
                  marginTop: "0.5rem",
                  fontSize: "0.875rem"
                }}>
                  <div>✅ Modal.Trigger</div>
                  <div>✅ Modal.ExternalTrigger</div>
                  <div>✅ Modal.Close</div>
                  <div>✅ Modal.Title</div>
                  <div>✅ Modal.Description</div>
                  <div>✅ Modal.Body</div>
                  <div style={{ gridColumn: "1 / -1", fontWeight: "600", color: "#059669" }}>
                    🎯 6 componentes com AsChild!
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
    </div>
  )
}