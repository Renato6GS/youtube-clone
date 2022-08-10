import { useContext } from 'react';

import Context from '../../context/MenuContext';
import styles from './styles.module.css';
import TabBarMenu from './TabBarMenu';

export default function AsideMenu() {
  const { menu } = useContext(Context);

  return (
    <aside className={`${styles.asideMenu} ${menu ? styles.activeMenu : styles.inactiveMenu}`}>
      <TabBarMenu />
    </aside>
  );
}
