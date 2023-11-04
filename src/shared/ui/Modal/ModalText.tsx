import React from "react";

import styles from "./ModalText.module.css"

interface ModalTextProps {
  text: string;
}

export const ModalText: React.FC<ModalTextProps> = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};
