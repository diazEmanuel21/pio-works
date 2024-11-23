document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#carouselExampleSlidesOnly");
    const circleProgress = document.querySelector(".circle-progress");
    const carouselInterval = 5000; // Cambiar cada 5 segundos
    const circumference = 2 * Math.PI * 20; // Radio: 20
  
    // Configurar el círculo
    circleProgress.style.strokeDasharray = `${circumference}`;
    circleProgress.style.strokeDashoffset = `${circumference}`;
  
    // Evento de cambio del carrusel
    carousel.addEventListener("slide.bs.carousel", () => {
      resetProgress();
    });
  
    function resetProgress() {
      // Reiniciar la animación del círculo de progreso
      circleProgress.style.transition = "none";
      circleProgress.style.strokeDashoffset = `${circumference}`;
      setTimeout(() => {
        circleProgress.style.transition = `stroke-dashoffset ${carouselInterval}ms linear`;
        circleProgress.style.strokeDashoffset = `0`;
      }, 50);
    }
  
    // Iniciar progreso al cargar la página
    resetProgress();
  });