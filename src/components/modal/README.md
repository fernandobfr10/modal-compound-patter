# Modal Component - Compound Pattern Simplificado

Sistema de modal completo implementando **Compound Pattern** com **centralização automática simplificada**.

## 🚀 **NOVIDADES: Centralização + AsChild**

> ✨ **Modal.Content SEMPRE se centraliza automaticamente**  
> 🎭 **AsChild: Renderize elementos customizados**  
> 🎯 **Zero JavaScript para posicionamento**  
> 🧹 **Código mais limpo e simples**

## ✨ **Características Principais**

- **🧩 Compound Pattern**: API composável e flexível
- **🎨 Classes Helper**: Função `cn()` para mesclar classes inteligentemente
- **🔧 Classes Padrão**: Aplicadas automaticamente nos componentes
- **⚡ Centralização Automática**: Modal.Content sempre centralizado via CSS
- **🎯 Separação de Responsabilidades**: Overlay = backdrop, Content = posição
- **🚪 Portal**: Renderização fora da árvore DOM
- **♿ Acessibilidade**: ARIA labels, focus trap, keyboard navigation
- **🔒 Scroll Lock**: Bloqueia scroll da página quando aberto (com overlay)
- **⌨️ Keyboard Support**: Escape para fechar, Tab navigation
- **📱 Responsivo**: Funciona em todos os dispositivos
- **⚡ Performance**: CSS puro para posicionamento

## 📦 Componentes

```tsx
Modal.Root          // Container principal com estado
Modal.Trigger       // Botão para abrir o modal (classe: modal-trigger)
Modal.ExternalTrigger // Botão externo (classe: modal-trigger)
Modal.Portal        // Portal para renderização externa
Modal.Overlay       // Backdrop apenas (classe: modal-overlay)
Modal.Content       // Container auto-centralizado (classe: modal-content)
Modal.Header        // Cabeçalho (classe: modal-header)
Modal.Title         // Título (classe: modal-title)
Modal.Description   // Descrição (classe: modal-description)
Modal.Body          // Conteúdo (classe: modal-body)
Modal.Footer        // Rodapé (classe: modal-footer)
Modal.Close         // Botão fechar (classe: modal-close)
```

## 🚀 Uso Básico - API de Elementos Irmãos

```tsx
import { Modal } from './components/modal'
import './components/modal/modal.css' // OBRIGATÓRIO

// ✅ Modal completo com backdrop
function ModalWithOverlay() {
  return (
    <Modal.Root>
      <Modal.Trigger>Abrir Modal</Modal.Trigger>
      
      <Modal.Portal>
        <Modal.Overlay />        {/* Backdrop irmão */}
        <Modal.Content>          {/* Content irmão - auto-centralizado */}
          <Modal.Close />
          <Modal.Header>
            <Modal.Title>Modal com Overlay</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Conteúdo com backdrop escuro
          </Modal.Body>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  )
}

// ✅ Modal limpo sem backdrop  
function ModalWithoutOverlay() {
  return (
    <Modal.Root>
      <Modal.Trigger>Abrir Modal</Modal.Trigger>
      
      <Modal.Portal>
        <Modal.Content>          {/* Auto-centralizado também! */}
          <Modal.Close />
          <Modal.Header>
            <Modal.Title>Modal sem Overlay</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Conteúdo sem backdrop
          </Modal.Body>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  )
}
```

## 🎯 **Nova API: Elementos Irmãos**

### **❌ API Anterior (Aninhada):**
```tsx
<Modal.Portal>
  <Modal.Overlay>          {/* Pai */}
    <Modal.Content>        {/* Filho */}
      {/* conteúdo */}
    </Modal.Content>
  </Modal.Overlay>
</Modal.Portal>
```

### **✅ Nova API (Irmãos):**
```tsx
<Modal.Portal>
  <Modal.Overlay />        {/* Irmão 1 - Backdrop */}
  <Modal.Content>          {/* Irmão 2 - Modal */}
    {/* conteúdo */}
  </Modal.Content>
</Modal.Portal>
```

### **🎨 CSS Resultante:**
```css
/* Overlay = Apenas backdrop (z-index: 50) */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

/* Content = Auto-centralizado (z-index: 51) */
.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 32rem;
}
```

## 🎮 **Exemplos Práticos**

### **Modal com Backdrop**
```tsx
function ModalWithBackdrop() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
      <Modal.Portal>
        <Modal.Overlay>        {/* ✅ Backdrop escuro */}
          <Modal.Content>      {/* ✅ Centralizado */}
            <Modal.Header>
              <Modal.Title>Modal Tradicional</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>✅ Backdrop escuro</p>
              <p>✅ Scroll lock automático</p>
              <p>✅ Click fora para fechar</p>
            </Modal.Body>
          </Modal.Content>
        </Modal.Overlay>
      </Modal.Portal>
    </Modal.Root>
  )
}
```

