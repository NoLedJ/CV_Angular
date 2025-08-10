import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactFormValue } from './divers.interface';

@Injectable({
  providedIn: 'root'
})
export class DiversService {

  constructor(private http: HttpClient) { }

  envoyerMessage(body: Partial<ContactFormValue>) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post("http://localhost:3000/email", body, headers);
  }
}
