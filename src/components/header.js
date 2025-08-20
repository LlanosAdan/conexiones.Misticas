const navBar = [
  { name: "Inicio", url: "./" },
  { name: "Servicio", url: "#service" },
  { name: "Acerca de Nosotros", url: "#nosotros" },
  { name: "Contacto", url: "#contacto" },
];

const headerContainer = document.getElementById("header");

// Links desktop
const Links = navBar
  .map(
    (item) => `
            <a href="${item.url}" 
               class="px-3 py-2 text-base  lg:text-2xl font-semibold text-white hover:text-[#bf930d]">
               ${item.name}
            </a>
          `
  )
  .join("");

// Renderizar header
headerContainer.innerHTML = `
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
         
          <div class="lg:flex">
            <a href="#" class="text-xl lg:text-2xl font-bold text-white">Conexión Mística</a>
          </div>

          <!-- Links al centro -->
          <div class="hidden lg:flex lg:gap-x-2">
            ${Links}
          </div>

          <!-- Redes a la derecha -->
          <div class="hidden lg:flex lg:gap-x-6">
            <a href="https://api.whatsapp.com/send?phone=542914400333&text=Hola%20%2C%20contame%20mas%20sobre%20tus%20servicios!%20gracias" target="_blank" class="px-3 py-2 text-base font-semibold text-white lg:text-2xl hover:text-indigo-400">
              ${WhatsAppIcon({ width: 50, height: 50 })}
            </a>
            <a href="https://www.instagram.com/conexionmisticaok/" target="_blank" class="px-3 py-2 text-base font-semibold text-white  lg:text-2xl hover:text-indigo-400">
              ${InstagramIcon({ width: 50, height: 50 })}
            </a>
          </div>

          <!-- Botón hamburguesa mobile -->
          <div class="flex lg:hidden">
            <button type="button" command="show-modal" commandfor="mobile-menu"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
              <span class="sr-only">Abrir menú</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                aria-hidden="true" class="size-6">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </nav>

        <!-- Menu Mobile -->
        <el-dialog>
          <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
            <div tabindex="0" class="fixed inset-0 focus:outline-none">
              <el-dialog-panel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">

                <!-- Header mobile -->
                <div class="flex items-center justify-between">
                  <a href="./" class="text-xl text-white font-bold">Conexión Mística</a>
                  <button type="button" command="close" commandfor="mobile-menu"
                    class="-m-2.5 rounded-md p-2.5 text-gray-400">
                    <span class="sr-only">Cerrar menú</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="1.5" aria-hidden="true" class="size-6">
                      <path d="M6 18 18 6M6 6l12 12"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>

                <!-- Links mobile -->
                <div class="flex flex-col mt-6 space-y-4">
                  ${Links}
                </div>

                <!-- Redes mobile -->
                <div class="mt-6 space-y-4 border-t border-gray-700 pt-6">
                  <a href="https://api.whatsapp.com/send?phone=542914400333&text=Hola%20%2C%20contame%20mas%20sobre%20tus%20servicios!%20gracias" target="_blank" class="px-3 py-2 text-base font-semibold text-white lg:text-2xl hover:text-indigo-400">
              ${WhatsAppIcon({ width: 50, height: 50 })}
            </a>
            <a href="https://www.instagram.com/conexionmisticaok/" target="_blank" class="px-3 py-2 text-base font-semibold text-white  lg:text-2xl hover:text-indigo-400">
              ${InstagramIcon({ width: 50, height: 50 })}
            </a>
                </div>
              </el-dialog-panel>
            </div>
          </dialog>
        </el-dialog>
      `;
