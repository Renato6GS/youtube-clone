import LogIn from 'components/LogIn';

import styles from './styles.module.css';

export default function LogInSection() {
  return (
    <section className={styles.logInContainer}>
      <p className={styles.logInDescription}>
        Accede para dar &quot;Me gusta&quot; a los videos, realizar comentarios y suscribirte.
      </p>
      <LogIn />
    </section>
  );
}
