import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaUpdaterComponent } from './pizza-updater.component';

describe('PizzaUpdaterComponent', () => {
  let component: PizzaUpdaterComponent;
  let fixture: ComponentFixture<PizzaUpdaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaUpdaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
