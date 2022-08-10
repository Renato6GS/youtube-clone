import styles from './styles.module.css';

export default function LogIn() {
  return (
    <a className={styles.btnLogIn}>
      <img className={styles.userCircle} src='icons/user-circle.svg' alt='' /> ACCEDER
    </a>
  );
}
