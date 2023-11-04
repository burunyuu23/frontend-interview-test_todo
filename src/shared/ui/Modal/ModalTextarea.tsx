import React from "react";

import styles from "./ModalTextarea.module.css"

interface ModalTextareaProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalTextarea: React.FC<ModalTextareaProps> = ({
  description,
  setDescription,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="modaltextarea">Описание</label>
      <textarea
        id="modaltextarea"
        className={styles.modaltextarea}
        placeholder="Введите описание задачи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};
