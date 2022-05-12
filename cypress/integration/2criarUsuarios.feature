Scenario: Cadastrar um novo usuário
Given que acessei o sistema
And cliquei no botão de "novo"
When preencho os campos "nome" e "e-mail" com informações válidas
And clico no botão "Salvar"
Then meu usuário é cadastrado

Scenario: Cadastrar um novo usuário com e-mail já cadastrado
Given que acessei o sistema
And cliquei no botão de "novo"
When preencho o campo "nome"
And preencho o campo "e-mail" com um e-mail já cadastrado
Then não consigo finalizar o cadastrado
And visualizo a mensagem "User already exists"

Scenario: Cadastrar um nome com mais de 100 caracteres
Given que acessei o sistema
And cliquei no botão "Novo"
When preencho o campo "nome" com mais de 100 caracteres
And preencho o campo "e-mail" com um e-mail válido
Then não consigo finalizar o cadastrado

Scenario: Cadastrar um e-mail com mais de 60 caracteres
Given que acessei o sistema
And cliquei no botão "Novo"
When preencho o campo "nome" 
And preencho o campo "e-mail" com um e-mail com mais de 60 caracteres
Then não consigo finalizar o cadastro