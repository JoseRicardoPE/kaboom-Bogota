import { Component, ChangeDetectionStrategy, inject } from '@angular/core';

import { Button } from "../button/button";

import { GalleryModel } from './models/gallery-model';
import { GALLERY_DATA } from './data/gallery.data';

import { SeoService } from '../../services/seo-service/seo.service';
import { SEO_PAGES } from '../../constants/seo/seo.constants';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [Button],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Gallery {
  
  seoService = inject(SeoService);

  images: GalleryModel[] = GALLERY_DATA;

  ngOnInit() {
    this.setSeoData();
  }

  private setSeoData() {
    this.seoService.updateSeo(SEO_PAGES.GALLERY);
  }

}
