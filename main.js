
  const botoes = document.querySelectorAll(".botao");

  botoes.forEach((botao, index) => {
    // restaura estado salvo
    const corSalva = localStorage.getItem("botao_" + index);
    if (corSalva) {
      botao.style.backgroundColor = corSalva;
    }

    botao.addEventListener("click", () => {
      const corAtual = botao.style.backgroundColor;
      const novaCor = botao.dataset.cor;

      if (corAtual === novaCor) {
        botao.style.backgroundColor = "gray";
        localStorage.removeItem("botao_" + index);
      } else {
        botao.style.backgroundColor = novaCor;
        localStorage.setItem("botao_" + index, novaCor);
      }
    });
  });


 const bott = document.querySelectorAll(".bot");

  bott.forEach((bot, index) => {
    // restaura estado salvo
    const corSalva = localStorage.getItem("bot_" + index);
    if (corSalva) {
      botao.style.backgroundColor = corSalva;
    }

    bot.addEventListener("click", () => {
      const corAtual = bot.style.backgroundColor;
      const novaCor = bot.dataset.cor;

      if (corAtual === novaCor) {
        bot.style.backgroundColor = "gray";
        localStorage.removeItem("bot_" + index);
      } else {
        bot.style.backgroundColor = novaCor;
        localStorage.setItem("bot_" + index, novaCor);
      }
    });
  });
