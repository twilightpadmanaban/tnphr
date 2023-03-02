import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor( private http: HttpClient, private dataService: DataService) { }

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
  getDashboardUsers(payload: any) {
    return this.http.post('admin_api_dashboard_user_aggregate', payload);
  }
  getDashboardFacility(payload: any) {
    return this.http.post('admin_api_dashboard_facility_aggregate', payload);
  }
  getDashboardStreet(payload: any) {
    return this.http.post('admin_api_dashboard_street_aggregates', payload);
  }
  getDashboardShop(payload: any) {
    return this.http.post('admin_api_dashboard_shop_aggregate', payload);
  }


  requestDataFromMultipleSources(payload: any): Observable<any> {
    let districtListAPI = this.http.post('admin_api_get_district_master', payload);
    let blockListAPI = this.http.post('admin_api_get_block_master', payload);
    let roleListAPI = this.http.post('admin_api_get_role_master', payload);
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return forkJoin([districtListAPI, blockListAPI, roleListAPI]).pipe(map(([districtList, blockList, roleList]) => {
         this.dataService.districts = (districtList as any).data;
         this.dataService.blocks = (blockList as any).data;
         this.dataService.roles = (roleList as any).data;
    }));
  }
}
