import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingEditorComponent } from './topping-editor.component';

describe('ToppingEditorComponent', () => {
  let component: ToppingEditorComponent;
  let fixture: ComponentFixture<ToppingEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToppingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
