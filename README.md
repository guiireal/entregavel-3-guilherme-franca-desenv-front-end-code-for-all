# Code for All 🌟 - Single Page Application

> **Entregável 3**: SPA com JavaScript Avançado e Bootstrap 5

Plataforma web moderna para democratizar o acesso à educação em tecnologia.

## 🚀 Visão Geral

Este projeto foi completamente transformado em uma **Single Page Application (SPA)** utilizando JavaScript puro (ES6+), sem frameworks externos, com Bootstrap 5 para estilização. A aplicação oferece navegação fluida, validação de formulários em tempo real e uma experiência moderna e responsiva.

## 📋 Especificações Técnicas do Entregável 3

### ✅ Requisitos Atendidos

1. **✅ Manipulação do DOM**: Sistema completo de SPA com navegação dinâmica
2. **✅ Sistema de Templates JavaScript**: Todas as páginas são templates reutilizáveis
3. **✅ Validação de Formulários**: Sistema robusto com feedback em tempo real
4. **✅ Bootstrap 5**: Framework CSS eliminando CSS customizado
5. **✅ Interatividade Avançada**: Filtros, animações e feedback visual

### 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica única (index.html)
- **Bootstrap 5.3.2**: Framework CSS responsivo completo
- **JavaScript ES6+**: Lógica da aplicação (100% vanilla)
- **Canvas API**: Gráficos customizados
- **LocalStorage API**: Persistência de dados

## 📁 Arquitetura da Aplicação

```
code-for-all/
├── index.html                 # ⭐ ÚNICO ponto de entrada (SPA)
├── assets/
│   ├── js/
│   │   ├── app.js            # 🎯 Core da aplicação e roteamento
│   │   ├── components.js     # 🧩 Header e Footer reutilizáveis
│   │   ├── templates.js      # 📄 Templates de todas as páginas
│   │   ├── validation.js     # ✅ Sistema de validação
│   │   └── charts.js         # 📊 Gráficos Canvas (mantido)
│   ├── images/               # 🖼️ Assets estáticos
│   └── audios/               # 🎵 Depoimentos
├── README.md                 # 📖 Este arquivo
├── *.html (backup)           # 📦 Páginas antigas (referência)
└── wireframes/               # 🎨 Documentação visual
```

## 🎯 Sistema SPA - Como Funciona

### 1. Roteamento Baseado em Hash

```javascript
// URLs da aplicação
https://site.com/            → Página inicial
https://site.com/#/sobre     → Página sobre
https://site.com/#/projetos  → Projetos
https://site.com/#/cadastro  → Formulário de voluntários
```

### 2. Fluxo de Navegação

```
Usuário clica em link
        ↓
Hash da URL muda (#/sobre)
        ↓
app.js detecta mudança (hashchange event)
        ↓
Mostra loading spinner
        ↓
templates.js retorna HTML da página
        ↓
Renderiza conteúdo em #app-content
        ↓
Inicializa features (validação, gráficos, etc.)
        ↓
Esconde spinner + animação fade-in
```

## 📄 Sistema de Templates

Arquivo: `assets/js/templates.js`

Cada página é uma função pura que retorna HTML:

```javascript
const Templates = {
    home: () => `<div class="container">...</div>`,
    sobre: () => `<div class="container">...</div>`,
    // ... todas as páginas
};
```

### Páginas Implementadas

| Página | Rota | Descrição |
|--------|------|-----------|
| 🏠 **Home** | `/` | Hero, projetos, depoimentos, vídeos, CTA |
| ℹ️ **Sobre** | `/sobre` | História, valores, equipe, gráficos |
| 📊 **Projetos** | `/projetos` | Lista filtrada de projetos sociais |
| 👥 **Cadastro** | `/cadastro` | Formulário completo de voluntários |
| 💰 **Doações** | `/doacoes` | Campanhas e formulário de doação |
| 📄 **Transparência** | `/transparencia` | Relatórios e documentos |
| 📝 **Blog** | `/blog` | Notícias e newsletter |
| 📞 **Contato** | `/contato` | Formulário e informações |

## ✅ Sistema de Validação Avançado

Arquivo: `assets/js/validation.js`

### Funcionalidades

1. **Validação em tempo real**
   - Feedback visual instantâneo (is-valid/is-invalid)
   - Mensagens de erro dinâmicas
   - Validação no blur e input

2. **Máscaras Automáticas**
   ```javascript
   CPF:      000.000.000-00
   Telefone: (00) 00000-0000
   CEP:      00000-000
   ```

3. **Tipos de Validação**
   - ✅ Campos obrigatórios
   - ✅ Formato de e-mail
   - ✅ Padrões (regex)
   - ✅ Comprimento mín/máx
   - ✅ Valores numéricos (min/max)
   - ✅ Data de nascimento (18-100 anos)
   - ✅ Checkboxes obrigatórios

4. **Persistência**
   - Salva no localStorage
   - Recupera submissões
   - Histórico por formulário

### Exemplo de Uso

```javascript
// Inicializa validação
Validation.init('cadastroForm');
Validation.initMasks();

// Validação automática:
// - blur: valida campo
// - input: revalida se inválido
// - submit: valida tudo
```

