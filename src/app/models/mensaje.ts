import { Empresa } from './empresa';

export class Mensaje {
     _id:string
    para: number;
    de: number;
    texto: string;
    fecha:Date;
    empresa:Empresa;

    Mensaje(para?:number,de?:number,texto?:string){
        this.para = para;
        this.de = de;
        this.texto = texto;
        this.empresa = new Empresa();
    }


}
