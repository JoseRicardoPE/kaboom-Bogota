import { Component, inject } from '@angular/core';
import { HeroVideoModel } from '../herovideo/models/hero-video.model';
import { HeroVideoService } from '../../services/hero-video/hero-video.service';
import { CommonModule } from '@angular/common';
import { Herovideo } from '../herovideo/herovideo';
import { Button } from "../button/button";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CommonModule, 
    Herovideo, 
    Button
  ],
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
      extra: 'Incluye 1 bebida de cortesía (Servicio sin reserva, dependiendo disponibilidad).',
      image: 'images/prices/bolirana.webp',
      hasBooking: false,
    },
    {
      title: 'Tiro de hacha',
      price: '$22.000 / hora',
      extra: 'Incluye 2 bebidas de cortesía',
      image: 'images/prices/tiroHacha.webp',
      hasBooking: true,
    },
    {
      title: 'Tejo',
      price: '$22.000 / hora',
      extra: 'Incluye 2 bebidas de cortesía',
      image: 'images/prices/tejo.webp',
      hasBooking: true,
    },
    {
      title: 'Máquina de boxeo',
      price: '$2.000 - $20.000',
      extra: 'El valor depende de la cantidad de golpes que desees jugar. (Servicio sin reserva, dependiendo disponibilidad).',
      image: 'images/prices/boxeo.webp',
      hasBooking: false,
    },
  ];

  ngOnInit() {
    this.heroVideoMedia = this.heroVideoService.getMedia('prices');
  }
}
