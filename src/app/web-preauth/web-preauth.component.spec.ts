import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPreauthComponent } from './web-preauth.component';

describe('WebPreauthComponent', () => {
  let component: WebPreauthComponent;
  let fixture: ComponentFixture<WebPreauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPreauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPreauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
