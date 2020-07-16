import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './error-pages/not-found-page/not-found-page.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { SomethingWentWrongComponent } from './error-pages/something-went-wrong/something-went-wrong.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
  {path: 'cost', loadChildren: () => import('./costs/costs.module').then(m => m.CostsModule)},
  {path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)},
  {path: 'report', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)},
  //{path: 'setting', component: SettingComponent},
  {path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path: '404', component: NotFoundPageComponent},
  {path: '500', component: InternalServerComponent},
  {path: 'error', component: SomethingWentWrongComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', redirectTo: 'error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
