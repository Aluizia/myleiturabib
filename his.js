const history  = document.querySelectorAll(".his");

  history .forEach((his, index) => {
    // restaura estado salvo
    const corSalva = localStorage.getItem("his_" + index);
    if (corSalva) {
      his.style.backgroundColor = corSalva;
    }

    his.addEventListener("click", () => {
      const corAtual = his.style.backgroundColor;
      const novaCor = his.dataset.cor;

      if (corAtual === novaCor) {
        his.style.backgroundColor = "gray";
        localStorage.removeItem("his_" + index);
      } else {
        his.style.backgroundColor = novaCor;
        localStorage.setItem("his_" + index, novaCor);
      }
    });
  });
