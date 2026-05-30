import { inject, Injectable } from '@angular/core';

import { DOCUMENT } from '@angular/common';

import { Meta, Title } from '@angular/platform-browser';

import { SeoModel } from '../../models/seo-model/seo.model';

@Injectable({
  providedIn: 'root',
})
export class SeoService {

  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  updateSeo(data: SeoModel): void {
    this.title.setTitle(data.title);

    this.meta.updateTag({
      name: 'description',
      content: data.description,
    });

    this.meta.updateTag({
      property: 'og:title',
      content: data.title,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: data.description,
    });

    this.meta.updateTag({
      property: 'og:url',
      content: data.url,
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: data.image ?? 'https://kaboombogota.com/assets/images/logo/logoKaboom.webp',
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: data.title,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: data.description,
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: data.image || 'https://kaboombogota.com/assets/images/logo/logoKaboom.webp',
    });

    this.setCanonicalUrl(data.url);
  }

  private setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
