import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuePrepositionComponent } from './value-preposition.component';

describe('ValuePrepositionComponent', () => {
  let component: ValuePrepositionComponent;
  let fixture: ComponentFixture<ValuePrepositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuePrepositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValuePrepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
