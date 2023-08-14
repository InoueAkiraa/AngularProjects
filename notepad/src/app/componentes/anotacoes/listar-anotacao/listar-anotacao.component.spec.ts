import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnotacaoComponent } from './listar-anotacao.component';

describe('ListarAnotacaoComponent', () => {
  let component: ListarAnotacaoComponent;
  let fixture: ComponentFixture<ListarAnotacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAnotacaoComponent]
    });
    fixture = TestBed.createComponent(ListarAnotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
