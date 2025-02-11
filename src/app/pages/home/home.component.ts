import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { AboutBriefComponent } from './components/about-brief/about-brief.component';
import { TechnicalAcumenComponent } from './components/technical-acumen/technical-acumen.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ShowcaseComponent, AboutBriefComponent, TechnicalAcumenComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
