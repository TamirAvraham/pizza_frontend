import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCreaterComponent } from './pizza-creater.component';

describe('PizzaCreaterComponent', () => {
  let component: PizzaCreaterComponent;
  let fixture: ComponentFixture<PizzaCreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaCreaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
