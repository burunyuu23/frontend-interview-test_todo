import React from "react";

import close from "@/shared/icons/close.svg";
import styles from "./ModalHeader.module.css"

interface ModalHeaderProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  clearState,
  title,
  setActive,
}) => {
  return (
    <header className={styles.header}>
      <h4 className={styles.title}>{title}</h4>
      <button
        className={styles.btn}
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}
      >
        <img src={close} alt="close" />
      </button>
    </header>
  );
};
