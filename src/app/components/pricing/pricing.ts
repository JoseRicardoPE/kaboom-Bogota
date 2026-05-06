import { Component, inject } from '@angular/core';
import { HeroVideoModel } from '../../models/hero-video/hero-video.model';
import { HeroVideoService } from '../../services/hero-video/hero-video.service';
import { CommonModule } from '@angular/common';
import { Herovideo } from '../herovideo/herovideo';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, Herovideo],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {

  heroVideoMedia!: HeroVideoModel;

  heroVideoService = inject(HeroVideoService);

  services = [
    {
      title: 'Bolirana',
      price: '$10.000 / hora',
      extra: 'Incluye 1 bebida de cortesía (Único servicio sin reserva, dependiendo disponibilidad).',
      image: 'images/prices/bolirana.webp'
    },
    {
      title: 'Tiro de hacha',
      price: '$22.000 / hora',
      extra: 'Incluye 2 bebidas de cortesía',
      image: 'images/prices/tiroHacha.webp'
    },
    {
      title: 'Tejo',
      price: '$22.000 / hora',
      extra: 'Incluye 2 bebidas de cortesía',
      image: 'images/prices/tejo.webp'
    },
    {
      title: 'Máquina de boxeo',
      price: '$2.000 - $20.000',
      extra: 'El valor depende de la cantidad de golpes que desees jugar.',
      image: 'images/prices/boxeo.webp'
    },
  ];

  ngOnInit() {
    this.heroVideoMedia = this.heroVideoService.getMedia('prices');
  }
}
