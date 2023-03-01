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
  getDistricts(payload: any) {
    return this.http.post('admin_api_get_district_master', payload);
  }
  getBlocks(payload: any) {
    return this.http.post('admin_api_get_block_master', payload);
  }
  getFacility(payload: any) {
    return this.http.post('admin_api_get_facility_master', payload);
  }
  getRole(payload: any) {
    return this.http.post('admin_api_get_role_master', payload);
  }
}
