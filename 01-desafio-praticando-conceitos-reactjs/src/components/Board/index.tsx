import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { v4 as uuid } from "uuid";

import { NoHaveTask } from "../NoHaveTask";
import { Task } from "../Task";

import styles from "./styles.module.css";

interface Tasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function Board() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask: Tasks = {
      id: uuid(),
      title: newTaskText,
      isCompleted: false,
    };

    console.log(newTask);

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  return (
    <article className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleCreateNewTask}>
        <input
          type="text"
          value={newTaskText}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
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

      {tasks.length ? (
        tasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <NoHaveTask />
      )}
    </article>
  );
}
