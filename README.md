# Projeto de Testes Automatizados com Cypress

Este projeto tem como objetivo demonstrar como automatizar testes end-to-end utilizando [Cypress](https://www.cypress.io/) e JavaScript, organizando o código com custom commands e gerando relatórios com Mochawesome.

## Componentes do Projeto

- **Cypress**: Framework de automação de testes para aplicações web.
- **Custom Commands**: Comandos personalizados para facilitar e organizar os testes.
- **Mochawesome**: Gerador de relatórios de testes.
- **Fixtures**: Dados mockados para facilitar a execução dos testes.
- **Relatórios**: Relatórios gerados automaticamente após a execução dos testes.

## Pré-requisitos

- Node.js instalado
- Clonar e executar os projetos [banco-web](https://github.com/juliodelima/banco-web) e [banco-api](https://github.com/juliodelima/banco-api)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/pedrosenna1/Banco-web-tests
   cd Modulo6_Cypress
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Certifique-se de que a API (`banco-api`) e a aplicação web (`banco-web`) estejam em execução.

## Execução dos Testes

- Para rodar todos os testes:
  ```sh
  npm test
  ```
- Para rodar os testes com interface gráfica:
  ```sh
  npm run test-ui
  ```
- Para rodar os testes apontando para o ambiente local:
  ```sh
  npm run test-local
  ```

Os relatórios serão gerados na pasta `cypress/reports`.

## Estrutura dos Testes

Os testes estão organizados na pasta [`cypress/e2e`](cypress/e2e):

- [`login.cy.js`](cypress/e2e/login.cy.js): Testa o fluxo de login com credenciais válidas e inválidas.
- [`mockLogin.cy.js`](cypress/e2e/mockLogin.cy.js): Testa o login utilizando interceptação de requisições e dados mockados.
- [`transferencia.cy.js`](cypress/e2e/transferencia.cy.js): Testa o fluxo de transferência entre contas.

## Custom Commands

Os comandos personalizados estão definidos em [`cypress/support/commands`](cypress/support/commands):

- [`preencherCamposLogin`](cypress/support/commands/login.js): Preenche os campos de login e realiza o submit.
- [`realizarTransferencia`](cypress/support/commands/transferencia.js): Realiza uma transferência entre contas.
- [`visitarPagina`](cypress/support/commands/common.js): Visita a página principal e valida a URL.
- [`verificarTextoVisivel`](cypress/support/commands/common.js): Verifica se um texto está visível na página.

## Dados de Teste

Os dados utilizados nos testes estão na pasta [`cypress/fixtures`](cypress/fixtures):

- [`inputLogin.json`](cypress/fixtures/inputLogin.json): Dados de login.
- [`bodyLogin.json`](cypress/fixtures/bodyLogin.json): Resposta mockada de login.
- [`bodyContas.json`](cypress/fixtures/bodyContas.json): Resposta mockada de contas.

## Relatórios

Os relatórios são gerados automaticamente após a execução dos testes e podem ser encontrados em [`cypress/reports`](cypress/reports).

---

Sinta-se à vontade para contribuir ou adaptar este projeto