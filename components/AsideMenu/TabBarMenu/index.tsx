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

export default function TabBarMenu() {
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

      {/* EXTENDED MENU: */}
      {menu && (
        <>
          <span className={styles.separator}></span>

          {/* Log in */}
          <section className={styles.logInContainer}>
            <p className={styles.logInDescription}>
              Accede para dar &quot;Me gusta&quot; a los videos, realizar comentarios y suscribirte.
            </p>
            <LogIn />
          </section>
          <span className={styles.separator}></span>

          {/* Explorar */}
          <section className={styles.exploreContainer}>
            <p className={styles.explorerTitle}>EXPLORAR</p>
            <ul className={styles.ul}>
              <MenuItem url={'/music'}>
                <img className={styles.exploreImage} src='/images/music.jpg' alt='' />
                <p className={styles.exploreLabel}>Música</p>
              </MenuItem>

              <MenuItem url={'/sports'}>
                <img className={styles.exploreImage} src='/images/trophy.jpg' alt='' />
                <p className={styles.exploreLabel}>Deportes</p>
              </MenuItem>

              <MenuItem url={'/videogames'}>
                <img className={styles.exploreImage} src='/images/mando.jpg' alt='' />
                <p className={styles.exploreLabel}>Videojuegos</p>
              </MenuItem>

              <MenuItem url={'/learning'}>
                <img className={styles.exploreImage} src='/images/light.jpg' alt='' />
                <p className={styles.exploreLabel}>Aprendizaje</p>
              </MenuItem>

              <MenuItem url={'/vr'}>
                <img className={styles.exploreImage} src='/images/VR.jpg' alt='' />
                <p className={styles.exploreLabel}>Video parorámico en 360°</p>
              </MenuItem>
            </ul>
          </section>
        </>
      )}
    </ul>
  );
}
