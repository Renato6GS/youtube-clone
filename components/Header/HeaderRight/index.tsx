import LogIn from 'components/LogIn';
import styles from './styles.module.css';

export default function HeaderRight() {
  return (
    <section className={styles.headerRight}>
      <button className={styles.btnDots}>
        <img className={styles.dotsVertical} src='icons/dots-vertical.svg' alt='' />
      </button>
      {/* <a className={styles.btnLogIn}>
        <img className={styles.userCircle} src='icons/user-circle.svg' alt='' /> ACCEDER
      </a> */}
      <LogIn />
    </section>
  );
}
