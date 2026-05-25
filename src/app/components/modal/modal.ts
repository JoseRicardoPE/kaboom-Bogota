import { Component, Input, HostListener, inject } from '@angular/core';
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
  
  activeModal = inject(NgbActiveModal);

  @Input() data!: ModalImgModel;

  @HostListener('window:popstate')
  onPopState(): void {
    this.activeModal.close();
  }

}
