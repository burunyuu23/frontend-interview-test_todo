import React from "react";

import styles from "./ModalBtn.module.css";

export type ModalBtnType = "primary"

export type ModalBtnSize = "large"

interface ModalBtnProps {
  type?: ModalBtnType;
  children: React.ReactNode;
  size?: ModalBtnSize;
  onClick: () => void;
}

export const ModalBtn: React.FC<ModalBtnProps> = ({
  type,
  children,
  size,
  onClick,
}) => {
  const btnClass = [styles.btn, type && styles[type], size && styles[size]].join(" ")

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
