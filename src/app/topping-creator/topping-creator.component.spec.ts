import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingCreatorComponent } from './topping-creator.component';

describe('ToppingCreatorComponent', () => {
  let component: ToppingCreatorComponent;
  let fixture: ComponentFixture<ToppingCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToppingCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
