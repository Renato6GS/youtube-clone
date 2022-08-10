import { useContext } from 'react';
import Link from 'next/link';

import Context from '../../context/MenuContext';
import styles from './styles.module.css';

import HomeIcon from 'components/Icons/HomeIcon';
import Compass from 'components/Icons/Compass';
import Shorts from 'components/Icons/Shorts';
import Subs from 'components/Icons/Subs';
import Library from 'components/Icons/Library';
import Clock from 'components/Icons/Clock';

function MenuItem({
  url,
  children,
  isActiveButton = false,
}: {
  url: string;
  children: React.ReactNode;
  isActiveButton?: boolean;
}) {
  const { menu } = useContext(Context);

  return (
    <li className={`${menu ? styles.menuItemActive : styles.menuItem}`}>
      <Link href={url}>
        <a
          className={`${menu ? styles.menuItemLinkActive : styles.menuItemLink} ${
            isActiveButton ? (menu ? styles.buttonActive : styles.button) : ''
          }`}>
          {children}
        </a>
      </Link>
    </li>
  );
}

function TabBarMenu() {
  return (
    <ul className={styles.ul}>
      <MenuItem url={'/'} isActiveButton={true}>
        <HomeIcon width={20} height={20} fill='#fff' /> <p className={styles.label}>Principal</p>
      </MenuItem>
      <MenuItem url={'/explore'}>
        <Compass width={20} height={20} fill='#fff' /> <p className={styles.label}>Explorar</p>
      </MenuItem>
      <MenuItem url={'/shorts'}>
        <Shorts width={20} height={20} fill='#fff' /> <p className={styles.label}>Shorts</p>
      </MenuItem>
      <MenuItem url={'/subs'}>
        <Subs /> <p className={styles.label}>Suscripciones</p>
      </MenuItem>
      <MenuItem url={'/library'}>
        <Library /> <p className={styles.label}>Biblioteca</p>
      </MenuItem>
      <MenuItem url={'/history'}>
        <Clock width={20} height={20} fill='#fff' /> <p className={styles.label}>Historial</p>
      </MenuItem>
    </ul>
  );
}

export default function AsideMenu() {
  const { menu } = useContext(Context);

  return (
    <aside className={`${styles.asideMenu} ${menu ? styles.active : styles.inactive}`}>
      {menu ? (
        <ul className={styles.ulActive}>
          <MenuItem url={'/'} isActiveButton={true}>
            <HomeIcon width={20} height={20} fill='#fff' /> <p>Principal</p>
          </MenuItem>
          <MenuItem url={'/explore'}>
            <Compass width={20} height={20} fill='#fff' /> <p>Explorar</p>
          </MenuItem>
          <MenuItem url={'/shorts'}>
            <Shorts width={20} height={20} fill='#fff' /> <p>Shorts</p>
          </MenuItem>
          <MenuItem url={'/subs'}>
            <Subs /> <p>Suscripciones</p>
          </MenuItem>
          <MenuItem url={'/library'}>
            <Library /> <p>Biblioteca</p>
          </MenuItem>
          <MenuItem url={'/history'}>
            <Clock width={20} height={20} fill='#fff' /> <p>Historial</p>
          </MenuItem>
        </ul>
      ) : (
        <TabBarMenu />
      )}
    </aside>
  );
}
