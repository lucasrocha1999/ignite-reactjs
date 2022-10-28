import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./styles.module.css";

const newTask = {
  id: 1,
  content:
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  complete: false,
};

export function Task() {
  return (
    <section className={styles.task}>
      <button className={styles.taskCheck}>
        {newTask.complete ? (
          <CheckCircle className={styles.iconCheck} size={24} />
        ) : (
          <Circle size={24} />
        )}
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.deleteTask}>
        <Trash size={24} />
      </button>
    </section>
  );
}
