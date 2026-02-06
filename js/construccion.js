// construccion.js
(function() {
  // Si ya existe, no duplicar
  if (document.getElementById('construccion-script')) return;

  // Crear estilo
  const style = document.createElement('style');
  style.textContent = `
    #construccion {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      color: white;
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      padding: 2rem;
    }
  `;
  document.head.appendChild(style);

  // Crear cartel
  const cartel = document.createElement('div');
  cartel.id = 'construccion';
  cartel.innerHTML = `
    <div>
      <p>🚧 Página en construcción</p>
      <p style="font-size: 1.2rem; margin-top: 0.5rem;">Espere unos segundos...</p>
    </div>
  `;
  document.body.appendChild(cartel);

  // Mostrar y ocultar
  setTimeout(() => {
    cartel.style.display = 'none';
  }, 3000);

  // Marcar como cargado
  const marker = document.createElement('div');
  marker.id = 'construccion-script';
  marker.style.display = 'none';
  document.body.appendChild(marker);
})();