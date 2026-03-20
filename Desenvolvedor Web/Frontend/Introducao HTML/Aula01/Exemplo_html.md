# Codigo HTML:

```html
<!-- Define o tipo de documento como HTML5 -->
<!DOCTYPE html>
<html lang="en"> <!-- Define o idioma da página como inglês (poderia ser "pt-br" para português) -->

<head>
    <!-- Define o conjunto de caracteres (UTF-8 cobre quase todos os caracteres usados no mundo) -->
    <meta charset="UTF-8">
    
    <!-- Garante que a página se adapte bem em dispositivos móveis (responsividade) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Título da aba do navegador -->
    <title>Pagina 1</title>

    <!-- Link externo para o arquivo de estilos CSS (style.css) -->
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- Menu de navegação com lista horizontal (usando CSS Flexbox) -->
    <ul>
        <li>Inicio</li>
        <li>Informação</li>
        <li>Teste</li>
        <li>Inicio</li> <!-- Duplicado, talvez por engano? -->
    </ul>

    <!-- Container principal com espaçamento (classe "a") -->
    <div class="a">

        <!-- Caixa de conteúdo com efeito de vidro (glassmorphism) usando a classe "b" -->
        <div class="b">
            <!-- Título principal da seção -->
            <h1>Olá Bem vindo</h1>

            <!-- Parágrafo com texto de exemplo (Lorem Ipsum) -->
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni molestias veniam, architecto
                consequatur reiciendis, nulla quibusdam odio tenetur reprehenderit quaerat sapiente modi explicabo
                necessitatibus doloribus eaque velit, impedit assumenda.</p>

            <!-- Imagem centralizada com tamanho fixo definido no CSS -->
            <img src="../a.jpg" alt="Imagem" srcset="">
            <!-- 
                src="../a.jpg" → Caminho da imagem (volta uma pasta)
                alt="Imagem" → Descrição alternativa (boa prática para acessibilidade)
                srcset → Atributo para imagens responsivas (está vazio aqui)
            -->

            <!-- Subtítulo da seção -->
            <h2>Hobbies</h2>
        </div>
    </div>
</body>

</html>

```
