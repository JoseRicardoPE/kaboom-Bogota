import { Component, Input } from '@angular/core';
import { ModalImgModel } from './models/modal-img.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Button } from "../button/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [Button, CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input() data!: ModalImgModel;

  constructor(public activeModal: NgbActiveModal) {}
}
