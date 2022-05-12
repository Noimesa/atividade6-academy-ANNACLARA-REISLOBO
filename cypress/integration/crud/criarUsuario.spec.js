describe("Criar um usuário", () => {
    it("Cadastro de usuário com sucesso", () => {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");

        // Clica no botão de criar novo usuário
        cy.get(".sc-gsnTZi.beUAqQ").click();

        // Insere dados de nome e email
        cy.get("input[name='name']").type("Anna Clara", { force: true });
        cy.get("input[name='email']").type("anna@gmail.com", { force: true });

        // cy.get("input[name='email']").type("i@t.com", { force: true });
        // cy.get("input[name='name']").type("Iury Oliveira", { force: true });
        // cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {fixture: 'user_example.json'}).as('users')
        // cy.contains("button", "Salvar").click();
        // cy.wait('@users')
    });
});