import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor( private http: HttpClient) { }

  getUsers(payload: any) {
      return this.http.post('admin_api_get_user_list', payload);
  }
}
