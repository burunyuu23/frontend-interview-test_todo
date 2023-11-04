import React from "react";
import {Item} from "@/shared/model/item";

export interface ModalRemoveItemProps {
    item: Item;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}