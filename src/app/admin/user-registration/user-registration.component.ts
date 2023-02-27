import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { AdminServiceService } from 'src/app/shared/service/admin-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  showFiller = false;
  userForm!: FormGroup;
  data: any[] = [];
  selected = [];
  limit = 5;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  panelOpenState = true;
  offset = 0;
  totalCount = 5;

  constructor(private formBuilder: FormBuilder, private as: AdminServiceService ) {
  }

  ngOnInit() {
    this.createForm();
    this.createDummyData();
    this.search();
    // this.as.getUsers().subscribe((res) => {

    // })
  }

  createDummyData() {
    this.data = [
      {
        district: 'None',
        block: 'None',
        facility: 'Chepauk Dispensary, Chennai',
        name: 'Sumathy Dr',
        mobile: '9444667628',
        phrRole: 'WEB_DISTRICT_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DMS State Office',
        name: 'Chitra DK',
        mobile: '9342997747',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      }, 
      {
        district: 'None',
        block: 'None',
        facility: 'Chepauk Dispensary, Chennai',
        name: 'Sumathy Dr',
        mobile: '9444667628',
        phrRole: 'WEB_DISTRICT_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DMS State Office',
        name: 'Chitra DK',
        mobile: '9342997747',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      }, 
      {
        district: 'None',
        block: 'None',
        facility: 'Chepauk Dispensary, Chennai',
        name: 'Sumathy Dr',
        mobile: '9444667628',
        phrRole: 'WEB_DISTRICT_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DMS State Office',
        name: 'Chitra DK',
        mobile: '9342997747',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      },
      {
        district: 'None',
        block: 'None',
        facility: 'DPH State Office',
        name: 'Chitra DPH',
        mobile: '9080738886',
        phrRole: 'STATE_ADMIN',
        Active: '',
        Edit: ''
      }

    ]
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      district: [''],
      block: [''],
      facility: [''],
      phrrole: [''],
      name: [''],
      number: [''],
      role: ['']
    });
  }

  ngAfterViewInit() {
  }

  onActivate(event: any) {
  }

  onSelect(event: any) {
  }
  search() {
    if (this.userForm.invalid) {
      return;
    }
     const payload = {
      "USER_ID": "94af8940-9562-4ce7-865d-457e2881ff33",
      "USER_FACILITY_ID": "a32fbc4f-8b08-4d56-b4e8-12c0be8db625",
        "FILTERS": {
            "DISTRICT_ID": this.userForm.value.district ? this.userForm.value.district : '',
            "BLOCK_ID": this.userForm.value.block ? this.userForm.value.block : '',
            "PHR_ROLE": this.userForm.value.phrrole ? this.userForm.value.phrrole : '',
            "USER_NAME": this.userForm.value.name ? this.userForm.value.name : '',
            "FACILITY_ID": this.userForm.value.facility ? this.userForm.value.facility : '',
            "MOBILE_NUMBER": this.userForm.value.number ? this.userForm.value.number : '',
            "ROLE": this.userForm.value.role ? this.userForm.value.role : ''
        },
        "LIMIT": this.limit,
        "OFFSET": this.offset
    }
    // const payload ={
    //   "USER_ID": "94af8940-9562-4ce7-865d-457e2881ff33",
    //   "USER_FACILITY_ID": "a32fbc4f-8b08-4d56-b4e8-12c0be8db625",
    //     "FILTERS": {
    //         "DISTRICT_ID": "02f67331-a6f1-4df3-98de-ee49a7032ed6",
    //         "BLOCK_ID": "02d844e3-745e-4a52-babf-7e1960326952",
    //         "PHR_ROLE": "MOBILE_COMMUNITY_STAFF",
    //         "USER_NAME": "SURYA",
    //         "FACILITY_ID": "252f7454-91d6-4b17-ab00-762aea708eaf",
    //         "MOBILE_NUMBER": "7904319591",
    //         "ROLE": "9bd9c87c-dcde-418d-b11e-4ac62838760f"
    //     },
    //     "LIMIT": 10,
    //     "OFFSET": 0
    // }
    console.log('Payload', payload);
    // this.userForm.reset();
    this.as.getUsers(payload).subscribe((data: any) => {
      console.log(data);
      // this.data = data.data;
      this.totalCount = data['meta-data'].total_records_count;
      this.data = data.data.map((item: any) => {
        item.name = `${item.user_title} ${item.user_first_name} ${item.user_first_name}`.trim();
        item.district = 'None'
        item.block = 'None'
        item.mobile = `${item.mobile_number}`.trim();
        item.facility = `${item.facility_name}`.trim();
        item.phrRole = `${item.phr_role}`.trim();
        return item;
      });
      console.log('totalCount', this.totalCount);
    }, error => {
    });
  }
  clearSearch() {
    this.userForm.reset();
  }
  paginate(e: any) {
    console.log('event', e.limit, e.offset);
    this.limit = e.limit;
    this.offset = e.offset;
    this.search();
  }
}
