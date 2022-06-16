import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPokenombreComponent } from './listar-pokenombre.component';

describe('ListarPokenombreComponent', () => {
  let component: ListarPokenombreComponent;
  let fixture: ComponentFixture<ListarPokenombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPokenombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPokenombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
