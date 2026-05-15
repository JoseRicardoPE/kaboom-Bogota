import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Button } from "../button/button";

@Component({
  selector: 'app-header',
  imports: [
    NgbCollapseModule,
    RouterLink,
    RouterLinkActive,
    Button
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
