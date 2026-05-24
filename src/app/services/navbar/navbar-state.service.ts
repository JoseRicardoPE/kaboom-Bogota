import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarStateService {
  
  private collapsedNavbar = new BehaviorSubject<boolean>(true);

  collapsed$ = this.collapsedNavbar.asObservable();

  get isCollapsed(): boolean {
    return this.collapsedNavbar.value;
  }

  setCollapsed(value: boolean) {
    this.collapsedNavbar.next(value);
  }
}
