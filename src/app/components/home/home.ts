import { Component, inject } from '@angular/core';
import { HeroVideoModel } from '../herovideo/models/hero-video.model';
import { HeroVideoService } from '../../services/hero-video/hero-video.service';
import { Herovideo } from '../herovideo/herovideo';
import { Button } from "../button/button";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Herovideo, Button],
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
