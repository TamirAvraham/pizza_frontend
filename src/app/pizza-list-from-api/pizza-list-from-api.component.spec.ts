import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaListFromApiComponent } from './pizza-list-from-api.component';

describe('PizzaListFromApiComponent', () => {
  let component: PizzaListFromApiComponent;
  let fixture: ComponentFixture<PizzaListFromApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaListFromApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaListFromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
