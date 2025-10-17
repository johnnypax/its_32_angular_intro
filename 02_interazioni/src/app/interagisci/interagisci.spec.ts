import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interagisci } from './interagisci';

describe('Interagisci', () => {
  let component: Interagisci;
  let fixture: ComponentFixture<Interagisci>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interagisci]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interagisci);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
