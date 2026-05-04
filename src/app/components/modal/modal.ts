import { Component, Input } from '@angular/core';
import { ModalImgModel } from '../../models/modal-img/modal-img.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input() data!: ModalImgModel;

  constructor(public activeModal: NgbActiveModal) {}
}
