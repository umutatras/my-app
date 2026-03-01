import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statemanage1 } from './statemanage1';

describe('Statemanage1', () => {
  let component: Statemanage1;
  let fixture: ComponentFixture<Statemanage1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statemanage1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statemanage1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
