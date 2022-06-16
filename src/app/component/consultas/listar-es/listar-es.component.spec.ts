import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEsComponent } from './listar-es.component';

describe('ListarEsComponent', () => {
  let component: ListarEsComponent;
  let fixture: ComponentFixture<ListarEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
