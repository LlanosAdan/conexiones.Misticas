const campos = [
  { id: "name", label: "Nombre", type: "text", autocomplete: "name" },
  { id: "celular", label: "Nro Celular", type: "tel", autocomplete: "tel" },
  { id: "email", label: "Correo", type: "email", autocomplete: "email" },
  {
    id: "date",
    label: "Fecha de Nacimiento",
    type: "date",
    autocomplete: "bday",
  },
  {
    id: "mensaje",
    label: "Dejanos un Mensaje",
    type: "textarea",
    autocomplete: null,
  },
];

const seccionContacto = document.getElementById("contacto");

seccionContacto.innerHTML = `
<div class="lg:w-1/2 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 font-titulo text-center text-2xl lg:text-4xl font-bold tracking-widest text-black">Dejanos tus datos</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form action="#" method="POST" class="space-y-6">
     ${campos
       .map(
         (campo) => `
       <div>
         <label for="${
           campo.id
         }" class="block font-general text-lg font-medium text-black">${
           campo.label
         }</label>
         <div class="mt-2">
           ${
             campo.type === "textarea"
               ? `<textarea id="${campo.id}" name="${campo.id}" required
                 class="block w-full rounded-md px-3 py-1.5 text-base text-black bg-white outline outline-[#d9ad26] placeholder:text-black sm:text-sm"></textarea>`
               : `<input id="${campo.id}" type="${campo.type}" name="${
                   campo.id
                 }" required autocomplete="${campo.autocomplete || ""}"
                 class="block w-full rounded-md px-3 py-1.5 text-base text-black bg-white outline outline-[#d9ad26] placeholder:text-black sm:text-sm" />`
           }
         </div>
       </div>
     `
       )
       .join("")}

     <div>
       <button type="submit" class="flex w-full justify-center rounded-md bg-[#bf930d] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#d9ad26] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bf930d]">Enviar</button>
     </div>
   </form>
  </div>
</div>
<img class="lg:w-1/2 rounded-xl" src="./public/assets/image/contactanos-form.jpg" />
`;
