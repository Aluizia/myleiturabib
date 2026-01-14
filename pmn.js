
  const prmn = document.querySelectorAll(".pmn");

  prmn.forEach((pmn, index) => {
    // restaura estado salvo
    const corSalva = localStorage.getItem("pmn_" + index);
    if (corSalva) {
      pmn.style.backgroundColor = corSalva;
    }

    pmn.addEventListener("click", () => {
      const corAtual = pmn.style.backgroundColor;
      const novaCor = pmn.dataset.cor;

      if (corAtual === novaCor) {
        pmn.style.backgroundColor = "gray";
        localStorage.removeItem("pmn_" + index);
      } else {
        pmn.style.backgroundColor = novaCor;
        localStorage.setItem("pmn_" + index, novaCor);
      }
    });
  });
