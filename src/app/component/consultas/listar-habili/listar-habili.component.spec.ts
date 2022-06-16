import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHabiliComponent } from './listar-habili.component';

describe('ListarHabiliComponent', () => {
  let component: ListarHabiliComponent;
  let fixture: ComponentFixture<ListarHabiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHabiliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHabiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
