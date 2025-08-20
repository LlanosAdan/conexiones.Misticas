function mostrarDetalle() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const servicio = servicios.find((s) => s.id === id);
  const contenedor = document.getElementById("detalle");

  if (servicio) {
    // Fondo de pantalla completo
    contenedor.style.backgroundImage = `url('../../dist/${servicio.image}')`;
    contenedor.style.backgroundSize = "cover";
    contenedor.style.backgroundPosition = "center";
    contenedor.style.backgroundRepeat = "no-repeat";

    // Contenido tipo vidrio/glass
    contenedor.innerHTML = `
      <div class="w-[90%] h-[90%] flex flex-col lg:flex-row bg-[#20533a] bg-opacity-20 backdrop-blur-lg rounded-xl p-2 lg:p-8 text-white flex flex-col gap-4 shadow-lg">
        <img src="../../dist/${servicio.image}" alt="${servicio.name}" class="lg:max-w-2xl rounded-lg shadow-md"/>
        <div class="lg:px-20 flex flex-col lg:gap-y-8 text-[#FFFFFF]">
          <h2 class="text-3xl lg:text-6xl font-titulo tracking-widest font-bold">${servicio.name}</h2>
          <p class="text-xl lg:text-2xl font-general tracking-widest font-semibold">${servicio.detalle}</p>
          <p class="text-base font-principal lg:text-xl">${servicio.descripcion}</p>
          <p class="text-base font-principal lg:text-xl"><strong class="text-xl lg:text-2xl">Cómo se realiza:</strong> ${servicio.comoSeRealiza}</p>
          <a href="../../index.html" class="bg-[#bf930d] hover:bg-[#d9ad26] w-[150px] h-[30px] lg:w-[300px] m-auto text-black text-xl font-principal text-center font-semibold rounded py-1 px-2 cursor-pointer">Volver</a>
        </div>
      </div>
    `;
  } else {
    contenedor.innerHTML = "<p class='text-white'>Servicio no encontrado.</p>";
  }
}

mostrarDetalle();
