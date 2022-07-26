import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from '../../classes/pages/employee';

@Pipe({
    name: 'searchEmployees'
})
export class SearchEmployeesPipe implements PipeTransform {

    transform(employees: Employee[], filter: string): Employee[] {
        console.log(employees);
        console.log(filter);
        return (employees.length === 0 || filter === '') ? employees : employees.filter(employee => {
            return employee.first_name.toLowerCase().includes(filter.toLowerCase()) ||
                employee.last_name.toLowerCase().includes(filter.toLowerCase()) ||
                employee.location.toLowerCase().includes(filter.toLowerCase()) ||
                employee.department.toLowerCase().includes(filter.toLowerCase());
        });
    }
}
