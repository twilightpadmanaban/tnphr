import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

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

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  panelOpenState = true;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    this.createDummyData();
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

  clearSearch() {
    this.userForm.reset();
  }
}
