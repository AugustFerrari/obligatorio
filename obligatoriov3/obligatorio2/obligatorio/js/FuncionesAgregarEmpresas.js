window.addEventListener("load", inicio2);

let miCasaa = new Casaa("Avda 18 de Julio 1234");

function inicio2() {
    document.getElementById("botonAgregar2").addEventListener("click", agregarEmpresa);
    
}

function agregarEmpresa() {
    let miForm = document.getElementById("formempresa");
    let nombre2 = document.getElementById("nombre2").value;
    let direccion = document.getElementById("direccion").value;
    let rubro = document.getElementById("rubro").value;

    if (nombre2 === "" || direccion === "" || rubro === "") {
      alert("No puedes ingresar campos vacios!");
    } else {
      if (miCasaa.listaEmpresa.find(empresa => empresa.nombre2 === nombre2)) {
        alert("Ya hay una empresa con este nombre");
      }
      else {
        let unEmpresa = new Empresa(nombre2, direccion, rubro);
        miCasaa.agregarEmpresa(unEmpresa);
        alert("¡Agregado!");
        limpiarPantalla2();
        mostrarTabla(); 
      }
    }   
}

function limpiarPantalla2() {
    let tabla = document.getElementById("tablaG");
    tabla.innerHTML = "";
}

function mostrarTabla() {
    let listaEmpresa = miCasaa.darEmpresa();
    let tabla = document.getElementById("tablaG");
    tabla.innerHTML = "";
  
    // Agregar clases a la tabla y al contenedor
    tabla.classList.add("tabla");
    tabla.parentElement.classList.add("estadistica");
  
    let tablaElement = document.createElement("table");
    
    let caption = tablaElement.createCaption();
    caption.classList.add("titulotabla");
    caption.innerHTML = "Empresas que empiezan con T";
    let header = tablaElement.createTHead();
    let row = header.insertRow();
    let cellD = row.insertCell();
    cellD.innerHTML = "Nombre";
    let cellDe = row.insertCell();
    cellDe.innerHTML = "Dirección";
    let cellM = row.insertCell();
    cellM.innerHTML = "Rubro";
  
    for (let i = 0; i < listaEmpresa.length; i++) {
      let fila = tablaElement.insertRow();
      let empresa = listaEmpresa[i];
      for (let k in empresa) {
        let celda = fila.insertCell();
        celda.innerHTML = empresa[k];
      }
    }
  
    tabla.appendChild(tablaElement);
  }

   function ValidarEmpresas() {
  
    if (!miCasaa.hayEmpresa()) {
        alert("Debes ingresar empresas primero");
        return;
    }else{
      
      verReclamos();
    
    }
}

function ValidarEmpresasBoton() {
  
  if (!miCasaa.hayEmpresa()) {
      alert("Debes ingresar empresas primero");
      return;
  }else{
    
  agregarReclamo();
  
  }
}