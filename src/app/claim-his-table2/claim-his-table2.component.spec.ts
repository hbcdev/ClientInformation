import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimHisTable2Component } from './claim-his-table2.component';

describe('ClaimHisTable2Component', () => {
  let component: ClaimHisTable2Component;
  let fixture: ComponentFixture<ClaimHisTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimHisTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimHisTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
