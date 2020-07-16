import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class ErrorHandlerService {
    errorMessage: string = '';
    constructor(private router: Router) {        
    }

    handleError(error: HttpErrorResponse){
        switch (error.status) {
            case 500:
                this.createErrorMessage(error);
                this.router.navigate(['/500']);
                break;
            case 404:
                this.createErrorMessage(error);
                this.router.navigate(['/404']);
                break;
            default:
                this.createErrorMessage(error);
                this.router.navigate(['error']);
                break;
        }
    }

    private createErrorMessage(error: HttpErrorResponse){
        this.errorMessage = error.error ? error.error : error.statusText;
    }
}