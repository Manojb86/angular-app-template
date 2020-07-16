import { Injectable } from '@angular/core';
import { BaseService } from '../base-service.service';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class CustomerService {
customer: Observable<Customer>;

    constructor(private baseService: BaseService) {        
    } 
    
    getCustomers(){
        const url = 'customers';
        return this.baseService.httpGet(url).pipe(
            tap(res => console.log(res)),
            catchError(this.handleError<Customer []>('getCustomers', []))
        );
    }

    getCustomerById(id: number){
        const url = `customers/${id}`;
        return this.baseService.httpGet(url).pipe(
            tap(res => console.log(res)),
            catchError(this.handleError<Customer>('getCustomerById'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
      
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
      
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

    log(message: string){
          console.log(message);
    }
}