import {
  Component,
  input,
  signal,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import { HeroVideoModel } from './models/hero-video.model';

@Component({
  selector: 'app-herovideo',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './herovideo.html',
  styleUrl: './herovideo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Herovideo implements AfterViewInit {
  media = input<HeroVideoModel>(undefined!);

  @ViewChild('videoElement')
  videoElement!: ElementRef<HTMLVideoElement>;

  volume = signal(0.5);
  isPlaying = signal(false);

  faPlay = faPlay;
  faPause = faPause;

  ngAfterViewInit(): void {
    const video = this.videoElement.nativeElement;

    // Volumen inicial
    video.volume = this.volume();

    // Intentar reproducir automáticamente
    video
      .play()
      .then(() => {
        this.isPlaying.set(true);
      })
      .catch((error) => {
        console.error('Error reproduciendo el video:', error);
        this.isPlaying.set(false);
      });

    // Mantener sincronizado el estado real del video
    video.addEventListener('play', () => {
      this.isPlaying.set(true);
    });

    video.addEventListener('pause', () => {
      this.isPlaying.set(false);
    });
  }

  onVolumeChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const numValue = parseFloat(value);

    this.volume.set(numValue);

    if (this.videoElement) {
      const video = this.videoElement.nativeElement;

      video.volume = numValue;

      // Mutear automáticamente si volumen es 0
      video.muted = numValue === 0;
    }
  }

  togglePlayPause(): void {
    if (!this.videoElement) return;

    const video = this.videoElement.nativeElement;

    if (video.paused) {
      video
        .play()
        .then(() => {
          this.isPlaying.set(true);
        })
        .catch((error) => {
          console.error('Error reproduciendo el video:', error);
        });
    } else {
      video.pause();
      this.isPlaying.set(false);
    }
  }
}