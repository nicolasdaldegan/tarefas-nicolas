import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipodereceitaPage } from './tipodereceita.page';

describe('TipodereceitaPage', () => {
  let component: TipodereceitaPage;
  let fixture: ComponentFixture<TipodereceitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipodereceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
