
**Unidade 1 - HTML:**
[\# 01 - Apresentação da Disciplina (10/05/2018)](#-01---apresentação-da-disciplina-10052018)<br>
[\# 02 - Introdução a HTML e ferramentas (17/05/2018)](#-02---introdução-a-html-e-ferramentas-17052018)<br>
[\# 03 - Gerenciando listas e tabelas (24/05/2018)](#-03---gerenciando-listas-e-tabelas-24052018)<br>
[\# 04 - Adicionando Links (07/06/2018)](#-04---adicionando-links-07062018)<br>
[\# 05 - Adicionando imagens, áudios e vídeos (14/06/2018)](#-05---adicionando-imagens-áudios-e-vídeos-14062018)<br>
[\# 06 - Criando formulários (12/07/2018)](#-06---criando-formulários-12072018)<br>

**Unidade 2 - CSS:**

[\# 07 - Introdução ao Cascade Style Sheet (CSS) (25/07/2018)](#-07---introdução-ao-cascade-style-sheet-css-25072018)<br>
[\# 08 - Estilizando Texto (09/08/2018)](#-08---estilizando-texto-09082018)<br>
[\# 09 - Simulado CSS (16/08/2018)](#-09---simulado-css-16082018)<br>
[\# 10 - Componentes Web (30/08/2018)](#-10---componentes-web-30082018)

**Unidade 3 - Javascript:**

[\# 11 - Introdução a Javascript (29/08/2018)](#-11---introdução-a-javascript-30082018)<br>
[\# 12 - Javascript (objetos e arrays) (06/08/2018)](#-12-javascript-objetos-e-arrays-06082018)<br>

## \# 01 - Apresentação da Disciplina (10/05/2018)
---
**Conteúdo:**
- [Apresentação da disciplina](https://github.com/ifpb/intin-topicos/):
  - Objetivo, conteúdo, avaliação, comunicação, bibliografia e ferramentas
- [Slides](https://github.com/ifpb/intin-topicos/blob/master/assets/slides/topicos-01.pdf)

## \# 02 - Introdução a HTML e ferramentas (17/05/2018)
---
**Conteúdo:**
- Editando HTML com o [Atom](https://atom.io/) e visualizando com o Google Chrome (https://www.google.com/chrome/)
- Trabalhando com html na prática
  - Conceitos básicos
  - Estrutura básica
    - Cabeçalho e Corpo
- Metadados
  - Título da página
  - Encoding e UTF-8
- Elementos/tags
  - Títulos (h1, h2, h3, ...)
  - Parágrafos
  - Negrito e Itálico
- [Referências dos Elementos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)

**Exercício:**
- Criando a primeira página Web (cantina do IFPB)

## \# 03 - Gerenciando listas e tabelas (24/05/2018)
---
**Conteúdo:**
- Listas `<ol>`, `<ul>`, `<dl>`
  - Definição, Ordenada, Não ordenado
  - Lista aninhada
- Tabelas
  - Definição de linhas `<tr>` e colunas `<td>`
  - Colunas de cabeçalho `<th>`
  - Mesclando linhas com `rowspan` e colunas com `colspan`
- [Slides](https://github.com/ifpb/intin-topicos/blob/master/assets/slides/topicos-02.pdf)

**Exercício:**
- Criando página da disciplina com lista de itens
- Adicionando cronograma da disciplina como tabela

## \# 04 - Adicionando Links (07/06/2018)
---
- Estrutura e características de um hyperlink
- Definição e estrutura de uma URL (Uniform Resource Identifier)
- Elementos no nível em linha (`inline`) e bloco (`block`)
- Abrindo links em uma nova janela (atributo target=`_blank`)
- Apontando para endereços absolutos e relativos
- Trabalhando com âncoras internas dentro de uma página

## \# 05 - Adicionando imagens, áudios e vídeos (14/06/2018)
---
**Conteúdo:**
- [Imagem `<img>`, `<figure>`, `<figcaption>`](../guides/imagens-e-midias)
  - Imagem dentro (Data URI), próximo ou distante do HTML
    - Custos e benefícios
  - Atributos: `src`, `alt`, `width`, `title`
  - Imagem com link

## \# 06 - Criando formulários (12/07/2018)
---
- [Campos de formulário](../guides/formularios)
  - Campos de texto, data, email, número
  - Campos de seleção (checkbox, radio, combobox)
  - Atributos de validação (`required`)
  - Botões de ação
- Criando um formulário básico

## \# 07 - Introdução ao Cascade Style Sheet (CSS) (25/07/2018)
---
**Conteúdo:**
- [Cascade Style Sheet (CSS)](https://ifpb.github.io/css-guide/css/)
  - [Origem do CSS](https://ifpb.github.io/css-guide/css/problem)
  - [Declarações do CSS](https://ifpb.github.io/css-guide/css/stylesheets/): local (`style=""`), interna ([`<style>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)), externa ([`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link))
  - Sintaxe do CSS
    - [Propriedades](https://ifpb.github.io/css-guide/css/property/):
      - Texto & Fonte
        - `color`
        - `font-size`
    - [Seletores básicos](https://ifpb.github.io/css-guide/css/selector/):
      - tipo (`elementname`)
        - Agrupamentos com [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) e [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
      - id (`#idname` e `id=""`)
      - classe (`.classname` e `class=""`)
      - Múltiplas classes `.classA.classB`

**Reflexão:**
* O que é uma Linguagem de Estilo?
* O que é e como funciona o CSS?
* Quais são os possíveis locais que o CSS pode existir junto com o HTML?
* Qual a relação do atributo global `class` e `id` com o CSS?
* Qual é a composição da sintaxe do CSS?
* Qual é o benefício de definir mais de uma classe à um elemento?

**Exercício:**
* [Criando seu primeiro estilo](https://ifpb.github.io/css-exercises/css/hello-world-css/)

## \# 08 - Box model (02/08/2018)

**Conteúdo:**
- [Box model](https://ifpb.github.io/css-guide/css/box-model/)

**Reflexão:**
* O que é box model? Como um box pode ser exibido no navegador?
* Por que o W3C considera os elementos HTML [deste link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics) como inline?
* Existe alguma exceção de elemento inline que permite definir largura?
* Quais estilos podemos aplicar em um Box?
* É possível personalizar o estilo de alguma borda específica? Por exemplo, a borda inferior? E no chrome, como é calculado o `em` para margens?
* Como centralizamos um parágrafo de largura pré-definida?
* Qual é a melhor maneira de definir altura de um Box sem gerar problemas de alinhamento vertical?
* É possível deixar uma borda arredonda nas quinas?
* Como funcionar a sombra para um Box?
* Como apresentar uma tabela em uma grid contínua sem espaçamento entre as bordas?

**Exercício:**
* Analise o Box Model [desses títulos](https://ifpb.github.io/css-guide/css/box-model/).
* Exemplo de layout


## \# 08 - Estilizando Texto (09/08/2018)

**Conteúdo:**
- [Estilizando Texto](https://ifpb.github.io/css-guide/css/typography/) ([Texto e fonte](https://ifpb.github.io/css-guide/css/typography.html#text-and-font), [Alinhamento de Texto](https://ifpb.github.io/css-guide/css/typography.html#text-layout))
- [Estilizando links](https://ifpb.github.io/css-guide/css/hyperlink/)
  - pseudo-class selector: `:hover`, `:link`, `:active`, `:visited`, `:focus`
  - [Web Fontes](https://ifpb.github.io/css-guide/css/web-font/)
- [Ícones](https://ifpb.github.io/css-guide/css/icon/)

**Reflexão:**
* Quais são os estilos de alinhamento e aparência para fonte?
* Na propriedade `font-family`, qual é a diferença entre `<family-name>` e `<generic-family>`?
* Se não for definido nenhum `<family-name>` a um elemento, qual será a `<family-name>` atribuída por default?
* O que acontece se o `<family-name>` não possuir a fonte instalada no computador?
* Qual é a recomendação para se difinir uma propriedade `font-family`?
* Em relação ao valor `<length>`, qual a diferança entre unidades de medida relativa e absoluta? Que propriedades de texto recebem esse valor?
* Como funciona a sombra para um texto?
* Como estilizamos um hyperlink?

**Exercício:**
* Criando o [Curriculum Vitae com Estilo](https://github.com/ifpb/intin-topicos/blob/master/exercicios/1-CSS/1.md)

## \# 09 - Simulado CSS (16/08/2018)
**Reflexão:**
  - O que é possível fazer com o HTML e CSS até o momento?

** Exercício:**
  - Simulado:
   - [Profile Simples](https://ifpb.github.io/intin-topicos/desafios/perfil-pessoal/)

## \# 10 - Componentes Web (30/08/2018)
**Conteúdo:**
- [CSS Packages](https://ifpb.github.io/css-guide/packages/)
  - [Bootstrap](https://ifpb.github.io/css-guide/packages/bootstrap/)
  - [Materialize](http://materializecss.com)
  - [Bulma](https://bulma.io)

**Reflexão:**
* Qual é a finalidade de bibliotecas como o Bootstrap?
* Como funciona o layout do Bootstrap usando o Grid System?

**Exercício:**
* Analise algum template do repositório [Start Bootstrap](https://startbootstrap.com/template-categories/all/).
* Crie alguma página básica usando o Bootstrap.

**Planejar projeto da disciplina**

## \# 11 - Introdução a Javascript (30/08/2018)
**Conteúdo:**
  - Primeiros passos com Javascript
  - Visão geral da linguagem: tipos de dados, variáveis, sintaxe, operadores, estrutura.
  - [Slides](https://slides.com/diegoep/javascript-1/#/)

## \# 12 - Javascript (objetos e arrays) (06/08/2018)
**Conteúdo:**
  - Criação e manipulação de arrays
  - Criação e manipulação de objetos
  - Funções utilitárias
  - [Slides](https://slides.com/diegoep/javascript-2/#/)
