import { Component, Input, ChangeDetectionStrategy, signal, ViewChild, ElementRef, effect } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Herovideo {
  @Input() media!: HeroVideoModel;
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  volume = signal(0.5);
  isPlaying = signal(true);
  
  faPlay = faPlay;
  faPause = faPause;

  onVolumeChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.volume.set(parseFloat(value));
    if (this.videoElement) {
      this.videoElement.nativeElement.volume = parseFloat(value);
    }
  }

  togglePlayPause() {
    if (this.videoElement) {
      const video = this.videoElement.nativeElement;
      if (video.paused) {
        video.play();
        this.isPlaying.set(true);
      } else {
        video.pause();
        this.isPlaying.set(false);
      }
    }
  }
}
