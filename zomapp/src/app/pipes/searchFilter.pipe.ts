import {Pipe, PipeTransform} from '@angular/core';
import {IRest} from '../models/rest.model';

@Pipe({
    name:'searchFilter'
})

export class RestSearchFilter implements PipeTransform {
    transform(value:IRest[], userInput:string){
        userInput = userInput ? userInput.toLowerCase():'';
        return userInput ? value.filter((data) => 
         (data.restaurant_name.toLowerCase().indexOf(userInput) > -1)
        ) :value
    }
}