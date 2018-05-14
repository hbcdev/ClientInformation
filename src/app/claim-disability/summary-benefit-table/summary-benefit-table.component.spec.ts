import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBenefitTableComponent } from './summary-benefit-table.component';

describe('SummaryBenefitTableComponent', () => {
  let component: SummaryBenefitTableComponent;
  let fixture: ComponentFixture<SummaryBenefitTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryBenefitTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryBenefitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
