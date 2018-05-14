import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimHisByNatIDComponent } from './claim-his-by-nat-id.component';

describe('ClaimHisByNatIDComponent', () => {
  let component: ClaimHisByNatIDComponent;
  let fixture: ComponentFixture<ClaimHisByNatIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimHisByNatIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimHisByNatIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
