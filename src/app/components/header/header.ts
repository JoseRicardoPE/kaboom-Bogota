import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [
    NgbCollapseModule,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,  
})
export class Header {
  isMenuCollapsed = true;

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
