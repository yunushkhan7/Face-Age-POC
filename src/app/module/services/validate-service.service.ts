import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateServiceService {

  API_URL: string = environment.APIEndpoint + 'AgeVerify/';

  constructor(private http: HttpClient,) { }

  verifyAge(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}UploadImage`, data);
  }
}
