Desenvolva uma ferramenta para contabilizar a quantidade de Pokemons que um jogador falta adquirir em sua Pokedex. Então, recebe a lista de Pokemons e retorne dos 151 disponíveis quantos faltam ser capturados.

Por exemplo, se um jogador capturou os Pokemons `Zubat, Pikachu, Pikachu`, então, ao retirar a duplicidades percebe-se que faltam capturar `149` Pokemons, que seria `total - capturado` ou nesse caso `151 - 2`.

Para analisar mais exemplos veja a _Tabela 2.1_.

_Tabela 2.1:_

| Entrada                                                       | Saída |
| ------------------------------------------------------------- | ----- |
| `Zubat`                                                       | `150` |
| `Zubat, Pikachu, Pikachu`                                     | `149` |
| `Zubat, Zubat, Zubat, Zubat, Zubat, Zubat, Zubat, Zubat`      | `150` |
| `Zubat, Charmander, Caterpie, Pidgeot`                        | `147` |
| `Charmander, Caterpie, Pidgeot, Rattata, Zubat, Zubat, Zubat` | `146` |
| `Jiraya, Goku, Seiya, Agumon` | `151` |


Para auxiliar a reconhecer o nome dos pokemons, considere a seguinte arquivo:
https://github.com/ifpb/intin-topicos/blob/master/desafios/pokedex/code/data/pokedex.json

- A entrada (nomes dos pokemons capturados) deverá ser fornecida através de um formulário (Pode ser um campo único separado por vírgula ou vários campos de texto com a opção de adicionar novos ou até mesmo um campo de seleção múltipla)
- Caso mais de um pokemon de mesmo nome seja capturado, ele só substrairá um do total.  
- Ao fornecer a informação de um pokemon capturado, deverá ser validado se ele realmente existe (a partir dos dados do JSON)

## Envio
Assim que terminar a prova, chame o professor.

O arquivo deverá ser submetido como resposta para a atividade:
https://classroom.google.com/u/4/c/MzYyODczNTk4NDJa/a/Mzc3MjM0MDU3Mzha/details
