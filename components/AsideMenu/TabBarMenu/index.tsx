import { useContext } from 'react';
import MenuItem from '../MenuItem';

import HomeIcon from 'components/Icons/HomeIcon';
import Compass from 'components/Icons/Compass';
import Shorts from 'components/Icons/Shorts';
import Subs from 'components/Icons/Subs';
import Library from 'components/Icons/Library';
import Clock from 'components/Icons/Clock';

import styles from './styles.module.css';
import Context from 'context/MenuContext';
import LogIn from 'components/LogIn';
import ExtendedAsideMenu from '../ExtendedAsideMenu';
import UlListMenu from '../UlListMenu';

export default function TabBarMenu() {
  const { menu } = useContext(Context);

  return (
    <UlListMenu showScroll>
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

      {/* EXTENDED MENU: */}
      {menu && <ExtendedAsideMenu />}
    </UlListMenu>
  );
}
