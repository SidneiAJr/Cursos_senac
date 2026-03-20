 let inputTexto = document.getElementById('inputTexto');
        let textoMostrar = document.getElementById('textoMostrar');

        // Adiciona o evento 'keyup' ao input
        inputTexto.addEventListener('keyup', function() {
            // Atualiza o conteúdo do parágrafo com o texto do input
            textoMostrar.textContent = inputTexto.value;
        });
