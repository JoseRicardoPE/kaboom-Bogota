import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GalleryModel } from './models/gallery-model';
import { Button } from "../button/button";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [Button],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Gallery {
  images: GalleryModel[] = [
    {
      image: 'images/gallery/clientes_gallery_1.jpg',
      alt: 'Grupo de amigos celebrando',
    },
    {
      image: 'images/gallery/clientes_gallery_2.jpg',
      alt: 'Grupo de personas celebrando',
    },
    {
      image: 'images/gallery/clientes_gallery_3.jpg',
      alt: 'amigos celebrando',
    },
    {
      image: 'images/gallery/clientes_gallery_4.jpg',
      alt: 'Grupo de personas disfrutando',
    },
    {
      image: 'images/gallery/clientes_gallery_5.jpg',
      alt: 'Mujeres celebrando',
    },
    {
      image: 'images/gallery/clientes_gallery_6.jpg',
      alt: 'Grupo de personas en una fiesta',
    },
    {
      image: 'images/gallery/clientes_gallery_7.jpg',
      alt: 'Grupo empresarial celebrando',
    },
    {
      image: 'images/gallery/clientes_gallery_8.jpg',
      alt: 'Grupo de personas celebrando en una fiesta',
    },
  ]
}
