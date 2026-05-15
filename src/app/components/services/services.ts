import { Component, inject } from '@angular/core';

import { HeroVideoModel } from '../herovideo/models/hero-video.model';
import { HeroVideoService } from '../../services/hero-video/hero-video.service';
import { Herovideo } from '../herovideo/herovideo';

import { ModalImgService } from '../../services/modal-img/modal-img.service';
import { ModalImgModel } from '../modal/models/modal-img.model';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBullseye, faCircleDot, faFire, faExplosion } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [
    CommonModule,
    Herovideo,
    FontAwesomeModule
],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  heroVideoMedia!: HeroVideoModel;

  heroVideoService = inject(HeroVideoService);
  modalImgService = inject(ModalImgService);

  services: (ModalImgModel & { description: string; icon: any })[] = [
    {
      title: 'Tiro de hacha',
      description: '¡Somos los únicos en Bogotá! Vive una experiencia llena de precisión y adrenalina.',
      icon: faBullseye,
      image: 'images/services/tiro_de_hacha.jpeg',
    },
    {
      title: 'Bolirana',
      description: 'Reta tu puntería y diviértete con este clásico que nunca falla.',
      icon: faCircleDot,
      image: 'images/services/bolirana.jpeg',
    },
    {
      title: 'Tejo',
      description: 'Disfruta la tradición colombiana con explosión, risas y buena energía.',
      icon: faFire,
      image: 'images/services/tejo.jpeg',
    },
    {
      title: 'Máquina de boxeo',
      description: 'Mide tu fuerza y compite con tus amigos en el reto más explosivo.',
      icon: faExplosion,
      image: 'images/services/boxeo.jpeg',
    }
  ];

  ngOnInit() {
    this.heroVideoMedia = this.heroVideoService.getMedia('services');
  }

  openModal(service: ModalImgModel) {
    this.modalImgService.openModal(service);
  }

}
