import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFillingFormComponent } from './tax-filling-form.component';

describe('TaxFillingFormComponent', () => {
  let component: TaxFillingFormComponent;
  let fixture: ComponentFixture<TaxFillingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxFillingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxFillingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
