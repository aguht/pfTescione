import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'union'
})
export class UnionPipe implements PipeTransform {

  transform(value: string, name: string, surname: string): unknown {
    return value= name + ", " + surname;
  }

}
