import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaEditorListComponent } from './pizza-editor-list.component';

describe('PizzaEditorListComponent', () => {
  let component: PizzaEditorListComponent;
  let fixture: ComponentFixture<PizzaEditorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaEditorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaEditorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