### **Modal sem Backdrop**
```tsx
function ModalWithoutBackdrop() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
      <Modal.Portal>
        <Modal.Content>        {/* ✅ Centralizado da mesma forma! */}
          <Modal.Header>
            <Modal.Title>Modal Limpo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>🚫 Sem backdrop</p>
            <p>✅ Centralizado igual ao outro</p>
            <p>⚠️ Sem scroll lock</p>
            <p>⚠️ Sem click fora para fechar</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => setIsOpen(false)}>
              Fechar
            </button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  )
}
```

## 🎭 **AsChild: Elementos Customizados**

A prop `asChild` permite renderizar elementos customizados mantendo o comportamento do componente:

```tsx
// ❌ Sem AsChild (padrão)
<Modal.Trigger>Click me</Modal.Trigger>
// Renderiza: <button class="modal-trigger">Click me</button>

// ✅ Com AsChild
<Modal.Trigger asChild>
  <div className="custom-trigger">Click me</div>
</Modal.Trigger>
// Renderiza: <div class="modal-trigger custom-trigger">Click me</div>
```

### **Componentes com AsChild:**
```tsx
// Trigger customizado
<Modal.Trigger asChild>
  <a href="#" className="link-trigger">Abrir Modal</a>
</Modal.Trigger>

// External Trigger customizado
<Modal.ExternalTrigger asChild onOpenChange={setOpen}>
  <div className="custom-button">Open</div>
</Modal.ExternalTrigger>

// Close customizado
<Modal.Close asChild>
  <div className="custom-close-btn">✕</div>
</Modal.Close>

// Title customizado
<Modal.Title asChild>
  <h1 className="big-title">Título Grande</h1>
</Modal.Title>

// Description customizada
<Modal.Description asChild>
  <div className="styled-description">Descrição estilizada</div>
</Modal.Description>

// Body customizado
<Modal.Body asChild>
  <section className="custom-content">Conteúdo</section>
</Modal.Body>
```

### **Mesclagem Inteligente:**
```tsx
// Event handlers são combinados
<Modal.Trigger asChild onClick={() => console.log('Custom!')}>
  <button onClick={() => console.log('Child!')}>Click</button>
</Modal.Trigger>
// Ambos os handlers são chamados!

// Classes são mescladas
<Modal.Trigger asChild className="trigger-style">
  <div className="custom-style">Click</div>
</Modal.Trigger>
// Resultado: "modal-trigger trigger-style custom-style"
```

## 🎨 **Sistema de Classes Helper**

```tsx
import { cn } from '../../utils/cn'

// Classes padrão automáticas
<Modal.Content>                    // → "modal-content"
<Modal.Content className="large">  // → "modal-content large"

// Classes condicionais
<Modal.Content className={cn({
  'modal-content-large': size === 'large',
  'modal-loading': isLoading
})}>
// → "modal-content modal-content-large modal-loading"
```

## ⚙️ **Props API (Inalterado)**

### Modal.Root
```tsx
interface ModalRootProps {
  open?: boolean              // Estado controlado
  defaultOpen?: boolean       // Estado inicial (não controlado)
  onOpenChange?: (open: boolean) => void  // Callback de mudança
  children: ReactNode
}
```

### Componentes com AsChild
```tsx
interface ModalTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean     // Renderiza o child ao invés do elemento padrão
}

interface ModalExternalTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onOpenChange: (open: boolean) => void
  children: ReactNode
  asChild?: boolean     // Renderiza o child ao invés do elemento padrão
}

interface ModalCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  asChild?: boolean     // Renderiza o child ao invés do elemento padrão
}

interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  asChild?: boolean     // Renderiza o child ao invés do elemento padrão
}

interface ModalDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  asChild?: boolean     // Renderiza o child ao invés do elemento padrão
}

interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  asChild?: boolean     // Renderiza o child ao invés do elemento padrão
}
```

### Outros Componentes
```tsx
interface BaseModalProps extends HTMLAttributes<HTMLElement> {
  className?: string    // Mesclado com classes padrão automaticamente
  children: ReactNode
  // + props específicas do elemento HTML
}
```

## 🎯 **Vantagens da Nova Abordagem**

