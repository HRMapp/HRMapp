import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../../classes/pages/employee';

@Pipe({
  name: 'searchPosition'
})
export class SearchPositionPipe implements PipeTransform {

    transform(employees: Employee[], filter: string): Employee[] {
        return (employees.length === 0 || filter === '') ? employees : employees.filter(employee => {
            return employee.position.toLowerCase().includes(filter.toLowerCase())
        });
    }

}
