import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./styles.module.css";

interface TaskProps {
  task: Task;
}

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function Task({ task }: TaskProps) {
  return (
    <section className={styles.task}>
      <button className={styles.taskCheck}>
        {task.isCompleted ? (
          <CheckCircle className={styles.iconCheck} size={24} />
        ) : (
          <Circle size={24} />
        )}
      </button>
      <p>{task.title}</p>
      <button className={styles.deleteTask}>
        <Trash size={24} />
      </button>
    </section>
  );
}
