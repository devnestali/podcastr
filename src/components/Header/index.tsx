import styles from './styles.module.scss'

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <span>Ter, 18 Junho</span>
    </header>
  );
}