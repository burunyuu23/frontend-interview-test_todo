import React from "react";

export interface ModalCreateItemProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}