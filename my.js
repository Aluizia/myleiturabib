  const boto = document.querySelectorAll(".bot");

  boto.forEach((bot, index) => {
    // restaura estado salvo
    const corSalva = localStorage.getItem("bot_" + index);
    if (corSalva) {
      bot.style.backgroundColor = corSalva;
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

