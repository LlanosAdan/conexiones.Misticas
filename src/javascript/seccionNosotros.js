const seccionNosotros = document.getElementById("nosotros");

seccionNosotros.innerHTML = `
   <h2
          class="text-6xl font-semibold text-center font-titulo tracking-wides mb-10"
        >
          Sobre Nosotros
        </h2>
        <article class="w-full flex flex-col lg:flex-row  items-center justify-center lg:max-w-7xl gap-6 m-auto">
          <div class="flex flex-col gap-6 lg:w-1/2">
            <h3 class="font-general text-3xl tracking-wider">
              Hola, somos Yam y Dani
            </h3>
            <p class="font-general text-xl lg:text-2xl tracking-wider">
              Sabemos lo que es sentirse estancado, con la sensación de que algo
              no fluye, de que todo cuesta el doble o de que simplemente la
              energía no acompaña.
            </p>
            <p class="font-general text-xl lg:text-2xl tracking-wider">
              Nosotros también estuvimos ahí. Y fue a través de nuestro propio
              camino de transformación que descubrimos nuestra misión: acompañar
              a quienes necesitan claridad, alivio y un nuevo impulso en sus
              vidas.
            </p>
            <a
              class="bg-[#bf930d] hover:bg-[#d9ad26] w-[150px] h-[30px] m-auto text-center font-semibold rounded pt-1 cursor-pointer"
              href="./src/pages/nosotros.html"
              >Ver más</a
            >
          </div>
          <div class="lg:w-1/2">
            <img src="../../public/assets/image/seccion-nosotros.jpg" alt="" />
          </div>
        </article>
`;
