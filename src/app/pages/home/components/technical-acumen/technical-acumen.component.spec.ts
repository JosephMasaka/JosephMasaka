import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalAcumenComponent } from './technical-acumen.component';

describe('TechnicalAcumenComponent', () => {
  let component: TechnicalAcumenComponent;
  let fixture: ComponentFixture<TechnicalAcumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalAcumenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalAcumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
