import { PlusCircle } from "phosphor-react";
import { NoHaveTask } from "../NoHaveTask";
import { Task } from "../Task";
import styles from "./styles.module.css";

export function Board() {
  return (
    <article className={styles.wrapper}>
      <form className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <PlusCircle size={16} />
        </button>
      </form>

      <header className={styles.header}>
        <p className={styles.createdTasks}>
          Tarefas criadas <strong>0</strong>
        </p>
        <p className={styles.completedTasks}>
          Concluídas <strong>0</strong>
        </p>
      </header>

      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </article>
  );
}
