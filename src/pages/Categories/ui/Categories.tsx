/* VENDOR */
import React from "react";

/* APPLICATION */
import {ListItem} from "@/shared/ui/ListItem";
import {useAppSelector} from "@/shared/hooks/hooks";

export const Categories = () => {
    const categories = useAppSelector(state => state.categories);

    return (
        <ul>
            {categories.map((category) => (
                <ListItem key={category.id} item={category} />
            ))}
        </ul>
    );
};
