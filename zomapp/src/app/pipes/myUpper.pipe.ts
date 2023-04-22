import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
 name:'MyUpper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value:string,typeOf:string):string{
        console.log(">>>>typeOf",typeOf)
        if(typeOf == 'Upper'){
            value = value.toUpperCase()
        }else{
            value = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
        }
        return value
    }
}

///
