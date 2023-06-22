
function principal() {
    document.getElementById('inicio1').style.display = 'block';
    document.getElementById('ocultarenreclamos').style.display = 'block';
    document.getElementById('agregarRr').style.display = 'none';
    document.getElementById('agregarEid').style.display = 'none';
    document.getElementById('estadisticaid').style.display = 'none';
    document.getElementById('reclamosingresadosid').style.display = 'none';
}

function verReclamos() {
   
    document.getElementById('inicio1').style.display = 'block';
    document.getElementById('h2mostrar').style.display = 'block';
    document.getElementById('ocultarenreclamos').style.display = 'none';
    document.getElementById('agregarRr').style.display = 'none';
    document.getElementById('agregarEid').style.display = 'none';
    document.getElementById('estadisticaid').style.display = 'none';
    document.getElementById('reclamosingresadosid').style.display = 'block';
       

}

function verEstadisticas() { 
    document.getElementById('inicio1').style.display = 'none';
    document.getElementById('ocultarenreclamos').style.display = 'none';
    document.getElementById('agregarRr').style.display = 'none';
    document.getElementById('agregarEid').style.display = 'none';
    document.getElementById('estadisticaid').style.display = 'block';
    document.getElementById('reclamosingresadosid').style.display = 'none';
}

function ingresarEmpresa() {
    document.getElementById('inicio1').style.display = 'none';
    document.getElementById('ocultarenreclamos').style.display = 'none';
    document.getElementById('agregarRr').style.display = 'none';
    document.getElementById('agregarEid').style.display = 'block';
    document.getElementById('estadisticaid').style.display = 'none';
    document.getElementById('reclamosingresadosid').style.display = 'none'; 
}

function agregarReclamo() {
    document.getElementById('inicio1').style.display = 'none';
    document.getElementById('ocultarenreclamos').style.display = 'none';
    document.getElementById('h2mostrar').style.display = 'none';
    document.getElementById('agregarRr').style.display = 'block';
    document.getElementById('agregarEid').style.display = 'none';
    document.getElementById('estadisticaid').style.display = 'none';
    document.getElementById('reclamosingresadosid').style.display = 'none'; 
}