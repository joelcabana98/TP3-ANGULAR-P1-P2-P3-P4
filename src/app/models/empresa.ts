export class Empresa {
    _id:string;
    nombre:string;
    email:string;

    constructor(nombre?:string,email?:string){
        this.nombre = nombre;
        this.email = email;
    }
}
