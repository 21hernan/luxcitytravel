// Activar menú en móviles al tocar el logo
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', function(e) {
      const container = this.closest('.logo-container');
      container.classList.toggle('active');
      e.stopPropagation();
    });
  });

  // Cerrar menú si se toca fuera
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.logo-container')) {
      document.querySelectorAll('.logo-container').forEach(container => {
        container.classList.remove('active');
      });
    }
  });
});