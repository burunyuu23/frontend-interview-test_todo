/* VENDOR */
import React from "react";

/* APPLICATION */
import {ListItem} from "@/shared/ui/ListItem";
import {useAppSelector} from "@/shared/hooks/hooks";

export const Tasks: React.FC = () => {
  const tasks = useAppSelector(state => state.tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <ListItem key={task.id} item={task} />
      ))}
    </ul>
  );
};

// можно попробовать вынести svg в отдельный файл в виде кода
