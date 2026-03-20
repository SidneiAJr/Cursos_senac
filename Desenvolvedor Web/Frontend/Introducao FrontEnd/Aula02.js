// Função para esconder ou mostrar um elemento
function esconder() {
    let documento = document.getElementById("info");

    if (documento.style.display === "none") {
        documento.style.display = "block"; // Mostrar
    } else {
        documento.style.display = "none"; // Esconder
    }
}
// Seleciona a <div> com a classe 'b' (e id 'colorBox')
let colorBox = document.getElementById("colorBox");

// Adiciona o evento 'mouseover' para mudar a cor para azul
colorBox.addEventListener("mouseover", function() {
    colorBox.style.backgroundColor = "blue";
});

// Adiciona o evento 'mouseout' para voltar para a cor cinza
colorBox.addEventListener("mouseout", function() {
    colorBox.style.backgroundColor = "gray";
});

// Seleciona o input e o parágrafo
        let inputTexto = document.getElementById('inputTexto');
        let textoMostrar = document.getElementById('textoMostrar');

        // Adiciona o evento 'keyup' ao input
        inputTexto.addEventListener('keyup', function() {
            // Atualiza o conteúdo do parágrafo com o texto do input
            textoMostrar.textContent = inputTexto.value;
        });


function adicionar() {
            // Pega o valor digitado no campo de texto
            var tarefa = document.getElementById('tarefa').value;

            // Verifica se o campo não está vazio
            if (tarefa.trim() !== '') {
                // Cria um novo item da lista (li)
                let li = document.createElement('li');
                li.textContent = tarefa;

                // Adiciona o <li> à lista (<ul>)
                document.getElementById('listaTarefas').appendChild(li);

                // Limpa o campo de texto após adicionar a tarefa
                document.getElementById('tarefa').value = '';
            } else {
                alert("Digite uma tarefa válida!");
            }
}

function mudartema() {
            // Alterna entre as classes "claro" e "escuro"
            document.body.classList.toggle('escuro');
            document.body.classList.toggle('claro');
        }
