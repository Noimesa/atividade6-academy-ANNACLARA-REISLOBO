describe("Listar usuários", () => {
    it("Deve ser possível visualizar os usuários", () => {
        // Intercepta o GET da listagem de usuários da página e retorna uma lista usuários de exemplo
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {fixture: 'list_users_example.json'})
        
        // Acessa a página
        cy.visit("https://academy-crud-frontend.herokuapp.com/");

        // Verifica o nome e email dos usuários exibido
        cy.contains("Maria");
        cy.contains("Maria@gmail.com")
        cy.contains("João");
        cy.contains("João@gmail.com")
    });
});
