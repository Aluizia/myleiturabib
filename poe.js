const poet = document.querySelectorAll(".poe");

  poet.forEach((poe, index) => {
    // restaura estado salvo
    const corSalva = localStorage.getItem("poe_" + index);
    if (corSalva) {
      poe.style.backgroundColor = corSalva;
    }

    poe.addEventListener("click", () => {
      const corAtual = poe.style.backgroundColor;
      const novaCor = poe.dataset.cor;

      if (corAtual === novaCor) {
        poe.style.backgroundColor = "gray";
        localStorage.removeItem("poe_" + index);
      } else {
        poe.style.backgroundColor = novaCor;
        localStorage.setItem("poe_" + index, novaCor);
      }
    });
  });
