import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formlar } from './formlar';

describe('Formlar', () => {
  let component: Formlar;
  let fixture: ComponentFixture<Formlar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formlar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formlar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
