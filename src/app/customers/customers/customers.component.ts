import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer';
import { BaseService } from 'src/app/shared/services/base-service.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/shared/services/customer/customer-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer [];
  errorMessage: string = '';

  constructor(
    private baseService: BaseService, 
    private errorHandler: ErrorHandlerService, 
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.customerService.getCustomers()
        .subscribe(response => {
          this.customers = response as Customer [];
        },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
          console.log(this.errorMessage);
        });
    }
  
  getCustomerDetails(id: number){
    this.router.navigate(['details', id], {relativeTo: this.route, queryParams: {isActive: true}});
  }

  updateCustomerDetails(id: number) {
    this.router.navigate(['update', id], {relativeTo: this.route, queryParams: {isActive: true}});
  }

}
