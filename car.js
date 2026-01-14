((car, index) => {
    // restaura estado salvo
    const corSalva = localStorage.getItem("car_" + index);
    if (corSalva) {
      car.style.backgroundColor = corSalva;
    }

    car.addEventListener("click", () => {
      const corAtual = car.style.backgroundColor;
      const novaCor = car.dataset.cor;

      if (corAtual === novaCor) {
        car.style.backgroundColor = "gray";
        localStorage.removeItem("car_" + index);
      } else {
        car.style.backgroundColor = novaCor;
        localStorage.setItem("car_" + index, novaCor);
      }
    });
  });