import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculoagua } from './calculoagua';

describe('Calculoagua', () => {
  let component: Calculoagua;
  let fixture: ComponentFixture<Calculoagua>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculoagua],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculoagua);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
