Scenario: Listar usuários e visualizar informações após consulta
Given que acessei o sistema
When clico em qualquer usuário cadastrado
Then visualizo todas as suas informações 

Scenario: Visualizar opção de cadastrar usuário
Given que acessei o sistema 
When visualizo a tela inicial
And vejo que não existem usuários cadastrados
Then visualizo uma opção para cadastrar um usuário