import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { CostsComponent } from './costs/costs.component';

const routes: Routes = [
    {path: '', component: CostsComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CostsRoutingModule {}