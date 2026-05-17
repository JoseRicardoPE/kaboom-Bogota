import { Injectable } from '@angular/core';
import { HeroVideoModel } from '../../components/herovideo/models/hero-video.model';

type HeroSection = 'home' | 'services' | 'prices' | 'booking' | 'contact';

@Injectable({
  providedIn: 'root',
})
export class HeroVideoService {
  private mediaMap: Record<string, HeroVideoModel> = {
    home: {
      video: 'videos/homeVideo.mp4',
      poster: 'assets/images/home.jpg',
    },
    services: {
      video: 'videos/hachaVideo.mp4',
      poster: 'assets/images/services.jpg',
    },
    prices: {
      video: 'videos/tejo2Video.mp4',
      poster: 'assets/images/prices.jpg',
    },
    booking: {
      video: 'videos/reservasVideo.mp4',
      poster: 'assets/images/booking.jpg',
    },
    contact: {
      video: 'videos/tejoVideo.mp4',
      poster: 'assets/images/booking.jpg',
    },
  };

  getMedia(key: HeroSection): HeroVideoModel {
    return (
      this.mediaMap[key] || {
        video: 'videos/default.mp4',
        poster: 'assets/images/default.jpg',
      }
    );
  }
}
