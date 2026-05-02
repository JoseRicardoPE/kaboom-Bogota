import { Component, inject } from '@angular/core';
import { HeroVideoModel } from '../../models/hero-video/hero-video.model';
import { HeroVideoService } from '../../services/hero-video/hero-video.service';
import { Herovideo } from '../herovideo/herovideo';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Herovideo],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
  heroVideoMedia!: HeroVideoModel;

  heroVideoService = inject(HeroVideoService);

  ngOnInit() {
    this.heroVideoMedia = this.heroVideoService.getMedia('home');
  }
}
