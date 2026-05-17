import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ModalImgModel } from '../../modal/models/modal-img.model';

export interface ServiceModel extends ModalImgModel {
  description: string;
  icon: IconProp;
}