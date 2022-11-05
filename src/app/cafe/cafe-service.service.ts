import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root',
})
export class CafeServiceService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCafes() {
    const url = `${this.apiUrl}202212_MISW4104_Grupo3.json`;
    return this.http.get<Cafe[]>(url);
  }
}
