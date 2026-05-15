import { Injectable } from '@angular/core';
import { ModalImgModel } from '../../components/modal/models/modal-img.model';
import { Modal } from '../../components/modal/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalImgService {

  constructor(private modalService: NgbModal) { }

  openModal(data: ModalImgModel) {
    const modalRef = this.modalService.open(Modal, {
      centered: true,
      size: 'lg',
      windowClass: 'modal-container',
    });

    modalRef.componentInstance.data = data;
  }
}
