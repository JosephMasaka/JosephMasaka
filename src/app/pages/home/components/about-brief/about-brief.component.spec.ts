import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBriefComponent } from './about-brief.component';

describe('AboutBriefComponent', () => {
  let component: AboutBriefComponent;
  let fixture: ComponentFixture<AboutBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutBriefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
