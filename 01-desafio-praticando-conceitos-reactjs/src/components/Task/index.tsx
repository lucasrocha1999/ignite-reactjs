import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./styles.module.css";

interface TaskProps {
  task: Task;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleCompleteTask() {
    onCompleteTask(task.id);
  }

  console.log(task);
  return (
    <section className={styles.task}>
      <button className={styles.taskCheck} onClick={handleCompleteTask}>
        {task.isCompleted ? (
          <CheckCircle className={styles.iconCheck} size={24} />
        ) : (
          <Circle size={24} />
        )}
      </button>
      {task.isCompleted ? (
        <p className={styles.paragraphIsCompleted}>{task.title}</p>
      ) : (
        <p>{task.title}</p>
      )}
      <button className={styles.deleteTask} onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </section>
  );
}
