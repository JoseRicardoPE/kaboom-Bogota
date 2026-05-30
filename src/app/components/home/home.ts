import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SeoService } from '../../services/seo-service/seo.service';
import { SEO_PAGES } from '../../constants/seo.constants';
import { HeroVideoModel } from '../herovideo/models/hero-video.model';
import { HeroVideoService } from '../../services/hero-video/hero-video.service';
import { Herovideo } from '../herovideo/herovideo';
import { Button } from "../button/button";
import { faClock, faStar, faCalendarCheck, faCalendarDays, faClipboardQuestion } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Herovideo,
    Button,
    FontAwesomeModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {

  faClock = faClock;
  faStar = faStar;
  faCalendarCheck = faCalendarCheck;
  faCalendarDays = faCalendarDays;
  faClipboardQuestion = faClipboardQuestion;
  faWhatsapp = faWhatsapp;

  heroVideoMedia!: HeroVideoModel;

  heroVideoService = inject(HeroVideoService);
  seoService = inject(SeoService);

  ngOnInit() {
    this.setHeroVideo();
    this.setSeoData();
  }

  private setHeroVideo(): void {
    this.heroVideoMedia = this.heroVideoService.getMedia('home');
  }

  private setSeoData(): void {
    this.seoService.updateSeo(SEO_PAGES.HOME)
  }
}
