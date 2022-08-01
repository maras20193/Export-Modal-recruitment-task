import { AnimatePresence } from "framer-motion";
import { HTMLAttributes, useRef } from "react";
import { useDetectOutsideClick } from "../../hooks";
import * as S from "./Modal.styled";

export type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal");
document.body.appendChild(modalRoot);

export const Modal = ({
  children,
  title,
  isOpen,
  onClose,
  ...rest
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  let el = document.getElementById("modal");

  if (!el) {
    el = document.createElement("div");
    el.setAttribute("id", "modal");
    document.body.appendChild(el);
  }

  const handleOutsideClick = () => {
    if (isOpen && onClose) {
      onClose();
    }
  };

  useDetectOutsideClick(modalRef, handleOutsideClick);

  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <S.Background
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 400, opacity: 0 }}
          transition={{ type: "spring", duration: 0.35 }}
          data-testid="modal-back"
        >
          <S.Modal ref={modalRef} data-testid="modal" {...rest}>
            <S.Header>{title}</S.Header>
            <S.Body>{children}</S.Body>
          </S.Modal>
        </S.Background>
      )}
    </AnimatePresence>
  );
};
