window.addEventListener("load", inicio);

let miCasa = new Casa("Avda 18 de Julio 1234");


function inicio() {
  document.getElementById("botonAgregar").addEventListener("click", agregarQueja);
}

function agregarQueja() {
  let miForm = document.getElementById("formAgregar");

  let nombre = document.getElementById("nombre").value;
  let empresa = document.getElementById("empresa").value;
  let reclamo = document.getElementById("reclamo").value;
  let reclamotxt = document.getElementById("reclamotxt").value;

  if (nombre === "" || empresa === "" || reclamo === "" || reclamotxt === "") {
    alert("No puedes ingresar campos vacios!");
  } else {
    let unaQueja = new Queja(nombre, empresa, reclamo, reclamotxt);
    miCasa.agregarQueja(unaQueja);
    alert("Agregado!");
    limpiarPantalla();
    mostrarBox();
  }
  
}

function limpiarPantalla() {
  document.getElementById("formAgregar").reset();
}

function mostrarBox() {

  let container = document.getElementById("listado");
  container.innerHTML = "";

  let listaQuejas = miCasa.darQuejas();

  for (let i = listaQuejas.length - 1; i >= 0; i--) {
    let queja = listaQuejas[i];
    let section = document.createElement("section");
    section.classList.add("contador");
    
    let h3 = document.createElement("h3");
    h3.innerHTML = "Reclamo No. " + (i + 1);
    section.appendChild(h3);

    let div = document.createElement("div");
    div.classList.add("cajareclamo");
    section.appendChild(div);

  
    let p = document.createElement("p");
    p.innerHTML = queja.nombre + ":";
    p.classList.add("texto");

    let cite = document.createElement("cite");
    cite.innerHTML = queja.reclamo;
    cite.classList.add("color1");
    p.appendChild(cite);

    div.appendChild(p); 

    let p2 = document.createElement("p");
    p2.innerHTML = "Empresa:";
    p2.classList.add("texto");

    let cite2 = document.createElement("cite");
    cite2.innerHTML = queja.empresa;
    cite2.classList.add("color2");
    p2.appendChild(cite2);

    div.appendChild(p2); 

    let p3 = document.createElement("p");
    p3.innerHTML = queja.reclamotxt;
    p3.classList.add("texto");
    div.appendChild(p3);

    let divContador = document.createElement("div");
    divContador.classList.add("unidor");

    let button = document.createElement("button");
    button.id="bot"
    button.innerHTML = "¡A mí también me pasó!";
    divContador.appendChild(button);

    let contador = document.createElement("p");
    contador.id="mostrador"
    contador.innerHTML = "Contador: 0";
    divContador.appendChild(contador);

    div.appendChild(divContador);

    container.appendChild(section);

    function ContadorNum(){
      let CantidadReclamos = 0;
      let bot= document.getElementById("bot")
      let mostrador = document.getElementById("mostrador")
        button.onclick = function() {
        CantidadReclamos++;
        mostrador.innerHTML = "Contador :"+ CantidadReclamos;
        };
    }
    ContadorNum(); 
  }
}