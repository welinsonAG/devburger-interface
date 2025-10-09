# devburger-interface
<img width="1920" height="832" alt="Cardapio" src="https://github.com/user-attachments/assets/cf9256e3-190e-489e-9c0b-01ed0e1e38b1" />

Frontend (interface) do DevBurger: tela de menu, carrinho e pedidos que consome a API.

# Visão Geral
Interface web que consome a API para exibir o cardápio, permitir criar pedidos, acompanhar status, etc. Compatível com React/Vue + TailwindCSS (adapte ao seu stack).

# Tecnologias Utilizadas
Frontend: React (ou Vue) + TailwindCSS (ajuste conforme seu stack)
Gerenciamento de estado: Redux / Vuex / Pinia (ajuste conforme)
chamadas HTTP: Axios
# Pré-requisitos
Node.js (v16 ou superior)
npm ou yarn
# Instalação
Clone e instalação (divida por frontend):

git clone https://github.com/welinsonAG/devburger-interface.git
cd devburger-interface
npm install
ou yarn install
Configuração de ambiente (se aplicável):

Crie um arquivo .env.local (ou use .env) para definir a URL base da API, por exemplo:
VITE_API_BASE_URL=http://localhost:3001/api/v1
REACT_APP_API_BASE_URL=http://localhost:3001/api/v1
Como Rodar
Rodar a aplicação de desenvolvimento:
npm run dev
ou npm run start (conforme o script real)
Acesse no navegador: http://localhost:5173 (ou a porta exibida no terminal)
Observação: ajuste a porta conforme a sua configuração (Vite/CRA/NEXT).

# Como Configurar a API Base URL
Defina a base da API no arquivo de ambiente (.env.local) com a chave correspondente ao seu stack (Vite/CRA):
Vite: VITE_API_BASE_URL
CRA: REACT_APP_API_BASE_URL
Exemplo: VITE_API_BASE_URL=http://localhost:3000/api/v1
# Capturas de Tela
# Contato
 GitHub(https://github.com/welinsonAG)
 
 Dicas úteis para melhorar ainda mais

Consistência de títulos: use o mesmo nível de títulos (h2/h3) entre seções.
Forneça instruções de instalação e uso que não assumam conhecimento prévio.
Inclua um exemplo mínimo de código para o uso básico (pode ser um snippet de chamada de API ou de renderização de componente).
Adicione um link para demonstração ou capturas de tela se tiverem.
Adicione .env.example em cada repositório para orientar as variáveis necessárias.
Como quer prosseguir?

Quer que eu adapte os templates exatamente com base no seu stack atual (por exemplo, Prisma vs Sequelize, Vite vs CRA, React vs Vue, PostgreSQL vs MongoDB)?
Deseja também um README único para um monorepo que tenha os dois módulos no mesmo repositório?
Pode me enviar o conteúdo atual dos READMEs de cada um ou confirmar quais scripts/teclas de comando você já usa (dev, migrate, seed, etc.)? Assim eu adapto com precisão.
