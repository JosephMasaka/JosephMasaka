import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.activateNavbar();
  }

  activateNavbar() {
    const navbar = document.getElementById('navbarSupportedContent');
    const horiSelector = document.querySelector('.hori-selector');

    if (!navbar || !horiSelector) return;

    const updateActiveIndicator = (element: HTMLElement) => {
      const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = element;
      (horiSelector as HTMLElement).style.cssText = `
        top: ${offsetTop}px;
        left: ${offsetLeft}px;
        height: ${offsetHeight}px;
        width: ${offsetWidth}px;
      `;
    };

    const activeItem = navbar.querySelector('li.active') as HTMLElement;
    if (activeItem) updateActiveIndicator(activeItem);

    navbar.addEventListener('click', (event: Event) => {
      const target = (event.target as HTMLElement).closest('li');
      if (!target) return;

      navbar.querySelectorAll('li').forEach(li => li.classList.remove('active'));
      target.classList.add('active');
      updateActiveIndicator(target);
    });
  }

  @HostListener('window:resize')
  onResize() {
    setTimeout(() => this.activateNavbar(), 500);
  }
}
