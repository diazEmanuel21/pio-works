fetch("data/productos.json")
    .then(response => response.json())
    .then(productos => {
        const productosContainer = document.getElementById("productos-container");

        productos.forEach(producto => {
            const card = `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${producto.url}" class="card-img-top" alt="${producto.nombre}" />
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">
                <strong>Características:</strong><br>
                Tipo de pantalla: ${producto.caracteristicas.tipoPantalla}<br>
                Resolución: ${producto.caracteristicas.resolucion}<br>
                Pulgadas: ${producto.caracteristicas.pulgadas}"<br>
                HDR: ${producto.caracteristicas.HDR}
              </p>
              <p class="card-text"><strong>Precio: $${producto.precio}</strong></p>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-dark">Comprar</button>
            </div>
          </div>
        </div>
      `;

            productosContainer.innerHTML += card;
        });
    })
    .catch(error => console.error("Error al cargar los productos:", error));