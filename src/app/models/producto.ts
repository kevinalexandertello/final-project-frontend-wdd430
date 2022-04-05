export class Producto{
    _id?:number;
    nombre:string;
    categoria:string;
    ubicacion:string;
    precio:number;

    constructor(nombre: string, categoria:string, ubicacion:string, precio: number,){
        this.nombre=nombre;
        this.ubicacion=ubicacion;
        this.precio=precio;
        this.categoria=categoria;
    }

}