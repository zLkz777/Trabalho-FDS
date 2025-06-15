const mensagens = [
  "Hoje é um ótimo dia para aprender algo novo!",
  "Nunca desista dos seus sonhos!",
  "A prática leva à perfeição!",
  "Você está indo muito bem, continue assim!",
  "A programação é uma habilidade valiosa para o futuro!"
];

function mostrarmensagem() {
  const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  alert(mensagemAleatoria);
}

document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
