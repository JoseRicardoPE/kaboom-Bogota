import { Component, input } from '@angular/core';
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
  icon = input<IconProp | undefined>(undefined);
  text = input('');
  href = input<string | undefined>(undefined);
  routerLink = input<string | undefined>(undefined);
  ariaLabel = input<string | undefined>(undefined);
  target = input<'_blank' | '_self' | '_parent' | '_top'>('_self');
  variant = input<'primary' | 'link' | 'btn-modal'>('primary');
  disabled = input(false);
}
