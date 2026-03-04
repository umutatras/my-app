import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientComp } from './http-client-comp';

describe('HttpClientComp', () => {
  let component: HttpClientComp;
  let fixture: ComponentFixture<HttpClientComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpClientComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
