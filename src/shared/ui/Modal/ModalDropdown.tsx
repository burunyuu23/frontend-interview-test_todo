/* VENDOR */
import React, {useState} from "react";

/* APPLICATION */
import down from "@/shared/icons/down.svg";
import styles from "./ModalDropdown.module.css"
import {useAppSelector} from "@/shared/hooks/hooks";

interface ModalDropdownProps {
    selected: string | undefined;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalDropdown: React.FC<ModalDropdownProps> = ({
                                                                selected,
                                                                setSelected,
                                                            }) => {
    const [isActive, setIsActive] = useState(false),
        options = useAppSelector(state => state.categories);

    return (
        <div className={styles.dropdown} onClick={() => setIsActive(!isActive)}>
            <span className={styles.label}>Категория</span>
            <div className={[styles.btn, !selected && styles.placeholder].join(" ")}>
                {options.find((option) => option.id === selected)?.name ||
                    "Выберите категорию"}
                <img src={down} alt="open dropdown"/>
            </div>
            {isActive && (
                <div className={styles.content}>
                    {options.map((option) => (
                        <div
                            className={styles.item}
                            onClick={() => {
                                setSelected(option.id);
                                setIsActive(false);
                            }}
                            key={option.id}
                        >
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
