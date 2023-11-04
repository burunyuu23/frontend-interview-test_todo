/* VENDOR */
import React, {useState} from "react";
import {useLocation} from "react-router-dom";

/* APPLICATION */
import {ModalCreateItemProps} from "@/features/ModalCreateItem/model/props";
import {Modal, ModalFooter, ModalHeader, ModalInput, ModalRow, ModalTextarea} from "@/shared/ui/Modal";
import {categoriesAdded} from "@/entities/Category";
import {tasksAdded} from "@/entities/Task";
import {useAppDispatch} from "@/shared/hooks/hooks";

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
                                                                    active,
                                                                    setActive,
                                                                }) => {
    const dispatch = useAppDispatch(),
        {pathname} = useLocation(),
        isCategories = pathname.includes("categories"),
        [name, setName] = useState(""),
        [selected, setSelected] = useState(""),
        [description, setDescription] = useState("");

    function clearState() {
        setName("");
        setDescription("");
        setSelected("");
    }

    const handleSubmit = () => {
        if (!name)
            return;
        dispatch(
            isCategories
                ? categoriesAdded({name, description})
                : tasksAdded({
                    name,
                    description,
                    category: setSelected,
                })
        );
        clearState();
        setActive(false);
    }

    return (
        <Modal active={active} setActive={setActive} clearState={clearState}>
            <ModalHeader
                clearState={clearState}
                setActive={setActive}
                title={isCategories ? "Создание категории" : "Создание задачи"}
            />
            {isCategories ? (
                <ModalInput name={name} setName={setName} size="large"/>
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
                clearState={clearState}
                submitBtnText="Создать"
                size="large"
                onSubmit={handleSubmit}
            />
        </Modal>
    );
};
