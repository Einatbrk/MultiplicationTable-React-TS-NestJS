import { ModalProps } from "../Modal.types";
export interface AnswerResponseModalProps extends ModalProps{
    isCorrect:boolean | null;
    gender: 'boy' | 'girl';
}