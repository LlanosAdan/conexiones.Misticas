document.addEventListener("DOMContentLoaded", () => {
  const Links = navBar
    .map(
      (item) => `
          <li>
            <a href="${item.url}" 
               class="px-3 py-2 text-sm hover:text-[#bf930d]">
               ${item.name}
            </a>
          </li>
          `
    )
    .join("");

  const footerContainer = document.getElementById("footer");
  const currentYear = new Date().getFullYear();

  footerContainer.innerHTML = `
    <div class="bg-[#20533a] text-gray-300 py-10 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 class="text-lg font-semibold text-white mb-4">Conexión Mística</h2>
          <p class="text-sm">
            un espacio donde combinamos nuestras energías para brindarte
            sesiones profundas, sanadoras y transformadoras
          </p>
        </div>

        <div>
          <h2 class="text-lg font-semibold text-white mb-4">Enlaces</h2>
          <ul class="space-y-2">
            ${Links}
          </ul>
        </div>

        <div>
          <h2 class="text-lg font-semibold text-white mb-4">Contacto</h2>
          <p class="text-sm">Buenos Aires, Argentina</p>
          <p class="text-sm">contacto@conexionmistica.com</p>
          <p class="text-sm">+54 291 440-0333</p>
        </div>
      </div>

      <div class="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white">
        © ${currentYear} Conexion Mística. Todos los derechos reservados.
      </div>
    </div>
  `;
});
