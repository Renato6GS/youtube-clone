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

interface MenuItemProps {
  url: string;
  children: React.ReactNode;
  isActiveButton?: boolean;
}

function MenuItem({ url, children, isActiveButton = false }: MenuItemProps) {
  const { menu } = useContext(Context);

  return (
    <li className={`${menu ? styles.menuItemActive : styles.menuItemInactive}`}>
      <Link href={url}>
        <a
          className={`${menu ? styles.menuItemLinkActive : styles.menuItemLinkInactive} ${
            isActiveButton ? (menu ? styles.buttonActive : styles.buttonInactive) : ''
          }`}>
          {children}
        </a>
      </Link>
    </li>
  );
}

function TabBarMenu() {
  const { menu } = useContext(Context);

  return (
    <ul className={`${styles.ul} ${menu && styles.showScrollUl}`}>
      <MenuItem url={'/'} isActiveButton={true}>
        <HomeIcon width={20} height={20} fill='#fff' /> <p className={`${menu || styles.labelInactive}`}>Principal</p>
      </MenuItem>
      <MenuItem url={'/explore'}>
        <Compass width={20} height={20} fill='#fff' /> <p className={`${menu || styles.labelInactive}`}>Explorar</p>
      </MenuItem>
      <MenuItem url={'/shorts'}>
        <Shorts width={20} height={20} fill='#fff' /> <p className={`${menu || styles.labelInactive}`}>Shorts</p>
      </MenuItem>
      <MenuItem url={'/subs'}>
        <Subs /> <p className={`${menu || styles.labelInactive}`}>Suscripciones</p>
      </MenuItem>
      {menu ? <span className={styles.separator}></span> : <></>}
      <MenuItem url={'/library'}>
        <Library /> <p className={`${menu || styles.labelInactive}`}>Biblioteca</p>
      </MenuItem>
      <MenuItem url={'/history'}>
        <Clock width={20} height={20} fill='#fff' /> <p className={`${menu || styles.labelInactive}`}>Historial</p>
      </MenuItem>
    </ul>
  );
}

export default function AsideMenu() {
  const { menu } = useContext(Context);

  return (
    <aside className={`${styles.asideMenu} ${menu ? styles.activeMenu : styles.inactiveMenu}`}>
      {menu ? <TabBarMenu /> : <TabBarMenu />}
    </aside>
  );
}
