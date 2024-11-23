fetch("data/events.json")
  .then(response => response.json())
  .then(events => {
    const eventsContainer = document.getElementById("events-container");

    events.forEach(event => {
      const card = `
          <div class="card mb-4 shadow-sm" style="width: 18rem;">
            <img src="${event.url}" class="card-img-top" alt="${event.evento}" />
            <div class="card-body text-center">
              <h5 class="card-title">${event.evento}</h5>
              <p class="card-text text-muted">${event.ciudad}</p>
            </div>
            <div class="card-footer footer-events-card">
              <button class="btn btn-primary see-events-btn">Ver eventos</button>
            </div>
          </div>
          `;

      eventsContainer.innerHTML += card;
    });
  })
  .catch(error => console.error("Error al cargar los events:", error));