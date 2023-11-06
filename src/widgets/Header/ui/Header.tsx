/* VENDOR */
import React, {useCallback, useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";

/* APPLICATION */
import styles from "./Header.module.css";
import { ModalCreateItem } from "@/features/ModalCreateItem";
import plus from "@/shared/icons/plus.svg";

export const Header = () => {
  const { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [createModalActive, setCreateModalActive] = useState(false);

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleWindowResize = useCallback(() => {
        setWindowSize(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleWindowResize]);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ToDo List</h1>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li
            className={[styles.listItem, !isCategories && styles.active].join(" ")}
          >
            <Link to="tasks">Задачи</Link>
          </li>
          <li
            className={[styles.listItem, isCategories && styles.active].join(" ")}
          >
            <Link to="categories">Категории</Link>
          </li>
        </ul>
        <button
          className={styles.button}
          onClick={() => {
            setCreateModalActive(true);
          }}
        >
            {windowSize > 760 ?
                (isCategories ? "Добавить категорию" : "Добавить задачу")
                :
                (<img className={styles.icon} src={plus} alt="open dropdown"/>)
            }
        </button>
      </nav>
      <ModalCreateItem
        active={createModalActive}
        setActive={setCreateModalActive}
      />
    </header>
  );
};
