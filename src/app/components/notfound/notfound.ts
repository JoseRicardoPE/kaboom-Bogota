import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [Button],
  templateUrl: './notfound.html',
  styleUrl: './notfound.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Notfound implements OnInit, OnDestroy { 

  ngOnInit(): void {
    document.body.classList.add('not-found-page');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('not-found-page');
  }
}
