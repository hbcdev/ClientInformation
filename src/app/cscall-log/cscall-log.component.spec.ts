import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSCallLogComponent } from './cscall-log.component';

describe('CSCallLogComponent', () => {
  let component: CSCallLogComponent;
  let fixture: ComponentFixture<CSCallLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSCallLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSCallLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
