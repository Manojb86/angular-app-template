import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CustomerCreational } from 'src/app/models/customer/customer-creational';
import { Customer } from 'src/app/models/customer/customer';
import { BaseService } from 'src/app/shared/services/base-service.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {
  customerUpdateForm: FormGroup;
  errorMessage: string = '';
  customerDetail: Customer;

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private baseService: BaseService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.getDataFromRoute();
    this.buildCustomerUpdateForm()
  }

  getDataFromRoute() {
    this.route.params.subscribe((params: Params) => {
      let id = +params['id'];
      this.getCustomerData(id);
    });
  }

  getCustomerData(id: number){
    const url = `customers/${id}`;
    this.baseService.httpGet(url).pipe(
      tap(customer => console.log(customer))
    ).subscribe((response) => {
      this.customerDetail = response as Customer
      this.mapValuesToForm();
    }, (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    });
  }

  mapValuesToForm() {
    this.customerUpdateForm.value.name = this.customerDetail.name;
  }

  buildCustomerUpdateForm(){    
    this.customerUpdateForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  updateCustomer(customerUpdateForm: FormGroup) {
    const updatedCustomer: CustomerCreational = {
      name: customerUpdateForm.value.name,
      dateOfBirth: this.datePipe.transform(customerUpdateForm.value.dateOfBirth, 'yyyy-MM-dd'),
      address: customerUpdateForm.value.address
    };

    $('#successModal').modal();
    console.log(updatedCustomer);
  }

  executeDatePicker(selectedDate) {
    this.customerUpdateForm.patchValue({ 'dateOfBirth': selectedDate });
  }

  validateControl(controlName: string){
    if (this.customerUpdateForm.controls[controlName].invalid && this.customerUpdateForm.controls[controlName].touched) {
      return true;
    }

    return false;
  }

  hasError(controlName: string, errorName: string) {
    if (this.customerUpdateForm.controls[controlName].touched && this.customerUpdateForm.controls[controlName].hasError(errorName)) {
      return true;
    }

    return false;
  }

  redirectToCustomerList(){
    this.router.navigate(['/customers']);
  }
}
