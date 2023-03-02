import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtpManagementComponent } from './ftp-management.component';

describe('FtpManagementComponent', () => {
  let component: FtpManagementComponent;
  let fixture: ComponentFixture<FtpManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtpManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtpManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
