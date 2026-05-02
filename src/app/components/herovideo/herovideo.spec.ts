import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Herovideo } from './herovideo';

describe('Herovideo', () => {
  let component: Herovideo;
  let fixture: ComponentFixture<Herovideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Herovideo],
    }).compileComponents();

    fixture = TestBed.createComponent(Herovideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
