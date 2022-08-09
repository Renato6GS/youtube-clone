import styles from './styles.module.css';
import HeaderLeft from './HeaderLeft/index';
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderLeft />

      <HeaderCenter />

      <HeaderRight />
    </header>
  );
}
