function mostrarDetalle() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const servicio = servicios.find((s) => s.id === id);
  const contenedor = document.getElementById("detalle");

  if (servicio) {
    // Fondo de pantalla completo
    contenedor.style.backgroundImage = `url('${servicio.image}')`;
    contenedor.style.backgroundSize = "cover";
    contenedor.style.backgroundPosition = "center";
    contenedor.style.backgroundRepeat = "no-repeat";

    // Contenido tipo vidrio/glass
    contenedor.innerHTML = `
      <div class="w-[90%] h-[90%] flex flex-col lg:flex-row bg-[#20533a] bg-opacity-20 backdrop-blur-lg rounded-xl p-2 lg:p-8 text-white flex flex-col gap-4 shadow-lg">
        <img src="${servicio.image}" alt="${servicio.name}" class="lg:max-w-2xl rounded-lg shadow-md"/>
        <div class="lg:px-20 flex flex-col lg:gap-y-8 text-[#FFFFFF]">
          <h2 class="text-2xl lg:text-4xl font-bold">${servicio.name}</h2>
          <p class="text-xl lg:text-2xl font-semibold">${servicio.detalle}</p>
          <p class="text-base lg:text-xl">${servicio.descripcion}</p>
          <p class="text-base lg:text-xl"><strong class="text-xl lg:text-2xl">Cómo se realiza:</strong> ${servicio.comoSeRealiza}</p>
          <a href="index.html" class="lg:w-60 lg:h-12 text-xl m-auto text-center mt-4 self-start bg-[#20533a] hover:bg-[#6fa38a] px-4 py-1 lg:py-2 rounded-lg text-white">Volver</a>
        </div>
      </div>
    `;
  } else {
    contenedor.innerHTML = "<p class='text-white'>Servicio no encontrado.</p>";
  }
}

mostrarDetalle();
