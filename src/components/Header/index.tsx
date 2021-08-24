import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Mama Gula" />
      <h2>Mama Gula</h2>

      <p>O melhor da culinária </p>

      <span>{currentDate}</span>
    </header>
  );
}