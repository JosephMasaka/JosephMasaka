import { Component, AfterViewInit, HostListener, Inject, PLATFORM_ID, ElementRef, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object, private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.activateNavbar();
    }
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

  

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const navbar = this.el.nativeElement.querySelector('.navbar');
    const horiSelectorLeft = this.el.nativeElement.querySelector('.left');
    const horiSelectorRight = this.el.nativeElement.querySelector('.right');
    if (window.scrollY > 0) {
      this.renderer.addClass(navbar, 'default');
      // this.renderer.addClass(horiSelectorLeft, 'default');
      // this.renderer.addClass(horiSelectorRight, 'default');
      this.renderer.removeClass(horiSelectorLeft, 'd-none');
      this.renderer.removeClass(horiSelectorRight, 'd-none');
    } else {
      // this.renderer.removeStyle(navbar, 'position');
      // this.renderer.removeStyle(navbar, 'top');
      // this.renderer.removeStyle(navbar, 'width');
      this.renderer.removeClass(navbar, 'default');
      // this.renderer.removeClass(horiSelectorLeft, 'default');
      // this.renderer.removeClass(horiSelectorRight, 'default');
      this.renderer.addClass(horiSelectorLeft, 'd-none');
      this.renderer.addClass(horiSelectorRight, 'd-none');
    }
  }
}
