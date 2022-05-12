describe("Remover um usuário", () => {
    it("Deve ser possível remover um usuário", () => {
        // Intercepta o GET da listagem de usuários da página e retorna uma lista usuários de exemplo
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {fixture: 'list_users_example.json'})
        
        // Acessa a página
        cy.visit("https://academy-crud-frontend.herokuapp.com/");

        // Clica no botão de deletar
        cy.get(".sc-kgflAQ.vggQs").click();

        // Clica no botão de confirmar se realmente quer deletar
        cy.contains("button", "Confirmar").click();
    });
});
