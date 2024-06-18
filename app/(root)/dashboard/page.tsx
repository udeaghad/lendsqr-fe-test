import styles from "../../variables.module.scss";

export default function Dashboard() {
  return (
    <main>
      <div>
        <div className={styles.title}>
          Welcome
        </div>{" "}
          <p className={styles.name}>Welcome Avenir</p>
      </div>
    </main>
  );
}
