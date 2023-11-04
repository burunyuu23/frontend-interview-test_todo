/* VENDOR */
import React, {useState} from "react";

/* APPLICATION */
import edit from "@/shared/icons/edit.svg";
import remove from "@/shared/icons/remove.svg";
import styles from "./ListItem.module.css"
import {useAppSelector} from "@/shared/hooks/hooks";
import {ModalEditItem} from "@/features/ModalEditItem";
import {ModalRemoveItem} from "@/features/ModalRemoveItem";

interface ListItemProps {
    item: {
        id: string;
        name: string;
        description: string;
        category?: string;
    };
}

export const ListItem: React.FC<ListItemProps> = ({item}) => {
    const categories = useAppSelector(state => state.categories),
        [editModalActive, setEditModalActive] = useState(false),
        [removeModalActive, setRemoveModalActive] = useState(false);

    return (
        <li className={styles.item}>
            <div className={styles.main}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>{item.name}</h3>
                    {item.category && (
                        <span className={styles.category}>
                {
                    categories.find((category) => category.id === item.category)
                        ?.name
                }
              </span>
                    )}
                </div>
                <div className={styles.descriptionContainer}>{item.description}</div>
            </div>
            <div>
                <button
                    className={styles.button}
                    onClick={() => {
                        setEditModalActive(true);
                    }}
                >
                    <img src={edit} alt="edit"/>
                </button>
                <button
                    className={styles.button}
                    onClick={() => {
                        setRemoveModalActive(true);
                    }}
                >
                    <img src={remove} alt="remove"/>
                </button>
            </div>
            <ModalEditItem
                item={item}
                active={editModalActive}
                setActive={setEditModalActive}
            />
            <ModalRemoveItem
                item={item}
                active={removeModalActive}
                setActive={setRemoveModalActive}
            />
        </li>
    );
};
