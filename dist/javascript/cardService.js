//Se define una función llamada renderCards.
//Esta función es la que va a crear dinámicamente las cards en tu HTML
function renderCards() {

  //document.getElementById("cards") busca en el HTML un elemento con id="cards".
  //Ese es el div principal donde se van a insertar todas las cards creadas
  const contenedor = document.getElementById("cards");

   //servicios es el array que viene de data.js.
  servicios.forEach((s) => {

    //Crea un nuevo elemento div en memoria, que representará una card individual.
    //Este div todavía no está en el HTML hasta que se haga appendChild
    const div = document.createElement("div");
    div.className =
      "flex flex-col w-[300px] p-2 h-[370px] bg-[#20533a]/80 backdrop-blur-lg shadow-[0_0_10px_2px_#20533a] rounded-xl gap-4";
    
    //innerHTML inserta contenido HTML dentro del div creado.
    div.innerHTML = `
      <img class="w-full h-[250px] rounded-xl" src=./dist/${s.image} />
      <h2 class="text-lg font-general font-bold text-center">${s.name}</h2>
      <a class="bg-[#bf930d] hover:bg-[#d9ad26] w-[150px] h-[30px] m-auto font-principal text-center font-semibold rounded pt-1 cursor-pointer" href="./src/pages/details.html?id=${s.id}">Ver más</a>
    `;

    //appendChild inserta el div creado y con contenido dentro del contenedor #cards del HTM
    contenedor.appendChild(div);
  });
}

//llamamos a la funcion
renderCards();
