class Casa {
constructor(elReclamo) {
	this.reclamo = elReclamo;
	this.listaQuejas = [];
}

agregarQueja(unQueja) {
	this.listaQuejas.push(unQueja);
}

darQuejas() {
	return this.listaQuejas;
}

hayQuejas() {
	return this.listaQuejas.length > 0;
}

toString() {
	return this.reclamo;
}

ordenar(ordenadoCrec) {
	if (ordenadoCrec) {
	// Ordenar en forma creciente
	return this.darQuejas().sort(function (primero, segundo) {
		return primero.reclamo - segundo.reclamo;
	});
	} else {
	// Ordenar en forma decreciente utilizando arrow function
	return this.darQuejas().sort((primero, segundo) => {
		return segundo.reclamo - primero.reclamo;
	});
	}
}
}

class Queja {
	constructor(elNombre, laEmpresa, elReclamo, elReclamotxt) {
		this.nombre = elNombre;
		this.empresa = laEmpresa;
		this.reclamo = elReclamo;
		this.reclamotxt = elReclamotxt;
	}
}