## 🧩 Componentes Reutilizáveis

Arquivo: `assets/js/components.js`

### Header (Navbar)

- Logo SVG animado
- Menu responsivo (hamburguer em mobile)
- Links com indicador de página ativa
- Bootstrap 5 navbar

### Footer

- Links rápidos
- Redes sociais (Bootstrap Icons)
- Informações da ONG
- Copyright

### Métodos

```javascript
Components.renderHeader()      // Renderiza navbar
Components.renderFooter()      // Renderiza footer
Components.updateActiveNav()   // Marca link ativo
```

## 📊 Gráficos (Canvas API)

Arquivo: `assets/js/charts.js` + `ChartManager` em `app.js`

### Gráficos Implementados

1. **📊 Gráfico de Barras**
   - Impacto social por região
   - 5 regiões do Brasil
   - Cores customizadas
   - Eixos e labels

2. **🥧 Gráfico de Pizza**
   - Distribuição de recursos
   - 5 tipos de projetos
   - Legenda detalhada
   - Percentuais

3. **📈 Gráfico de Linha**
   - Evolução de voluntários (2020-2025)
   - Crescimento de 400%
   - Pontos e valores
   - Tendência ascendente

### Carregamento Dinâmico

```javascript
// Gráficos só são renderizados quando a página /sobre é carregada
if (page === 'sobre') {
    ChartManager.init();
}
```

## 🎨 Design System (Bootstrap 5)

### Componentes Utilizados

- ✅ **Grid System**: Responsividade (12 colunas)
- ✅ **Cards**: Projetos, depoimentos, notícias
- ✅ **Forms**: Validação visual integrada
- ✅ **Buttons**: Variantes primary, success, outline
- ✅ **Navbar**: Menu responsivo
- ✅ **Modal**: Detalhes de projetos
- ✅ **Alerts**: Mensagens de sucesso/erro
- ✅ **Progress**: Barras de progresso de campanhas
- ✅ **Badges**: Categorias de projetos
- ✅ **List Group**: Documentos e relatórios

### Cores do Theme

```css
Primary:   #0d6efd (Azul)
Success:   #198754 (Verde)
Warning:   #ffc107 (Amarelo)
Danger:    #dc3545 (Vermelho)
Info:      #0dcaf0 (Ciano)
```

### Ícones

- **Bootstrap Icons v1.11.1** (CDN)
- 2000+ ícones disponíveis
- Uso: `<i class="bi bi-heart"></i>`

## 🔄 Funcionalidades Interativas

### 1. Filtro de Projetos

```javascript
// Filtra por categoria ao clicar
Botão "Educação" → Mostra apenas projetos de educação
Botão "Todos" → Mostra todos os projetos
```

- Animações suaves
- Botões com estado ativo
- Display:none/block dinâmico

### 2. Formulários Dinâmicos

- Validação em tempo real
- Máscaras automáticas
- Feedback visual (Bootstrap)
- Loading spinner ao enviar
- Mensagem de sucesso (Alert)
- Reset após envio

### 3. Animações

```css
/* Fade-in automático nos cards */
.fade-in {
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
```

- Intersection Observer
- Animação ao scroll
- Transições entre páginas

## 🚀 Como Executar

### Método 1: Servidor Local (Recomendado)

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

### Método 2: Live Server (VS Code)

1. Instale extensão **Live Server**
2. Botão direito em `index.html`
3. "Open with Live Server"

### Método 3: Navegador Direto

Abra `index.html` diretamente no navegador.

**⚠️ Nota**: Algumas funcionalidades podem ter limitações sem servidor local.

## 📱 Responsividade

Totalmente responsivo com Bootstrap 5:

| Dispositivo | Layout |
|-------------|--------|
| Mobile (<576px) | 1 coluna |
| Tablet (576-768px) | 2 colunas |
| Desktop (768-1200px) | 3 colunas |
| Wide (>1200px) | 3-4 colunas |

## 💾 Persistência de Dados

### LocalStorage

Dados salvos no navegador:

```javascript
localStorage.setItem('cadastro', JSON.stringify(data));
localStorage.setItem('doacao', JSON.stringify(data));
localStorage.setItem('contato', JSON.stringify(data));
localStorage.setItem('newsletter', JSON.stringify(data));
```

### Estrutura dos Dados

```json
{
  "nome": "João Silva",
  "email": "joao@example.com",
  "cpf": "123.456.789-00",
  "timestamp": "2025-10-13T10:30:00.000Z"
}
```

## 🧪 Testes e Validação

### Testes Realizados

✅ Navegação entre todas as páginas  
✅ Validação com dados inválidos  
✅ Validação com dados válidos  
✅ Máscaras automáticas (CPF, telefone, CEP)  
✅ Filtros de projetos  
✅ Renderização de gráficos  
✅ Responsividade (mobile, tablet, desktop)  
✅ Loading spinner  
✅ Persistência no localStorage  
✅ Links ativos na navegação  
✅ Animações e transições  
✅ Modals do Bootstrap  

### Navegadores Testados

