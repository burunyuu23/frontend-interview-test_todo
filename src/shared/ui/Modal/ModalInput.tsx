import React from "react";

import important from "@/shared/icons/important.svg";
import styles from "./ModalInput.module.css"
import {ModalBtnSize} from "@/shared/ui/Modal/ModalBtn";

interface ModalInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  size?: ModalBtnSize;
}

export const ModalInput: React.FC<ModalInputProps> = ({
  name,
  setName,
  size,
}) => {
  return (
    <div
      className={[styles.wrapper, size && styles[size]].join(" ")}
    >
      <input
        id="modalinput"
        className={styles.input}
        placeholder="Введите имя задачи/категории"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <img src={important} alt="important" className={styles.icon} />
      <label htmlFor="modalinput">Имя</label>
    </div>
  );
};
