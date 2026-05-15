import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroVideoModel } from './models/hero-video.model';
import { HeroVideoService } from '../../services/hero-video/hero-video.service';

@Component({
  selector: 'app-herovideo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herovideo.html',
  styleUrl: './herovideo.scss',
})
export class Herovideo {
  
  private heroVideoService = inject(HeroVideoService);

  @Input() media!: HeroVideoModel;

}
