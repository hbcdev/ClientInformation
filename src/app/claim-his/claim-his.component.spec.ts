import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimHisComponent } from './claim-his.component';

describe('ClaimHisComponent', () => {
  let component: ClaimHisComponent;
  let fixture: ComponentFixture<ClaimHisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimHisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
