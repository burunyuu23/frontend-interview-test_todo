/* VENDOR */
import React from "react";

/* APPLICATION */
import styles from "./Modal.module.css";
import {Item} from "@/shared/model/item";

interface ModalProps {
  item?: Item;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  clearState?(): void;
}

export const Modal: React.FC<ModalProps> = ({
  clearState,
  active,
  setActive,
  children,
}) => {
  return (
    <div
      className={[styles.modal, active ? styles.active : ""].join(" ")}
      onClick={() => {
        clearState && clearState();
        setActive(false);
      }}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
