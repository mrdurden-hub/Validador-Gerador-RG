# Classes úteis para gerar e validar RG (registro geral)

 
<h3>Instalação:</h3>
 
```shell
 npm i validador-gerador-rg
```

<h3>Importanto as classes:</h3>

 ```js
 const { ValidadorRG, GeradorRG} = require("validador-gerador-rg")
```

 - ValidadorRG(): Essa classe recebe um RG como argumento e precisa ter o método valida() chamado para validar o RG. Exemplo:

  ```js
 const valido = new ValidadorRG('00000000000').valida()
```
  - GeradorRG: Essa classe irá gerar um novo RG através do método gerarRg().

  ```js
 const rg = new GeradorRG().gerarRg()
 ```