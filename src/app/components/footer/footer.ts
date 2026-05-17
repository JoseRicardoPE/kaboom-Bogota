import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTiktok, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreenButton, faLocationCrosshairs, faEnvelope, faExplosion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule,
    FontAwesomeModule,
    RouterLink,
    RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  faTiktok = faTiktok;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faMobile = faMobileScreenButton;
  faLocation = faLocationCrosshairs;
  faEnvelope = faEnvelope;
  faExplosion = faExplosion;
}
