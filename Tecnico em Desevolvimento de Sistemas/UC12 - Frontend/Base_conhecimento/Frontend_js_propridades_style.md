# Todas as propriedades de style no JavaScript (DOM)

## 📌 Cores e Fundo (Background)
```js
elemento.style.backgroundColor = "red"           // cor de fundo
elemento.style.backgroundImage = "url('...')"    // imagem de fundo
elemento.style.backgroundSize = "cover"          // tamanho: cover, contain, 100%
elemento.style.backgroundPosition = "center"     // posição: center, top, left
elemento.style.backgroundRepeat = "no-repeat"    // repetir: repeat, no-repeat
elemento.style.backgroundAttachment = "fixed"    // fixo ou scroll
elemento.style.background = "linear-gradient(red, blue)" // gradiente
```
## 🎨 Cores de Texto e Bordas
```js
elemento.style.color = "#fff"                    // cor do texto
elemento.style.borderColor = "blue"              // cor da borda
elemento.style.border = "2px solid red"          // borda completa
elemento.style.borderRadius = "10px"             // borda arredondada
elemento.style.outlineColor = "yellow"           // cor do contorno
```
## 📏 Tamanhos e Dimensões
```js
elemento.style.width = "300px"                   // largura
elemento.style.height = "200px"                  // altura
elemento.style.maxWidth = "100%"                 // largura máxima
elemento.style.maxHeight = "500px"               // altura máxima
elemento.style.minWidth = "100px"                // largura mínima
elemento.style.minHeight = "50px"                // altura mínima
```

## 📍 Posicionamento e Layout
```js
elemento.style.position = "absolute"             // absolute, relative, fixed, sticky
elemento.style.top = "10px"                      // posição superior
elemento.style.bottom = "20px"                   // posição inferior
elemento.style.left = "30px"                     // posição esquerda
elemento.style.right = "40px"                    // posição direita
elemento.style.zIndex = "999"                    // camada (sobreposição)
elemento.style.display = "flex"                  // flex, block, none, grid
elemento.style.visibility = "hidden"             // hidden, visible
elemento.style.opacity = "0.5"                   // transparência (0 a 1)
```
## 🧹 Margens e Espaçamentos
```js
elemento.style.margin = "10px"                   // margem externa (todos lados)
elemento.style.marginTop = "5px"                 // margem superior
elemento.style.marginBottom = "15px"             // margem inferior
elemento.style.marginLeft = "8px"                // margem esquerda
elemento.style.marginRight = "12px"              // margem direita
elemento.style.padding = "10px"                  // espaçamento interno
elemento.style.paddingTop = "5px"                // padding superior
elemento.style.paddingBottom = "10px"            // padding inferior
```
## ✍️ Fontes e Texto
```js
elemento.style.fontSize = "16px"                 // tamanho da fonte
elemento.style.fontFamily = "Arial, sans-serif"  // tipo da fonte
elemento.style.fontWeight = "bold"               // negrito: bold, normal, 700
elemento.style.fontStyle = "italic"              // itálico: italic, normal
elemento.style.textAlign = "center"              // center, left, right, justify
elemento.style.textDecoration = "underline"      // underline, overline, none
elemento.style.textTransform = "uppercase"       // uppercase, lowercase, capitalize
elemento.style.lineHeight = "1.5"                // altura da linha
elemento.style.letterSpacing = "2px"             // espaçamento entre letras
elemento.style.wordSpacing = "5px"               // espaçamento entre palavras
elemento.style.textShadow = "2px 2px 4px black"  // sombra no texto
```

## 🎭 Filtros e Efeitos Visuais
```js
elemento.style.filter = "brightness(1.5)"        // brilho (0 a 2)
elemento.style.filter = "contrast(200%)"         // contraste
elemento.style.filter = "blur(5px)"              // desfoque
elemento.style.filter = "grayscale(100%)"        // preto e branco
elemento.style.filter = "sepia(100%)"            // efeito sépia
elemento.style.filter = "hue-rotate(90deg)"      // rotação de cor
elemento.style.filter = "saturate(200%)"         // saturação
elemento.style.filter = "invert(100%)"           // inverter cores
elemento.style.filter = "drop-shadow(5px 5px 5px black)" // sombra
// Combinar vários filtros:
elemento.style.filter = "brightness(1.2) contrast(150%) blur(2px)"
```

## 🔄 Transformações (CSS Transform)
```js
elemento.style.transform = "rotate(45deg)"       // rotacionar
elemento.style.transform = "scale(1.5)"          // aumentar tamanho
elemento.style.transform = "scaleX(2)"           // aumentar largura
elemento.style.transform = "scaleY(0.5)"         // diminuir altura
elemento.style.transform = "translateX(50px)"    // mover horizontal
elemento.style.transform = "translateY(30px)"    // mover vertical
elemento.style.transform = "skew(10deg)"         // inclinar
// Combinar transformações:
elemento.style.transform = "rotate(10deg) scale(1.2) translateX(20px)"
elemento.style.transition = "all 0.5s ease"      // animação suave
```

##📦 Flexbox (para layouts flexíveis)
```js
elemento.style.display = "flex"
elemento.style.flexDirection = "row"             // row, column, row-reverse
elemento.style.justifyContent = "center"         // center, space-between, flex-start
elemento.style.alignItems = "center"             // center, flex-start, stretch
elemento.style.gap = "10px"                      // espaçamento entre itens
elemento.style.flexWrap = "wrap"                 // wrap, nowrap
```

🧱 Grid Layout
```js
elemento.style.display = "grid"
elemento.style.gridTemplateColumns = "1fr 1fr 1fr"  // 3 colunas iguais
elemento.style.gridTemplateRows = "100px auto"      // linhas
elemento.style.gap = "15px"                         // espaçamento
```

##📜 Scroll e Overflow
```js
elemento.style.overflow = "auto"                 // auto, hidden, scroll, visible
elemento.style.overflowX = "scroll"              // scroll horizontal
elemento.style.overflowY = "hidden"              // esconder vertical
elemento.style.scrollBehavior = "smooth"         // scroll suave
```

🖱️ Cursor e Interação
```js
elemento.style.cursor = "pointer"                // mãozinha
elemento.style.cursor = "grab"                   // mão de arrastar
elemento.style.cursor = "not-allowed"            // proibido
elemento.style.cursor = "wait"                   // carregando
elemento.style.cursor = "zoom-in"                // lupa +
elemento.style.userSelect = "none"               // impede seleção de texto
elemento.style.pointerEvents = "none"            // desativa clique
```

📦 Box Shadow (sombra em caixa)
```js
elemento.style.boxShadow = "5px 5px 10px rgba(0,0,0,0.3)"  // offset-x offset-y blur cor
elemento.style.boxShadow = "inset 0 0 10px red"            // sombra interna
```
