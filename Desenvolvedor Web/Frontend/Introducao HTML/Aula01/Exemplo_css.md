# Exemplo de CSS:

```css
/* Reset de estilos padrão do navegador para manter consistência */
* {
    margin: 0; /* Remove margem padrão */
    padding: 0; /* Remove espaçamento interno padrão */
    box-sizing: border-box; /* Faz com que padding e border sejam incluídos no total de largura/altura */
    outline: none; /* Remove contornos de foco padrão (ex: em campos de formulário) */
    text-decoration: none; /* Remove sublinhado de links */
    list-style: none; /* Remove bolinhas/números de listas */
}

/* Estilo do corpo da página */
body {
    background: url("https://upload.wikimedia.org/wikipedia/commons/9/9c/Black_hole_representation.gif"); /* Define uma imagem de fundo (buraco negro) */
    background-size: cover; /* A imagem cobre toda a tela, redimensionando automaticamente */
}

/* Estilo para títulos <h1> */
h1 {
    font-size: 35px; /* Tamanho da fonte */
    text-align: center; /* Centraliza o texto */
    font-weight: bolder; /* Deixa o texto bem negrito */
}

/* Estilo para todas as imagens */
img {
    height: 350px; /* Altura fixa */
    width: 350px; /* Largura fixa */
    display: block; /* Torna a imagem um bloco para aplicar margem corretamente */
    margin: 0 auto; /* Centraliza horizontalmente */
}

/* Estilo para os itens de lista (<li>) */
li {
    font-size: 25px; /* Tamanho da fonte */
    font-weight: bolder; /* Negrito */
    gap: 20px; /* Espaço entre elementos (mas não tem efeito direto aqui, pois não é flex/grid) */
}

/* Estilo para a lista (<ul>) */
ul {
    display: flex; /* Deixa os itens lado a lado (horizontalmente) */
    text-align: center; /* Alinha o texto centralizado dentro dos <li> */
    justify-content: space-around; /* Distribui os itens com espaço igual entre eles */
    color: white; /* Cor do texto */
    margin: 2px 2px 2px; /* Margem ao redor da lista */
}

/* Estilo quando o mouse passa sobre os itens da lista (<li>) */
ul li:hover {
    color: black; /* Cor do texto ao passar o mouse */
    font-weight: bolder; /* Texto mais forte */
    background: rgba(255, 255, 255, 0.21); /* Fundo semitransparente (efeito glass) */
    border-radius: 16px; /* Cantos arredondados */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Sombra suave */
    backdrop-filter: blur(5px); /* Efeito de desfoque no fundo */
    -webkit-backdrop-filter: blur(5px); /* Compatibilidade com Safari */
    border: 1px solid rgba(255, 255, 255, 0.3); /* Borda semi-transparente */
    width: 250px; /* Largura do item */
    border-radius: 7px; /* (Redundante, já está definido acima) */
    cursor: pointer; /* Mostra cursor de "link" */
    color: white; /* Sobrescreve o "color: black" anterior (talvez por engano?) */
}

/* Classe .a com muito padding — usada provavelmente como espaçamento ou espaçador */
.a {
    padding: 200px; /* Adiciona um grande espaçamento interno */
}

/* Classe .b com estilo "glassmorphism" */
.b {
    display: flex; /* Torna o elemento um container flexível */
    flex-direction: column; /* Alinha os filhos verticalmente */
    justify-content: center; /* Centraliza verticalmente */
    
    /* Estilo glassmorphism */
    background: rgba(255, 255, 255, 0.21); /* Fundo translúcido */
    border-radius: 16px; /* Cantos arredondados */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Sombra suave */
    backdrop-filter: blur(5px); /* Desfoque no fundo */
    -webkit-backdrop-filter: blur(5px); /* Safari */
    border: 1px solid rgba(255, 255, 255, 0.3); /* Borda semi-transparente */
}

/* Estilo para parágrafos */
p {
    font-size: 30px; /* Tamanho da fonte */
    font-weight: bolder; /* Negrito */
}

/* Estilo de hover para .b (quando passa o mouse em cima) */
.b:hover {
    box-shadow: 
      rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px; /* Várias sombras sobrepostas para efeito de profundidade */
}
```
