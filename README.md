# APP

GymPass style app.

## RFs (Requisitos funcionais)

- [ ] Dever ser possivel se cadastrar
- [ ] Dever ser possivel se autenticar
- [ ] Dever ser possivel obter o perfil do usuario logado
- [ ] Dever ser possivel obter o numero de check-ins realizado pelo usúario logado
- [ ] Dever ser possivel o usuario obter seu histórico de check-ins
- [ ] Dever ser possivel deve ser possivel buscar academias mais proximas 
- [ ] Dever ser possivel deve ser possivel buscar academias pelo nome
- [ ] Dever ser possivel o usuario realizar check-in em uma academia 
- [ ] Dever ser possivel validar o check-in de um usuario
- [ ] Dever ser possivel deve ser possivel cadastrar uma academia 


## RNs (Regras de negocio)

- [ ] O usuario não deve poder cadastrar com um email duplicado
- [ ] O usuario não deve poder fazer 2 check-ins no mesmo dia
- [ ] O usuario não pode fazer check-in se nãoestiver perto(100m) da academia
- [ ] O check-in só pode ser validado até 20 minutos após criado
- [ ] O check-in só pode ser validado por ADMS
- [ ] A academia só pode cadastrado por ADM


## RNFs (Requisitos não-funcionais)

- [ ] A senha deve estar criptografada
- [ ] Os dados da aplicação deve estar presistidos em um banco postgress
- [ ] todas as listas deve estar paginadas por 20 itens por pagina
- [ ] O usuario deve ser identificado por um JWT
