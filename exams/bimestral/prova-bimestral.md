# Tópicos Especiais - Prova Bimestral (2º Bimestre)

## Descrição

Uma empresa de artigos Nerd está em busca de profissionais para criar um e-commerce de Action Figures de Pokemons.

A princípio a empresa disponibilizou os dados dos Pokemons no arquivo pokeshop.json e pretende criar uma tela semelhante ao da Figura 1.

*Figura 1 - Layout da Página*
![](layout.png)

Detalhe, a empresa já disponibilizou uma estrutura inicial no arquivo [code.zip](code.zip), e a seguir será descrito alguns componentes para auxiliar a geração dinâmica da página usando as informações do arquivo JSON.

## Componentes
---
**COMPONENTE 1 -** No arquivo JSON existe um Array de Pokemons que possui várias informação como nome, preço e URL da imagem:

```js
[
  {
    "img": "img/001.png",
    "name": "Bulbasaur",
    "price": 1.50
  },
  ...
]
```

Usando esses dados crie uma lista de Pokemons conforme ilustra a *Figura 2*.

*Figura 2 - Lista de Pokemons*<br>
![](list-pokemons.png)

Também considere que o HTML necessário para compor este grid de Pokemons deve possuir uma estrutura, como esta para o Pokemon Bulbasaur:

```html
<div class="pokemon-view">
  <img class="pokemon-view-img" src="img/001.png" alt="Bulbasaur">
  <span class="pokemon-view-name">Bulbasaur</span>
  <span class="pokemon-view-price">R$ 1.50</span>
  <button class="pokemon-view-shop">COMPRAR</button>
</div>
```

**IMPORTANTE-** Crie o CSS de maneira a exibir os cartões de cada Pokemon conforme ilustra a Figura 2. Exiba no mínimo 8 Pokemons.

**COMPONENTE 2 -** Para indicar que a compra está sendo acionado pelo clique do botão `COMPRAR` é exigido que o ícone de carrinho de compra, localizado na parte superior direita, indique quantos Pokemons foram comprados conforme ilustra a *Figura 4*.

*Figura 4 - Adicionando ao carrinho*<br>
![](add-cart.gif)

<br>
<br>
## Entrega:
Submeter arquivo compactado com respostas para o [formulário](https://goo.gl/forms/fpjA3RRyegRJ7w932)
