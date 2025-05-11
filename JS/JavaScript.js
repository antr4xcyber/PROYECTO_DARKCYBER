// ###########################################################################################################################
// ###########################################################################################################################
// ###########################################################################################################################


// FUNCIONALIDAD DEL POPUP CON LAS COOKIES DE LA WEB

// añade al documento un EventListener para que cuando el DOM se haya cargado, ejecute lo siguiente:

document.addEventListener("DOMContentLoaded", function () {

  // Espera 1,5 segundos antes de mostrar el popup
  setTimeout(function () {

    // Verifica si ya se ha elegido aceptar o rechazar las cookies
    if (!localStorage.getItem("cookiesDecision")) {
      // Crea el div del popup
      const popup = document.createElement("div");
      popup.id = "cookie-popup";
      // le asignamos el id cookie-popup

      // Inserta el contenido HTML del popup de las cookie
      popup.innerHTML = `
        <div class="cookie-box">
          <p>Este sitio web utiliza cookies para mejorar la experiencia del usuario y recopilar datos para la mejora de nuestros servicios. <a href="../html/politica_cookies.html">Más información</a>.</p>
          <div class="cookie-actions">
            <button id="accept-cookies" class="cookie-btn accept">Aceptar</button>
            <button id="reject-cookies" class="cookie-btn reject">Rechazar</button>
          </div>
        </div>
      `;
      // aqui se define el codigo html que se verá al cargar el script


      // Añade el popup al final del body de la página web
      document.body.appendChild(popup);

// Eventos para almacenar los resultados de la eleccion de los usuarios en las cookies

      // BUTTON Aceptar
      document.getElementById("accept-cookies").addEventListener("click", function () {
        localStorage.setItem("cookiesDecision", "accepted");
        popup.remove(); // Elimina el popup
        window.location.href = "../html/DARKTRACE.html"
      });

      // BUTTON Rechazar
      document.getElementById("reject-cookies").addEventListener("click", function () {
        localStorage.setItem("cookiesDecision", "rejected");
        popup.remove(); // Elimina el popup
        window.location.href = "https://www.google.com" //abre la ventana indicada
      });
    }
  }, 1500); // 1500 ms = 1,5 segundos
});


// ###########################################################################################################################
// ###########################################################################################################################
// ###########################################################################################################################