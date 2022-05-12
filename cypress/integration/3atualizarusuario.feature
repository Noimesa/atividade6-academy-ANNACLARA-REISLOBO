Scenario: encontrar usuário pelo identificador único e atualizar informações
Given que acessei o sistema
And preenchi o campo "pesquisar" com o nome de um usuário
And não encontrei nenhum usuário
Then não foi possível atualizar as informações

Scenario: atualizar usuário
Given que acessei o sistema
And pesquisei o nome de um usuário
When clico em "ver detalhes"
And clico em "editar"
And preencho o campo com um novo e-mail válido
And clico no botão "salvar"
Then visualizo a mensagem de que as informações foram atualizadas

Scenario: atualizar usuário com e-mail já cadastrado
Given que acessei o sistema
And pesquisei o nome de um usuário
When clico em "ver detalhes"
And clico em "editar"
And preencho o campo "e-mail" com um e-mail já cadastrado
Then visualizo a mensagem "E-mail already in use"

Scenario: atualizar nome para que tenha mais de 100 caracteres
Given que acessei o sistema
And cliquei em "ver detalhes" de um usuário
When clico em "editar"
And altero o nome para um com mais de 100 caracteres
Then não é possível atualizar o nome do usuário

Scenario: atualizar e-mail para que tenha mais de 60 caracteres
Given que acessei o sistema
And cliquei em "ver detalhes" de um usuário
When clico em "editar"
And altero o e-mail para um com mais de 60 caracteres
Then não é possível atualizar o e-mail do usuário