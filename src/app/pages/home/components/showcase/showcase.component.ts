import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-showcase',
  standalone: true,
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Ensure this code only runs in the browser
    if (isPlatformBrowser(this.platformId)) {
      const scrollButton = document.querySelector('.scroll-down');

      if (scrollButton) {
        scrollButton.addEventListener('click', (event) => {
          event.preventDefault();
          document.querySelector('#next-section')?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }
}
