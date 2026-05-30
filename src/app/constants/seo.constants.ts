import { SeoModel } from '../models/seo-model/seo.model';

export const SEO_PAGES = {

  HOME: {
    title: 'Kaboom Bogotá | Tejo, diversión y eventos en Bogotá',
    description: 'Kaboom Bogotá: Tejo, bolirana, tiro de hacha, máquina de boxeo, espacios para eventos corporativos, eventos familiares, parche de amigos y experiencias únicas.',
    url: 'https://kaboombogota.com/',
  },

  SERVICES: {
    title: 'Servicios | Kaboom Bogotá',
    description: 'Kaboom Bogotá actividades: tejo, bolirana, tiro de hacha, máquina de boxeo y experiencias para grupos, empresas, amigos y celebraciones en Bogotá.',
    url: 'https://kaboombogota.com/services',
  },

  PRICING: {
    title: 'Precios y Reservas | Kaboom Bogotá',
    description: 'Consulta precios, planes y reservas para tejo, bolirana, tiro de hacha y eventos corporativos o familiares en Kaboom Bogotá.',
    url: 'https://kaboombogota.com/pricing',
  },

  GALLERY: {
    title: 'Galería | Kaboom Bogotá',
    description: 'Explora fotos de nuestras instalaciones, actividades, eventos empresariales, celebraciones y momentos inolvidables en Kaboom Bogotá.',
    url: 'https://kaboombogota.com/gallery',
  },

} satisfies Record<string, SeoModel>;