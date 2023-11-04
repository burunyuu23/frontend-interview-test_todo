import React from "react";

import {ModalBtn, ModalBtnSize} from "./ModalBtn";
import styles from "./ModalFooter.module.css"

interface ModalFooterProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  submitBtnText: string;
  size?: ModalBtnSize;
  onSubmit: () => void;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  clearState,
  setActive,
  submitBtnText,
  size,
  onSubmit,
}) => {
  return (
    <footer className={styles.footer}>
      <ModalBtn type="primary" size={size} onClick={onSubmit}>
        {submitBtnText}
      </ModalBtn>
      <ModalBtn
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}
      >
        Закрыть
      </ModalBtn>
    </footer>
  );
};
