import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';

const routes: Routes = [
   {path: '', component: CustomersComponent, pathMatch: 'full'},
   {path: 'list', component: CustomerListComponent},
   {path: 'details/:id', component: CustomerDetailsComponent},
   {path: 'create', component: CustomerCreateComponent},
   {path: 'update/:id', component: CustomerUpdateComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CustomersRoutingModule { }