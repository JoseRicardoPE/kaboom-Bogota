import { 
  Component, 
  inject, 
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Button } from "../button/button";
import { Herovideo } from '../herovideo/herovideo';

import { PricingModel } from './models/pricing.model';
import { HeroVideoModel } from '../herovideo/models/hero-video.model';

import { PRICING_DATA } from './data/pricing.data';

import { HeroVideoService } from '../../services/hero-video/hero-video.service';
@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    Herovideo, 
    Button
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pricing implements OnInit {

  heroVideoMedia!: HeroVideoModel;

  heroVideoService = inject(HeroVideoService);

  services: PricingModel[] = PRICING_DATA;

  ngOnInit(): void {
    this.heroVideoMedia = this.heroVideoService.getMedia('prices');
  }
}
