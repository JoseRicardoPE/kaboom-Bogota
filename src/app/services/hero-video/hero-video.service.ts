import { Injectable } from '@angular/core';
import { HeroVideoModel } from '../../components/herovideo/models/hero-video.model';
import { HeroSection } from './hero-video.type';
import { HERO_VIDEOS } from '../../constants/hero-video/hero-video.constants';

@Injectable({
  providedIn: 'root',
})
export class HeroVideoService {
  getMediaForSection(key: HeroSection): HeroVideoModel {
    return HERO_VIDEOS[key];
  }
}
