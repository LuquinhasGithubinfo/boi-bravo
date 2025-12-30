// Pequenas melhorias futuras (scroll suave, analytics, etc.)
console.log("Boi Bravo site carregado com sucesso.");

function scrollParaBaixo() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}
