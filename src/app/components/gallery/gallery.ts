import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Button } from "../button/button";

import { GalleryModel } from './models/gallery-model';
import { GALLERY_DATA } from './data/gallery.data';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [Button],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Gallery {
  images: GalleryModel[] = GALLERY_DATA;
}
