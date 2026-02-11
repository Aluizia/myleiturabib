  
  const prm = document.querySelectorAll(".pm");

  prm.forEach((pm, index) => {
    // restaura estado salvo
    const corSalva = localStorage.getItem("pm_" + index);
    if (corSalva) {
      pm.style.backgroundColor = corSalva;
    }

    pm.addEventListener("click", () => {
      const corAtual = pm.style.backgroundColor;
      const novaCor = pm.dataset.cor;

      if (corAtual === novaCor) {
        pm.style.backgroundColor = "gray";
        localStorage.removeItem("pm_" + index);
      } else {
        pm.style.backgroundColor = novaCor;
        localStorage.setItem("pm_" + index, novaCor);
      }
    });
  });