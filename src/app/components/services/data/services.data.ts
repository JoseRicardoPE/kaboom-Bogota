import { 
  faBullseye, 
  faCircleDot, 
  faFire, 
  faExplosion,
} from '@fortawesome/free-solid-svg-icons';

import { ServiceModel } from '../models/service.model';

export const SERVICES_DATA: ServiceModel[] = [
    {
      title: 'Tiro de hacha',
      description: '¡Somos los únicos en Bogotá! Vive una experiencia llena de precisión y adrenalina.',
      icon: faBullseye,
      image: 'assets/images/services/tiro_de_hacha.webp',
    },
    {
      title: 'Bolirana',
      description: 'Reta tu puntería y diviértete con este clásico que nunca falla.',
      icon: faCircleDot,
      image: 'assets/images/services/bolirana.webp',
    },
    {
      title: 'Tejo',
      description: 'Disfruta la tradición colombiana con explosión, risas y buena energía.',
      icon: faFire,
      image: 'assets/images/services/tejo.webp',
    },
    {
      title: 'Máquina de boxeo',
      description: 'Mide tu fuerza y compite con tus amigos en el reto más explosivo.',
      icon: faExplosion,
      image: 'assets/images/services/boxeo.webp',
    }
]