import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminServiceService } from 'src/app/shared/service/admin-service.service';
import { DataService } from 'src/app/shared/service/data.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  panelOpenState = true;
  filterForm: any;
  districts: any;
  finalBlockList: any;
  blocks: any;
  displayedColumns: any;
  dataSource = new MatTableDataSource<any>([
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ]);
  dataSources = new MatTableDataSource<any>([
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ]);
  displayedColumn: any[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  users: any[] = [];
  payload: { USER_ID: string; USER_FACILITY_ID: string; USER_PHR_ROLE: string; FILTERS: { DISTRICT_ID: any; BLOCK_ID: any; }; } | undefined;
  facilities: any[] = [];
  streets: any[] = [];
  shops: any[] = [];
  facilitiesCountOfMappedHSC = 0;
  facilitiesCountOfUnMappedHSC = 0;
  streetCountOfMappedHSC = 0;
  streetCountOfUnMappedHSC = 0;
  shopsCountOfMappedHSC =0;
  shopsCountOfUnMappedHSC = 0;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private adminService: AdminServiceService) {
  }

  ngOnInit() {
    this.createForm();
    this.districts = this.dataService.districts;
    this.blocks = this.dataService.blocks;
    this.displayedColumns = ['name', 'weight'];
    this.displayedColumn = ['name', 'weight'];
  }

  createForm() {
    this.filterForm = this.formBuilder.group({
      district: [''],
      block: ['']
    });
  }

  selectChange(districtData: string) {
    this.finalBlockList = this.blocks.filter((obj: any) => obj.district_id.includes(this.filterForm.value.district));
    this.reset();
  }

  search() {
    this.payload = {
      "USER_ID": "94af8940-9562-4ce7-865d-457e2881ff33",
      "USER_FACILITY_ID": "a32fbc4f-8b08-4d56-b4e8-12c0be8db625",
      "USER_PHR_ROLE": "STATE_ADMIN",
      "FILTERS": {
        "DISTRICT_ID": this.filterForm.value.district ? this.filterForm.value.district : '',
        "BLOCK_ID": this.filterForm.value.block ? this.filterForm.value.block : ''
      }
    }
    this.userList();
    this.facilityList();
    this.streetList();
    this.shopList();  
  }
  clearSearch() {
    this.filterForm.reset();
    if (this.filterForm.value.district == null) {
      this.finalBlockList = [];
    }
   this.reset();
  }
  reset() {
    this.facilities = [];
    this.streets= [];
    this.shops = [];
    this.facilitiesCountOfMappedHSC = 0;
    this.facilitiesCountOfUnMappedHSC = 0;
    this.users = [];
  }

  userList() { 
    this.adminService.getDashboardUsers(this.payload).subscribe((data: any) => {
      this.users = data.data.CountByType;
      console.log('Dashboard Users', this.users);
      }, error => {
        console.log('Failed to get dashboard user');  
      });
    

  }
  facilityList() {
    this.adminService.getDashboardFacility(this.payload).subscribe((data: any) => {
      this.facilities = data.data.CountByType;
      this.facilitiesCountOfMappedHSC = data.data.CountOfMappedHSC[0].count;
      this.facilitiesCountOfUnMappedHSC = data.data.CountOfUnMappedHSC[0].count;
      console.log('Dashboard Users', this.users);
      }, error => {
        console.log('Failed to get dashboard facilities');  
      });
  }
  streetList() {
    this.adminService.getDashboardStreet(this.payload).subscribe((data: any) => {
      this.streets = data.data.CountByType;
      this.streetCountOfMappedHSC = data.data.CountOfMappedHSC[0].count;
      this.streetCountOfUnMappedHSC = data.data.CountOfUnMappedHSC[0].count;
      console.log('Dashboard Users', this.streets);
      }, error => {
        console.log('Failed to get dashboard street');  
      });
  }
  shopList() {
    this.adminService.getDashboardShop(this.payload).subscribe((data: any) => {
      this.shops = data.data.CountByType;
      this.shopsCountOfMappedHSC = data.data.PopulationMappedToStreet;
      this.shopsCountOfUnMappedHSC = data.data.PopulationMappedToStreet;
      console.log('Dashboard Users', this.shops);
      }, error => {
        console.log('Failed to get dashboard shops');  
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
