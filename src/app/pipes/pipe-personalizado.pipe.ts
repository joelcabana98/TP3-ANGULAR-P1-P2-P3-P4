import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePersonalizado'
})
export class PipePersonalizadoPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    
    var resultado = "AAA" +value;
    return null;
  }

}
