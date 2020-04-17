import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrideComponent } from './adminride.component';

describe('AdminrideComponent', () => {
  let component: AdminrideComponent;
  let fixture: ComponentFixture<AdminrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
