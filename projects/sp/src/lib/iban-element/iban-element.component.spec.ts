import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbanElementComponent } from './iban-element.component';

describe('IbanElementComponent', () => {
  let component: IbanElementComponent;
  let fixture: ComponentFixture<IbanElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbanElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbanElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
