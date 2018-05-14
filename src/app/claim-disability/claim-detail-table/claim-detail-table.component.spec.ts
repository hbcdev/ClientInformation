import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDetailTableComponent } from './claim-detail-table.component';

describe('ClaimDetailTableComponent', () => {
  let component: ClaimDetailTableComponent;
  let fixture: ComponentFixture<ClaimDetailTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimDetailTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
