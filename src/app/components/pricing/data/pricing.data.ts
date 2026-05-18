import { PricingModel } from "../models/pricing.model";

export const PRICING_DATA: PricingModel[] = [
  {
    title: 'Bolirana',
    price: '$10.000 / hora',
    extra: 'Incluye 1 bebida de cortesía (Servicio sin reserva, dependiendo disponibilidad).',
    image: 'assets/images/prices/bolirana.webp',
    hasBooking: false,
  },
  {
    title: 'Tiro de hacha',
    price: '$22.000 / hora',
    extra: 'Incluye 2 bebidas de cortesía',
    image: 'assets/images/prices/tiroHacha.webp',
    hasBooking: true,
  },
  {
    title: 'Tejo',
    price: '$22.000 / hora',
    extra: 'Incluye 2 bebidas de cortesía',
    image: 'assets/images/prices/tejo.webp',
    hasBooking: true,
  },
  {
    title: 'Máquina de boxeo',
    price: '$2.000 - $20.000',
    extra:
      'El valor depende de la cantidad de golpes que desees jugar. (Servicio sin reserva, dependiendo disponibilidad).',
    image: 'assets/images/prices/boxeo.webp',
    hasBooking: false,
  },
];
