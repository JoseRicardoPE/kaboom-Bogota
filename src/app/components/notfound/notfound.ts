import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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

  private document = inject(DOCUMENT);

  ngOnInit(): void {
    this.document.body.classList.add('not-found-page');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('not-found-page');
  }
}
