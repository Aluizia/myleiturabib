const evang = document.querySelectorAll(".eva");

  evang.forEach((eva, index) => {
    // restaura estado salvo
    const corSalva = localStorage.getItem("eva_" + index);
    if (corSalva) {
      eva.style.backgroundColor = corSalva;
    }

    eva.addEventListener("click", () => {
      const corAtual = eva.style.backgroundColor;
      const novaCor = eva.dataset.cor;

      if (corAtual === novaCor) {
        eva.style.backgroundColor = "gray";
        localStorage.removeItem("eva_" + index);
      } else {
        eva.style.backgroundColor = novaCor;
        localStorage.setItem("eva_" + index, novaCor);
      }
    });
  });
