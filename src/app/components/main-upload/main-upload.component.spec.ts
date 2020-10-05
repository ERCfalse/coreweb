import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUploadComponent } from './main-upload.component';

describe('MainUploadComponent', () => {
  let component: MainUploadComponent;
  let fixture: ComponentFixture<MainUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
