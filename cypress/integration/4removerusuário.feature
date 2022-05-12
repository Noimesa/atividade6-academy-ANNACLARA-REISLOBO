Scenario: remover usuário
Given que acessei o sistema
And preenchi o campo de pesquisa com o usuário a ser removido
And cliquei no botão de remover
When acesso o sistema novamente 
And pesquiso o nome do mesmo usuário
Then vejo que suas informações já foram removidas do sistema