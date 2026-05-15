import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() text = '';
  @Input() href?: string;
  @Input() routerLink?: string;
  @Input() ariaLabel?: string;
  @Input() target: '_blank' | '_self' | '_parent' | '_top' = '_self';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'link' | 'btn-modal' = 'primary';
  @Input() disabled = false;
}
