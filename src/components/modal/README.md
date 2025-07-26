# 🎭 Sistema Modal - Compound Pattern com AsChild

Sistema de modal completo implementando **Compound Pattern** com **API unificada** e **centralização automática simplificada**.

## 🚀 **NOVIDADES: API Unificada + AsChild**

> ✨ **Modal.Content SEMPRE se centraliza automaticamente**  
> 🔄 **Modal.Trigger unificado: funciona em qualquer contexto**  
> 🎭 **AsChild: Renderize elementos customizados**  
> 🎯 **Zero JavaScript para posicionamento**  
> 🧹 **Código mais limpo e simples**

## 🔄 **API Unificada - Modal.Trigger**

### **❌ Antes (API confusa - REMOVIDO):**
```tsx
// Dentro do contexto
<Modal.Root>
  <Modal.Trigger>Interno</Modal.Trigger>
</Modal.Root>

// Fora do contexto - ❌ COMPONENT REMOVIDO!
<Modal.ExternalTrigger onOpenChange={setOpen}>
  Externo
</Modal.ExternalTrigger>
```

### **✅ Agora (API clara):**
```tsx
// Dentro do contexto - detecta automaticamente
<Modal.Root>
  <Modal.Trigger>Interno</Modal.Trigger>
</Modal.Root>

// Fora do contexto - basta passar onOpenChange
<Modal.Trigger onOpenChange={setOpen}>
  Externo
</Modal.Trigger>

// Funciona com asChild também!
<Modal.Trigger asChild onOpenChange={setOpen}>
  <MyCustomButton>Customizado</MyCustomButton>
</Modal.Trigger>
```

### **🧠 Como Funciona:**
1. **Modal.Trigger** verifica se está dentro do contexto
2. Se estiver, usa `context.onOpenChange` automaticamente
3. Se não estiver, usa a prop `onOpenChange` fornecida
4. Funciona perfeitamente com `asChild` em ambos os casos

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
// Trigger customizado (interno ou externo)
<Modal.Trigger asChild onOpenChange={setOpen}>
  <a href="#" className="link-trigger">Abrir Modal</a>
</Modal.Trigger>

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
<Modal.Trigger asChild onClick={() => console.log('Custom!')} onOpenChange={setOpen}>
  <button onClick={() => console.log('Child!')}>Click</button>
</Modal.Trigger>
// Ambos os handlers são chamados!

// Classes são mescladas
<Modal.Trigger asChild className="trigger-style" onOpenChange={setOpen}>
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

## 🏗️ **Arquitetura e Uso**

### **Estrutura Básica**
```tsx
<Modal.Root>
  <Modal.Trigger>Abrir Modal</Modal.Trigger>
  
  <Modal.Portal>
    <Modal.Overlay />
    <Modal.Content>
      <Modal.Close />
      <Modal.Header>
        <Modal.Title>Título</Modal.Title>
        <Modal.Description>Descrição</Modal.Description>
      </Modal.Header>
      <Modal.Body>Conteúdo</Modal.Body>
      <Modal.Footer>Ações</Modal.Footer>
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>
```

### **Trigger Externo (API Unificada)**
```tsx
// Em qualquer lugar da aplicação
<Modal.Trigger onOpenChange={setOpen}>
  Trigger Externo
</Modal.Trigger>

// Modal separado
<Modal.Root open={open} onOpenChange={setOpen}>
  <Modal.Portal>
    <Modal.Overlay />
    <Modal.Content>
      {/* conteúdo */}
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>
```

### **Modalidade Controlled/Uncontrolled**
```tsx
// Uncontrolled (estado interno)
<Modal.Root defaultOpen={false}>
  <Modal.Trigger>Abrir</Modal.Trigger>
  {/* ... */}
</Modal.Root>

// Controlled (estado externo)
<Modal.Root open={isOpen} onOpenChange={setIsOpen}>
  {/* ... */}
</Modal.Root>
```

## 🔧 **API Reference**

### Componentes com AsChild
```tsx
interface ModalTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  onOpenChange?: (open: boolean) => void  // Opcional - para uso externo
}

interface ModalCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  asChild?: boolean
}

interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  asChild?: boolean
}

interface ModalDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  asChild?: boolean
}

interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  asChild?: boolean
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

## ♿ **Acessibilidade**

- **Focus Management**: Focus trap automático quando aberto
- **Keyboard Navigation**: Escape para fechar, Tab/Shift+Tab para navegar
- **ARIA Labels**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`
- **IDs únicos**: Gerados automaticamente para cada instância

## 🎯 **Classes CSS**

### **Classes Obrigatórias (Funcionais)**
```css
/* OBRIGATÓRIO para funcionamento */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 51;
}
```

### **Classes Opcionais (Visuais)**
```css
/* Exemplos de estilos visuais */
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
}

.modal-trigger-primary    /* Botão azul */
.modal-trigger-secondary  /* Botão cinza */
.modal-trigger-success    /* Botão verde */
.modal-trigger-danger     /* Botão vermelho */
```

## 🎯 **Funcionalidades Implementadas**

### ✅ **Sistema Completo**
- [x] **Compound Pattern** - API composável e flexível
- [x] **Classes Helper** - Sistema cn() para mesclar classes
- [x] **Centralização Automática** - Modal.Content sempre centralizado
- [x] **API de Irmãos** - Overlay e Content como elementos irmãos
- [x] **AsChild** - Renderize elementos customizados (Trigger, Close, Title, Description, Body)
- [x] **Trigger Unificado** - Um componente para todos os contextos
- [x] **Acessibilidade** - ARIA completo, focus trap, keyboard nav
- [x] **Portal System** - Renderização externa eficiente
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
**🔄 API unificada + AsChild + Centralização automática**  
**⚡ Performance máxima com CSS puro**  
**🧹 Arquitetura limpa inspirada no Radix UI**  
**🚀 TypeScript, acessibilidade e flexibilidade total!** 