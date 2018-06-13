# Imagens e Multimídia

* [Image URL](#image-url)
* [Raster vs Vector](#raster-vs-vector)
* [Data URI](#data-uri)
* [Image + Hyperlink](#image--hyperlink)
* [Figure](#figure)

## Adicionando imagens - estrutura básica
---

```html
<img src="url" alt="text alternative">
```

## Entendendo as URLs de imagens
---

**Cenário #1: index.html ➡︎ imagem.png**
```
/
└── var
    └── www
        └── site
            └── pages
                ├── index.html
                └── imagem.png
```

```html
<img src="imagem.png" alt="Descrição da imagem">
<img src="./imagem.png" alt="Descrição da imagem">
<img src="/pages/imagem.png" alt="Descrição da imagem"> (http)
<img src="http://site.com/pages/imagem.png" alt="Descrição da imagem"> (http)
<img src="/var/www/site/pages/imagem.png" alt="Descrição da imagem"> 👎
```

**Cenário #2: index.html ➡︎ img/imagem.png**
```
/
└── var
    └── www
        └── site
            └── pages
                ├── index.html
                └── img
                    └── imagem.png
```

```html
<img src="img/imagem.png" alt="Image Description">
<img src="./img/imagem.png" alt="Image Description">
<img src="/pages/img/imagem.png" alt="Image Description"> (http)
<img src="http://site.com/pages/img/imagem.png" alt="Image Description"> (http)
<img src="/var/www/site/pages/img/imagem.png" alt="Image Description"> 👎
```

**Cenário #3: pages/index.html ➡︎ img/imagem.png**
```
/
└── var
    └── www
        └── site
            ├── pages
            |   └── index.html
            └── img
                └── image.png
```

```html
<img src="../img/imagem.png" alt="Image Description">
<img src="/img/imagem.png" alt="Image Description"> (http)
<img src="http://site.com/img/imagem.png" alt="Image Description"> (http)
<img src="/var/www/site/img/imagem.png" alt="Image Description"> 👎
```

**Cenário 4: home.html ➡︎ image.png**
```
(/var/www/site = http://site.com/)
/
└── var
    └── www
        └── site
            └── home.html

(/var/www/site = http://othersite.com/)
/
└── var
    └── www
        └── site
            └── img
                └── image.png
```

```html
<img src="http://othersite.com/img/image.png" alt="Image Description"> (http)
```

## Raster vs Vetor
---

### PNG (Raster)
**width: 150px**<br>
<img src="assets/ifpb-logo.png" alt="logo ifpb" width="150px">

**width: 2000px**
<div style="width: 200px; height: 200px; background-image: url('assets/ifpb-logo.png'); background-size: 2000px;"></div>

### SVG (Vetor)
**width: 150px**<br>
<img src="assets/ifpb-logo.svg" alt="logo ifpb" width="150px">

**width: 2000px**
<div style="width: 200px; height: 200px; background-image: url('assets/ifpb-logo.svg'); background-size: 2000px;"></div>

## Imagens + Links
---

```html
<a href="url">
  <img src="url" alt="texto alternativo">
</a>
```

```html
<a href="http://ifpb.edu.br/">
  <img src="ifpb.png" alt="logo IFPB">
</a>
```

Saída:

<div style="border-radius: 0.3rem;background-color: #f3f6fa;border: solid 1px #dce6f0; padding: 0.8rem">
  <a href="http://ifpb.edu.br/">
    <img src="assets/ifpb.png" alt="logo IFPB">
  </a>
</div>

## [&lt;figure>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)


## Referências
---

* Elementos:
  * [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
  * [`<figure>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
* Atributos:
  * [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes): `src`, `alt`, `title`, `width`, `height`
