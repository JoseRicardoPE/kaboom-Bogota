import { HeroVideoModel } from "../../components/herovideo/models/hero-video.model";
import { HeroSection } from "../../services/hero-video/hero-video.type";

export const HERO_VIDEOS: Record<HeroSection, HeroVideoModel> = {

  home: {
    video: 'assets/videos/homeVideo.mp4',
    poster: 'assets/images/home.jpg',
  },

  services: {
    video: 'assets/videos/hachaVideo.mp4',
    poster: 'assets/images/services.jpg',
  },

  prices: {
    video: 'assets/videos/tejo2Video.mp4',
    poster: 'assets/images/prices.jpg',
  },

  booking: {
    video: 'assets/videos/reservasVideo.mp4',
    poster: 'assets/images/booking.jpg',
  },

  contact: {
    video: 'assets/videos/tejoVideo.mp4',
    poster: 'assets/images/booking.jpg',
  },

} as const;