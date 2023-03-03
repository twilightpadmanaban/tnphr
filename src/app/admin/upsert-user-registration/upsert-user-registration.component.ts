import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upsert-user-registration',
  templateUrl: './upsert-user-registration.component.html',
  styleUrls: ['./upsert-user-registration.component.scss']
})
export class UpsertUserRegistrationComponent {
  isLinear = false;
  personalDetailForm: any;
  employeeDetailForm: any;
  titles: string[] = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Er.']
  genders: string[] = ['Male', 'Female.', 'Others']
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.personalDetailForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: [, [Validators.required, Validators.pattern(/^(0?[1-9]|1[0-2])[\/.-]([0-2]?[1-9]|[1-3][01])[\/.-]\d{4}$/)]],
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      address: ['', Validators.required],
    });
    this.employeeDetailForm = this.formBuilder.group ({
      empID: ['', Validators.required],
      empType: ['', Validators.required],
      natureOfWork: ['', Validators.required],
      doj: ['', Validators.required],
      isActive: ['', Validators.required],
      role: ['', Validators.required],
      designation: ['', Validators.required],
      phrRole: ['', Validators.required],
      roleInFacility: ['', Validators.required],
      primaryFacillity:['', Validators.required],
      department: [''],
      clinic: [''],
      clinicType: ['']
    });
  }
  get f() {
    return this.personalDetailForm.controls;
  }
  get g() {
    return this.employeeDetailForm.controls;
  }
  search() {

  }

  navigateBack() {
    this.router.navigate(['/admin/registration'])
  }
}
