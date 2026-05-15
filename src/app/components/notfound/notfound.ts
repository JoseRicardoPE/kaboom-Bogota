import { Component, OnInit, OnDestroy } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-notfound',
  imports: [Button],
  templateUrl: './notfound.html',
  styleUrl: './notfound.scss',
})
export class Notfound implements OnInit, OnDestroy { 

  ngOnInit(): void {
    document.body.classList.add('not-found-page');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('not-found-page');
  }
}
