import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { AboutBriefComponent } from './components/about-brief/about-brief.component';
import { TechnicalAcumenComponent } from './components/technical-acumen/technical-acumen.component';
import { ValuePrepositionComponent } from './components/value-preposition/value-preposition.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ShowcaseComponent, AboutBriefComponent, TechnicalAcumenComponent, ValuePrepositionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
