import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratrationStep2Component } from './registratration-step2.component';

describe('RegistratrationStep2Component', () => {
  let component: RegistratrationStep2Component;
  let fixture: ComponentFixture<RegistratrationStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratrationStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratrationStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
