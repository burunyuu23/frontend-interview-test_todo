/* VENDOR */
import {useLocation} from "react-router-dom";
import React from "react";

/* APPLICATION */
import {ModalRemoveItemProps} from "@/features/ModalRemoveItem/model/props";
import {Modal, ModalFooter, ModalHeader, ModalText} from "@/shared/ui/Modal";
import {categoriesRemoved} from "@/entities/Category";
import {tasksClearedCategories, tasksRemoved} from "@/entities/Task";
import {useAppDispatch} from "@/shared/hooks/hooks";

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({
                                                                    item,
                                                                    active,
                                                                    setActive,
                                                                }) => {
    const dispatch = useAppDispatch(),
        {pathname} = useLocation(),
        isCategories = pathname.includes("categories"),
        text = `Вы уверены, что хотите удалить задачу "${item.name}"?`;

    const handleSubmit = () => {
        if (isCategories) {
            dispatch(categoriesRemoved(item.id));
            dispatch(tasksClearedCategories(item.id));
        } else
            dispatch(tasksRemoved(item.id))
    }

    return (
        <Modal item={item} active={active} setActive={setActive}>
            <ModalHeader setActive={setActive} title={"Удаление задачи"}/>
            <ModalText text={text}/>
            <ModalFooter
                setActive={setActive}
                submitBtnText="Да"
                onSubmit={handleSubmit}
            />
        </Modal>
    );
};
