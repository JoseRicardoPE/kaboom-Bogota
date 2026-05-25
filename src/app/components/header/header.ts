import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
  OnInit
} from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import {
  RouterLink,
  RouterLinkActive,
  Router,
  NavigationStart
} from '@angular/router';

import { Button } from '../button/button';
import { NavbarStateService } from '../../services/navbar/navbar-state.service';
import { filter } from 'rxjs';

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
export class Header implements OnInit {

  navbarState = inject(NavbarStateService);
  router = inject(Router);
  
  isMenuCollapsed = true;

  @ViewChild('navbar', { static: true })
  navbar!: ElementRef;

  ngOnInit(): void {
    this.collapsedMenu();
    this.closeMenuOnNavigation();
  }

  collapsedMenu() {
    this.navbarState.collapsed$.subscribe(value => {
      this.isMenuCollapsed = value;
    })
  }

  closeMenuOnNavigation(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      if (!this.isMenuCollapsed) 
        this.closeMenu();
    })
  }

  toggleMenu(): void {
    const newState = !this.isMenuCollapsed;
    this.navbarState.setCollapsed(newState);
    this.blockToggleBodyScroll(!newState);
  }

  closeMenu(): void {
    this.navbarState.setCollapsed(true);
    this.blockToggleBodyScroll(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {

    if (this.isMenuCollapsed) return;

    const target = event.target as HTMLElement;

    if (this.navbar.nativeElement.contains(target)) return;

    this.closeMenu();
  }

  private blockToggleBodyScroll(block: boolean): void {
    document.body.style.overflow = block ? 'hidden' : '';
  }
}