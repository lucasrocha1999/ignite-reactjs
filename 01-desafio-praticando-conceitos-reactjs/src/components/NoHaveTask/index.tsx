import clipboardImg from "../../assets/clipboard.svg";

import styles from "./styles.module.css";

export function NoHaveTask() {
  return (
    <section className={styles.section}>
      <img src={clipboardImg} alt="Clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </section>
  );
}
