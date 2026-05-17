import { Component, Input } from '@angular/core';
import { ModalImgModel } from './models/modal-img.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Button } from "../button/button";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [Button],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input() data!: ModalImgModel;

  constructor(public activeModal: NgbActiveModal) {}
}
