/* VENDOR */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { ModalEditItemProps } from "../model/props";
import {Modal, ModalFooter, ModalHeader, ModalInput, ModalRow, ModalTextarea} from "@/shared/ui/Modal";
import {categoriesUpdated} from "@/entities/Category";
import {tasksUpdated} from "@/entities/Task";
import {useAppDispatch} from "@/shared/hooks/hooks";

export const ModalEditItem: React.FC<ModalEditItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useAppDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [name, setName] = useState(item.name),
    [selected, setSelected] = useState(item.category || ""),
    [description, setDescription] = useState(item.description);

    const handleSubmit = () => {
        dispatch(
            isCategories
                ? categoriesUpdated({ id: item.id, name, description })
                : tasksUpdated({
                    id: item.id,
                    name,
                    description,
                    category: selected,
                })
        );
        setActive(false);
    };

    return (
    <Modal active={active} setActive={setActive}>
      <ModalHeader
        setActive={setActive}
        title={
          isCategories ? "Редактирование категории" : "Редактирование задачи"
        }
      />
      {isCategories ? (
        <ModalInput name={name} setName={setName} size="large" />
      ) : (
        <ModalRow
          name={name}
          setName={setName}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Сохранить"
        size="large"
        onSubmit={handleSubmit}
      />
    </Modal>
  );
};
