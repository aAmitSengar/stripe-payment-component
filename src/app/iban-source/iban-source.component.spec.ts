import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbanSourceComponent } from './iban-source.component';

describe('IbanSourceComponent', () => {
  let component: IbanSourceComponent;
  let fixture: ComponentFixture<IbanSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbanSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbanSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
