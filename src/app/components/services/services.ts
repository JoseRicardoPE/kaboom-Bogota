import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faWandMagicSparkles, 
  faUsers 
} from '@fortawesome/free-solid-svg-icons';

import { Herovideo } from '../herovideo/herovideo';

import { HeroVideoModel } from '../herovideo/models/hero-video.model';
import { ServiceModel } from './models/service.model';

import { SERVICES_DATA } from './data/services.data';

import { HeroVideoService } from '../../services/hero-video/hero-video.service';
import { ModalImgService } from '../../services/modal-img/modal-img.service';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    Herovideo,
    FontAwesomeModule
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Services implements OnInit {

  services: ServiceModel[] = SERVICES_DATA;
  heroVideoMedia!: HeroVideoModel;

  heroVideoService = inject(HeroVideoService);
  modalImgService = inject(ModalImgService);

  faWandMagicSparkles = faWandMagicSparkles;
  faUsers = faUsers;

  ngOnInit() {
    this.heroVideoMedia = this.heroVideoService.getMedia('services');
  }

  openModal(service: ServiceModel) {
    this.modalImgService.openModal(service);
  }

}
