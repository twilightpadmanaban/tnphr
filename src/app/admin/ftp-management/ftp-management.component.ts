import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ftp-management',
  templateUrl: './ftp-management.component.html',
  styleUrls: ['./ftp-management.component.scss']
})
export class FtpManagementComponent implements OnInit {
  panelOpenState = true;
  userForm!: FormGroup;
  districts: any[] = [];
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.userForm = this.fb.group({
      district: [''],
      block: [''],
      phc: [''],
      hsc: [''],
    });
  }
  clearSearch(){

  }
  search(){

  }
}
