// Seleciona o elemento a ser observado
const box = document.querySelector('.box');

// Cria o observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Adiciona a classe que inicia a animação
      entry.target.classList.add('visible');

      // Para observar apenas uma vez:
      observer.unobserve(entry.target);
    }
  });
});

box.forEach(box=>{
    observer.observe(box);
})


