import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() icon?: IconProp;
  @Input() text = '';
  @Input() href?: string;
  @Input() routerLink?: string;
  @Input() ariaLabel?: string;
  @Input() target: '_blank' | '_self' | '_parent' | '_top' = '_self';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'link' | 'btn-modal' = 'primary';
  @Input() disabled = false;
}
