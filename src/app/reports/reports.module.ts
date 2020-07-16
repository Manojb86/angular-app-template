import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reprots/reports.component';


@NgModule({
    declarations: [
        ReportsComponent
    ],
    imports: [
        CommonModule,
        ReportsRoutingModule
    ]
})
export class ReportsModule {}