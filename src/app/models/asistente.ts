export class Asistente {
    _id:string;
    usuario:string;
    nombreOrganizacion:string;
    requiereConstancia:boolean;

    Asistente(usuario?:string,nombreOrganizacion?:string,requiereConstancia?:boolean){
        this.usuario = usuario;
        this.nombreOrganizacion = nombreOrganizacion;
        this.requiereConstancia = requiereConstancia;
    }


}
