import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-value-preposition',
  standalone: true,
  templateUrl: './value-preposition.component.html',
  styleUrls: ['./value-preposition.component.css']
})
export class ValuePrepositionComponent implements AfterViewInit {
  
  @ViewChild('statsSection', { static: false }) statsSection!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter('coffee-count', 1500, 'coffee-bar', 75);
          this.animateCounter('code-count', 10000, 'code-bar', 100);
          this.animateCounter('projects-count', 50, 'projects-bar', 85);
          observer.disconnect(); // Prevents re-triggering
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    if (this.statsSection) {
      observer.observe(this.statsSection.nativeElement);
    }
  }

  animateCounter(id: string, target: number, barId: string, maxWidth: number) {
    let count = 0;
    const speed = target / 100;
    const interval = setInterval(() => {
      count += Math.ceil(speed);
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      const element = document.getElementById(id);
      if (element) element.textContent = count.toLocaleString();
      const progressBar = document.getElementById(barId);
      if (progressBar) progressBar.style.width = `${maxWidth}%`;
    }, 30);
  }
}
