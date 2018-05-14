import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDisabilityComponent } from './claim-disability.component';

describe('ClaimDisabilityComponent', () => {
  let component: ClaimDisabilityComponent;
  let fixture: ComponentFixture<ClaimDisabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimDisabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimDisabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
