class Casaa{
    constructor(laDireccion) {
        this.direccion = laDireccion;
        this.listaEmpresa = [];
    }
    
    agregarEmpresa(unEmpresa) {
        this.listaEmpresa.push(unEmpresa);
    }
    
    darEmpresa() {
        return this.listaEmpresa;
    }
    
    hayEmpresa() {
        return this.listaEmpresa.length > 0;
    }
    
    toString() {
        return this.direccion;
    }
}

class Empresa {
    constructor(elnombre2, laDireccion, elRubro) {
        this.nombre2 = elnombre2;
        this.direccion = laDireccion;
        this.rubro = elRubro;
    }
}