import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-value-preposition',
  standalone: true,
  templateUrl: './value-preposition.component.html',
  styleUrls: ['./value-preposition.component.css']
})
export class ValuePrepositionComponent implements AfterViewInit {
  
  @ViewChild('statsSection', { static: true }) statsSection!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      setTimeout(() => {
        console.log("Stats Section after delay: ", this.statsSection);
        if (this.statsSection) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                this.animateCounter("coffee-count", 1200);
                this.animateCounter("code-count", 4800);
                this.animateCounter("projects-count", 35);
  
                this.animateProgressBar("coffee-bar", 80);
                this.animateProgressBar("code-bar", 95);
                this.animateProgressBar("projects-bar", 70);
  
                observer.disconnect();
              }
            });
          }, { threshold: 0.5 });
  
          observer.observe(this.statsSection.nativeElement);
        }
      }, 500); // Small delay to ensure DOM loads
    }
  }
  

  animateCounter(id: string, target: number) {
    let count = 0;
    const step = Math.ceil(target / 100);
    const element = document.getElementById(id);

    if (!element) return;

    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      element.textContent = count.toLocaleString();
    }, 30);
  }

  animateProgressBar(id: string, targetWidth: number) {
    const progressBar = document.getElementById(id);
    if (progressBar) {
      progressBar.style.transition = "width 1s ease-in-out";
      progressBar.style.width = `${targetWidth}%`;
    }
  }
}
