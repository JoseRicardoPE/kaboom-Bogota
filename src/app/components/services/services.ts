import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faWandMagicSparkles, 
  faUsers 
} from '@fortawesome/free-solid-svg-icons';

import { Herovideo } from '../herovideo/herovideo';

import { HeroVideoModel } from '../herovideo/models/hero-video.model';
import { ServiceModel } from './models/service.model';

import { SERVICES_DATA } from './data/services.data';

import { HeroVideoService } from '../../services/hero-video/hero-video.service';
import { ModalImgService } from '../../services/modal-img/modal-img.service';
import { NavbarStateService } from '../../services/navbar/navbar-state.service';

import { SeoService } from '../../services/seo-service/seo.service';
import { SEO_PAGES } from '../../constants/seo/seo.constants';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    Herovideo,
    FontAwesomeModule
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Services implements OnInit {

  private navbarState = inject(NavbarStateService);
  private heroVideoService = inject(HeroVideoService);
  private modalImgService = inject(ModalImgService);
  private seoService = inject(SeoService);

  services: ServiceModel[] = SERVICES_DATA;
  heroVideoMedia!: HeroVideoModel;

  faWandMagicSparkles = faWandMagicSparkles;
  faUsers = faUsers;

  ngOnInit() {
    this.heroVideo();
    this.setSeoData();
  }

  heroVideo() {
    this.heroVideoMedia = this.heroVideoService.getMedia('services');
  }

  private unlockBodyScroll() {
    document.body.style.overflow = '';
  }

  openModal(service: ServiceModel): void {

    //? Cerrar el menú si está abierto.
    this.navbarState.setCollapsed(true);

    //? Restaura el scroll antes de abrir el modal, para evitar que quede bloqueado si el usuario hizo scroll y luego abrió un modal.
    this.unlockBodyScroll();

    //? Abrir el modal.
    this.modalImgService.openModal(service);
  }

  private setSeoData(): void {
    this.seoService.updateSeo(SEO_PAGES.SERVICES);
  }

}
