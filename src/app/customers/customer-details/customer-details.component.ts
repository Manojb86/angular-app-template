import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseService } from 'src/app/shared/services/base-service.service';
import { Customer } from 'src/app/models/customer/customer';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;
  showError: boolean = false;
  constructor(private route: ActivatedRoute, private baseService: BaseService, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.getDetailsRouteParam();
  }

  getDetailsRouteParam(){
    this.route.params.subscribe((params: Params) => {
      let customerId = params['id'];
      this.getCustomerDetails(customerId);
    });
  }

  getCustomerDetails(id: number){
    let url = `customers/${id}`;
    this.baseService.httpGet(url).subscribe((response) => {
      this.customer = response as Customer;
    }, (error) => {
      this.errorHandler.handleError(error);
    });
  }

}
