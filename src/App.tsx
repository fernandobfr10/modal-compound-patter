import { useState } from "react"
import { Modal } from "./components/modal"
import "./components/modal/modal.css"
import { TextDemo } from "./components/text/text-demo"

export const App = () => {
  const [isTextDemoOpen, setIsTextDemoOpen] = useState(false)

  return (
    <div className="app" style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>🎭 Component Demos</h1>
      
      <div style={{ marginBottom: "2rem" }}>
        <button 
          onClick={() => setIsTextDemoOpen(true)}
          className="modal-trigger"
          style={{ 
            backgroundColor: "#8b5cf6",
            borderColor: "#8b5cf6",
            color: "white",
            marginBottom: "0.5rem"
          }}
        >
          📝 Text Component (Radix UI)
        </button>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h3>🚀 Teste Rápido - Modal + Text Component:</h3>
        
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          {/* Trigger interno (dentro do contexto) */}
          <Modal.Root>
            <Modal.Trigger className="modal-trigger-secondary">
              Modal Simples
            </Modal.Trigger>
            
            <Modal.Portal>
              <Modal.Overlay />
              <Modal.Content>
                <Modal.Close />
                <Modal.Header>
                  <Modal.Title>Modal de Teste</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Este é um modal simples para testar a integração com o componente Text!</p>
                </Modal.Body>
              </Modal.Content>
            </Modal.Portal>
          </Modal.Root>
        </div>

        <div style={{
          backgroundColor: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "0.875rem"
        }}>
          <strong>🎯 Text Component:</strong> Agora temos um componente Text completo baseado no Radix UI 
          com suporte a <code>trim</code>, <code>wrap</code>, escala 1-9, e default <code>as="p"</code>!
        </div>
      </div>

      {/* Demo Text Component */}
      <Modal.Root open={isTextDemoOpen} onOpenChange={setIsTextDemoOpen}>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content className="modal-content-large">
            <Modal.Close />
            <Modal.Header>
              <Modal.Title>📝 Text Component Demo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TextDemo />
            </Modal.Body>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  )
}