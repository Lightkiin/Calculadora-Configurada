# 📱 Calculadora com Configurações – React Native

Este projeto é um aplicativo de **calculadora** desenvolvido em **React Native**, com uma interface moderna, suporte a **modo escuro** e uma **aba de configurações** separada.

O principal objetivo do app é demonstrar o uso de **componentes reutilizáveis**, **Context API** para gerenciamento de tema e **React Navigation** para navegação entre telas.

---

## ✨ Funcionalidades

### 🧮 Calculadora
- Operações básicas: soma, subtração, multiplicação e divisão
- Suporte a números decimais
- Botões de limpar (C) e apagar (⌫)
- Exibição dinâmica do resultado
- Tratamento básico de erros de cálculo

### ⚙️ Configurações
- Alternar entre **Modo Escuro** e **Modo Claro**
- Opções preparadas para:
  - Som ao clicar
  - Histórico de cálculos
  - Vibração

### 🧭 Navegação
- Navegação por abas superiores (Top Tabs)
- Ícones com **Material Icons**
- Interface simples e intuitiva

---

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- React Navigation
- React Native Paper
- Context API
- Expo Vector Icons

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── CalculatorButton.js
├── context/
│   └── ThemeContext.js
├── navigation/
│   └── TopTabs.js
├── screens/
│   ├── CalculatorScreen.js
│   └── SettingsScreen.js
├── utils/
│   └── calculatorLogic.js
App.js
```

---

## 🎨 Tema (Dark Mode)

O aplicativo utiliza a **Context API** para controlar o tema global, alterando cores de fundo, texto e botões dinamicamente através da aba de configurações.

---

## ▶️ Como Executar o Projeto

### Pré-requisitos
- Node.js
- Expo CLI
- Emulador ou aplicativo Expo Go

### Passos

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
npm install
expo start
```

---

## 🚀 Melhorias Futuras

- Implementação do histórico de cálculos
- Sons e vibração ao pressionar botões
- Substituir `eval` por um parser matemático seguro
- Animações e melhorias de UI
- Testes automatizados

---

## 👨‍💻 Autor

Projeto desenvolvido com fins educacionais para aprendizado de **React Native**, navegação e gerenciamento de estado com Context API.