- ✅ Chrome 120+
- ✅ Firefox 120+
- ✅ Edge 120+
- ✅ Safari 17+

## 📚 Documentação do Código

### app.js - Aplicação Principal

```javascript
class App {
    init()                    // Inicializa SPA
    renderComponents()        // Renderiza header/footer
    setupRouting()           // Configura rotas e listeners
    loadPage()               // Carrega página baseada na rota
    initPageFeatures()       // Inicializa features específicas
    setupProjectFilters()    // Filtros de projetos
    updateTitle()            // Atualiza document.title
    showSpinner()            // Mostra loading
    hideSpinner()            // Esconde loading
    setupGlobalListeners()   // Intersection Observer, etc.
}
```

### validation.js - Validação

```javascript
const Validation = {
    init(formId)             // Inicializa validação do formulário
    validateField(input)     // Valida campo individual
    validateForm(form)       // Valida formulário completo
    handleSubmit(form)       // Processa envio (simula API)
    showSuccessMessage()     // Alert de sucesso
    applyMask(input, type)   // Aplica máscara (CPF/TEL/CEP)
    initMasks()              // Inicializa todas as máscaras
}
```

### components.js - Componentes

```javascript
const Components = {
    renderHeader()           // Retorna HTML do header
    renderFooter()           // Retorna HTML do footer
    updateActiveNav(path)    // Marca link ativo
}
```

### templates.js - Templates

```javascript
const Templates = {
    home()                   // Template da home
    sobre()                  // Template sobre
    projetos()               // Template projetos
    cadastro()               // Template cadastro
    doacoes()                // Template doações
    transparencia()          // Template transparência
    blog()                   // Template blog
    contato()                // Template contato
}
```

## 🎓 Conceitos Aplicados

### JavaScript Avançado

- ✅ Classes ES6
- ✅ Arrow Functions
- ✅ Template Literals
- ✅ Destructuring
- ✅ Spread Operator
- ✅ Promises (setTimeout simula async)
- ✅ Event Delegation
- ✅ Intersection Observer API
- ✅ LocalStorage API
- ✅ Canvas API

### Padrões de Projeto

- ✅ **Module Pattern**: Objetos singleton (Templates, Validation, etc.)
- ✅ **Observer Pattern**: Event listeners e hashchange
- ✅ **Template Method**: Sistema de templates
- ✅ **Factory Pattern**: Criação dinâmica de HTML

### Boas Práticas

- ✅ Código modular e organizado
- ✅ Funções puras (templates)
- ✅ Separação de responsabilidades
- ✅ Comentários descritivos
- ✅ Nomenclatura clara
- ✅ DRY (Don't Repeat Yourself)

## 🚧 Melhorias Futuras

- [ ] Backend real (Node.js + Express)
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Autenticação de usuários
- [ ] Painel administrativo
- [ ] Testes automatizados (Jest)
- [ ] Build system (Vite)
- [ ] TypeScript
- [ ] PWA (Service Workers)
- [ ] Modo escuro
- [ ] i18n (Internacionalização)

## 🏆 Diferenciais do Projeto

### 1. SPA Puro (Vanilla JS)

- Sem React, Vue ou Angular
- Demonstra domínio dos fundamentos
- Controle total sobre o código

### 2. Validação Robusta

- Sistema completo de validação
- Feedback visual em tempo real
- Máscaras automáticas

### 3. Bootstrap 5 Completo

- Zero CSS customizado
- Componentes prontos
- Design system consistente

### 4. Canvas API

- Gráficos desenhados manualmente
- Controle total sobre renderização
- Performance otimizada

### 5. Código Limpo

- Organização modular
- Comentários descritivos
- Fácil manutenção

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais.

## 👥 Autor

**Guilherme França**  
Desenvolvimento Front-End - Ciência da Computação  
Universidade Cruzeiro do Sul

## 📞 Contato

- GitHub: [@guiireal](https://github.com/guiireal)
- E-mail: contato@codeforall.org

---

## 📝 Changelog

### v3.0.0 - Entregável 3 (Outubro 2025)

- ✨ **Nova**: Arquitetura SPA completa
- ✨ **Nova**: Sistema de roteamento baseado em hash
- ✨ **Nova**: Templates dinâmicos JavaScript
- ✨ **Nova**: Validação avançada de formulários
- ✨ **Nova**: Integração completa Bootstrap 5
- ✨ **Nova**: Animações e transições
- 🔧 **Melhorado**: Gráficos adaptados para SPA
- 🔧 **Melhorado**: Responsividade
- 🗑️ **Removido**: CSS customizado
- 🗑️ **Removido**: Múltiplos arquivos HTML

### v2.0.0 - Entregável 2 (Setembro 2025)

- Formulários validados
- Gráficos Canvas
- Múltiplas páginas HTML

### v1.0.0 - Entregável 1 (Agosto 2025)

- Estrutura HTML básica
- Wireframes
- Layout inicial

---

**Última atualização**: 13 de Outubro de 2025  
**Versão**: 3.0.0 (SPA - Single Page Application)  
**Status**: ✅ Pronto para entrega
