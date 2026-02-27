import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo',
})
export class TodoPipe implements PipeTransform {

  transform(value: string,search:string): string {
    return value + " " + search;
  }

}
