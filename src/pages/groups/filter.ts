import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'exponential'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(items: any[], arg1: string, type: string, like: string): any {     
      var resultArray = [];
      if (typeof items === 'object' && items) {
          items.forEach(function(e,i){
              if(type == 'my'){
                if(arg1){
                    if(e.members && e.members[arg1]) resultArray.push(e);
                }
              }
              if(type == 'public'){
                  if(e.members && !e.members[arg1] && e.isPublic) resultArray.push(e);
              }
          })
      }
      return (like) ? resultArray.filter(item => item.name.toLowerCase().indexOf(like.toLowerCase()) !== -1) : resultArray;
  }
}