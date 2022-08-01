import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../../classes/pages/employee';

@Pipe({
  name: 'searchLastName'
})
export class SearchLastNamePipe implements PipeTransform {

    transform(employees: Employee[], filter: string): Employee[] {
        return (employees.length === 0 || filter === '') ? employees : employees.filter(employee => {
            return employee.last_name.toLowerCase().includes(filter.toLowerCase())
        });
    }

}