### **✅ Menos Complexidade**
```tsx
// ❌ Antes: Lógica de detecção de contexto
const [isStandalone, setIsStandalone] = useState(false)
useEffect(() => {
  const hasOverlayParent = element.closest('.modal-overlay')
  setIsStandalone(!hasOverlayParent)
}, [])

// ✅ Agora: Zero JavaScript
// CSS puro resolve tudo!
```

### **✅ Comportamento Consistente**
```tsx
// Ambos os casos funcionam EXATAMENTE igual:
<Modal.Overlay><Modal.Content /></Modal.Overlay>  // Centralizado
<Modal.Content />                                 // Centralizado
```

### **✅ CSS Mais Limpo**
```css
/* ❌ Antes: Duas classes diferentes */
.modal-content { position: relative; }
.modal-content-standalone { position: fixed; /* ... */ }

/* ✅ Agora: Uma classe única */
.modal-content { 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### **✅ Separação de Responsabilidades**
```tsx
// Modal.Overlay = Apenas backdrop e eventos
// Modal.Content = Apenas conteúdo e posição
// Cada um tem sua responsabilidade clara!
```

## 🔄 **Comparação: Antes vs Agora**

| Aspecto | Antes (Complexo) | Agora (Simples) |
|---------|------------------|-----------------|
| **CSS Classes** | 2 classes diferentes | 1 classe única |
| **JavaScript** | Detecção de contexto | Zero lógica |
| **Performance** | Re-renders para mudança | CSS puro |
| **Manutenção** | Lógica condicional | Direto ao ponto |
| **Bundle Size** | +useState +useEffect | Menor |
| **Complexidade** | Alta | Baixa |

## 📝 **Migration Guide**

### **Se Estava Usando a Versão Anterior:**

```tsx
// ✅ Continua funcionando exatamente igual!
<Modal.Overlay>
  <Modal.Content>
    {/* Não precisa mudar NADA */}
  </Modal.Content>
</Modal.Overlay>

// ✅ Agora também funciona perfeitamente!
<Modal.Content>
  {/* Centralizado automaticamente */}
</Modal.Content>
```

**Não há breaking changes!** A API continua igual, mas agora é mais simples internamente.

## 🎨 **CSS Classes Disponíveis**

### **Classes Padrão (Aplicadas Automaticamente)**
```css
.modal-overlay          /* Backdrop apenas */
.modal-content          /* Container auto-centralizado */
.modal-header           /* Cabeçalho */
.modal-title            /* Título */
.modal-description      /* Descrição */
.modal-body             /* Conteúdo */
.modal-footer           /* Rodapé */
.modal-close            /* Botão fechar */
.modal-trigger          /* Botões trigger */
```

### **Classes de Variação (Opcionais)**
```css
.modal-content-small    /* Modal pequeno */
.modal-content-large    /* Modal grande */
.modal-trigger-primary  /* Botão azul */
.modal-trigger-secondary/* Botão cinza */
.modal-trigger-success  /* Botão verde */
.modal-trigger-danger   /* Botão vermelho */
```

## 🎯 **Funcionalidades Implementadas**

### ✅ **Sistema Completo**
- [x] **Compound Pattern** - API composável e flexível
- [x] **Classes Helper** - Sistema cn() para mesclar classes
- [x] **Centralização Automática** - Modal.Content sempre centralizado
- [x] **API de Irmãos** - Overlay e Content como elementos irmãos
- [x] **AsChild** - Renderize elementos customizados (Trigger, ExternalTrigger, Close, Title, Description, Body)
- [x] **Acessibilidade** - ARIA completo, focus trap, keyboard nav
- [x] **Portal System** - Renderização externa eficiente
- [x] **External Triggers** - Triggers fora do Modal.Root
- [x] **TypeScript** - Tipagem completa e precisa

### ✅ **Performance & UX**
- [x] **CSS Puro** - Zero JavaScript para posicionamento
- [x] **Scroll Lock** - Bloqueia scroll quando necessário
- [x] **Animações** - Transições suaves com CSS
- [x] **Responsivo** - Funciona em todos os dispositivos
- [x] **Lightweight** - Bundle otimizado

## 🔮 **Roadmap**

- [ ] Preset de variantes (variants system)
- [ ] Helper para Tailwind CSS
- [ ] Plugin para CSS-in-JS
- [ ] Stacked modals
- [ ] Animation helpers avançados

## 📝 **Licença**

MIT

---

**🎭 Sistema de Modal Completo e Profissional!**  
**🎯 Centralização automática + AsChild + API de irmãos**  
**⚡ Performance máxima com CSS puro**  
**🧹 Arquitetura limpa inspirada no Radix UI**  
**🚀 TypeScript, acessibilidade e flexibilidade total!** 