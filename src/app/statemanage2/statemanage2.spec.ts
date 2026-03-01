import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statemanage2 } from './statemanage2';

describe('Statemanage2', () => {
  let component: Statemanage2;
  let fixture: ComponentFixture<Statemanage2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statemanage2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statemanage2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
