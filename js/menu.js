document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.logo-container').forEach(container => {
    const menu = container.querySelector('.menu');
    let hideTimer = null;

    const showMenu = () => {
      if (hideTimer) clearTimeout(hideTimer);
      menu.classList.add('visible');
    };

    const hideMenu = () => {
      hideTimer = setTimeout(() => {
        menu.classList.remove('visible');
      }, 500); // 0.5 segundos de gracia
    };

    // Mostrar al entrar al contenedor
    container.addEventListener('mouseenter', showMenu);
    // Ocultar al salir del contenedor
    container.addEventListener('mouseleave', hideMenu);

    // Prevenir cierre si el mouse vuelve rápido
    menu.addEventListener('mouseenter', showMenu);
    menu.addEventListener('mouseleave', hideMenu);
  });

  // === Funcionalidad móvil ===
  document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', function (e) {
      const container = this.closest('.logo-container');
      container.classList.toggle('active-mobile');
      e.stopPropagation();
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.logo-container')) {
      document.querySelectorAll('.logo-container').forEach(container => {
        container.classList.remove('active-mobile');
      });
    }
  });
});