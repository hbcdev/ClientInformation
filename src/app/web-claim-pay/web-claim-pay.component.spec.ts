import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebClaimPayComponent } from './web-claim-pay.component';

describe('WebClaimPayComponent', () => {
  let component: WebClaimPayComponent;
  let fixture: ComponentFixture<WebClaimPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebClaimPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebClaimPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
