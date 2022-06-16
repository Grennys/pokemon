import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPokeComponent } from './listar-poke.component';

describe('ListarPokeComponent', () => {
  let component: ListarPokeComponent;
  let fixture: ComponentFixture<ListarPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
