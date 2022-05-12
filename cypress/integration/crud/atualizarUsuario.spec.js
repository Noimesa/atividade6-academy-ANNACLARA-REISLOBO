describe("Atualizar um usuário", () => {
    it("Deve ser possível atualizar um usuário", () => {
        // Intercepta o GET da listagem de usuários da página e retorna uma lista usuários de exemplo
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", { fixture: 'list_users_example.json' })

        // Acessa a página
        cy.visit("https://academy-crud-frontend.herokuapp.com/");

        // Intercepta o GET da pagina de editar do usuário e retorna os dados do usuário de exemplo
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users/7400293d-bb85-4fd0-ae47-a4bc8668c771", { fixture: 'user_example.json' })

        // Clica no botão de "Ver Detalhes"
        cy.get(".sc-fLlhyt.gmNlZJ").click();

        // Clica no botão de "Editar"
        cy.contains("button", "Editar").click();

        // Limpa os campos de nome e email e digita novos dados
        cy.get("input[name='name']").clear().type("Anna Clara", { force: true });
        cy.get("input[name='email']").clear().type("anna@gmail.com", { force: true });

        // Intercepta o PUT de envio dos dados editados do usuário, inserindo novos dados
        cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/7400293d-bb85-4fd0-ae47-a4bc8668c771", { fixture: 'user_example_updated.json' })

        // Intercepta o GET da nova listagem de usuários da página e retorna a nova lista de usuários de exemplo
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", { fixture: 'list_users_example_updated.json' })

        // Clica no botão de "Salvar"
        cy.contains("button", "Salvar").click();

        // Verifica o nome e email dos usuários exibidos após atualização
        cy.contains("Anna Clara");
        cy.contains("anna@gmail.com")
        cy.contains("João");
        cy.contains("João@gmail.com")
    });
});
