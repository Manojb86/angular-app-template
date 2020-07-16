import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentService } from './environment-service.service';

@Injectable({
    providedIn: "root"
})
export class BaseService {

    constructor(private httpClient: HttpClient, private env: EnvironmentService) {        
    }

    private getHeaders() {
        return {
            headers: new HttpHeaders(
                {'Content-Type': 'application/json'},)
        };
    }

    private getServiceUrl(baseUrl: string, apiRoute: string){
        return `${baseUrl}/${apiRoute}`;
    }

    httpGet(apiRoute: string){
        let url = this.getServiceUrl(this.env.baseUrl, apiRoute);
        let headers = this.getHeaders();        
        return this.httpClient.get(url, headers);
    }

    httpPost(apiRoute: string, body: any){
        let url = this.getServiceUrl(this.env.baseUrl, apiRoute);
        let headers = this.getHeaders();        
        return this.httpClient.post(url,body, headers);
    }

    httpPut(apiRoute: string, body: any){
        let url = this.getServiceUrl(this.env.baseUrl, apiRoute);
        let headers = this.getHeaders();        
        return this.httpClient.put(url,body, headers);
    }

    httpPatch(apiRoute: string, body: any){
        let url = this.getServiceUrl(this.env.baseUrl, apiRoute);
        let headers = this.getHeaders();        
        return this.httpClient.patch(url, body, headers);
    }

    httpDelete(apiRoute: string, body: any){
        let url = this.getServiceUrl(this.env.baseUrl, apiRoute);
        let headers = this.getHeaders();        
        return this.httpClient.delete(url, headers);
    }
}