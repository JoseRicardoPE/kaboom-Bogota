import { Component, inject } from '@angular/core';
import { HeroVideoModel } from '../../models/hero-video/hero-video.model';
import { HeroVideoService } from '../../services/hero-video/hero-video.service';
import { Herovideo } from '../herovideo/herovideo';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBullseye, faCircleDot, faFire, faExplosion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  imports: [
    Herovideo,
    FontAwesomeModule
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  heroVideoMedia!: HeroVideoModel;

  heroVideoService = inject(HeroVideoService);

  ngOnInit() {
    this.heroVideoMedia = this.heroVideoService.getMedia('services');
  }

  faBullseye = faBullseye;
  faCircleDot = faCircleDot;
  faFire = faFire;
  faExplosion = faExplosion;
}
