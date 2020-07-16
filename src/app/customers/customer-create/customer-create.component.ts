import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseService } from 'src/app/shared/services/base-service.service';
import { CustomerCreational } from 'src/app/models/customer/customer-creational';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  errorMessage: string = '';
  customerForm: FormGroup;

  constructor(
    private datePipe: DatePipe,
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  createCustomer(customerFormValue: FormGroup) {
    const customerPayload: CustomerCreational = {
      name: customerFormValue.value.name,
      dateOfBirth: this.datePipe.transform(customerFormValue.value.dateOfBirth, 'yyyy-MM-dd'),
      address: customerFormValue.value.address
    };
    $('#successModal').modal();
    console.log(customerPayload);
  }

  executeDatePicker(selectedDate) {
    this.customerForm.patchValue({ 'dateOfBirth': selectedDate });
  }

  redirectToCustomerList(){
    this.router.navigate(['/customers']);
  }

  validateControl(controlName: string){
    if (this.customerForm.controls[controlName].invalid && this.customerForm.controls[controlName].touched) {
      return true;
    }

    return false;
  }

  hasError(controlName: string, errorName: string) {
    if (this.customerForm.controls[controlName].touched && this.customerForm.controls[controlName].hasError(errorName)) {
      return true;
    }

    return false;
  }

}
