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

          {/* Explorar */}
          <span className={styles.separator}></span>
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

          {/* Explorar canales */}
          <span className={styles.separator}></span>
          <section>
            <ul className={styles.ul}>
              <MenuItem url={'/more-youtube'}>
                <img className={styles.circlePlus} src='/icons/circle-plus.svg' alt='' />
                <p className={styles.exploreLabel}>Explorar canales</p>
              </MenuItem>
            </ul>
          </section>

          {/* Más de youtube */}
          <span className={styles.separator}></span>
          <section className={styles.moreYoutubeContainer}>
            <p className={styles.explorerTitle}>MÁS DE YOUTUBE</p>
            <ul className={styles.ul}>
              <MenuItem url={'/premium'}>
                <img className={styles.moreYoutubeImage} src='/images/youtube-logo.png' alt='' />
                <p className={styles.exploreLabel}>YouTube Premium</p>
              </MenuItem>

              <MenuItem url={'/youtube-music'}>
                <img className={styles.moreYoutubeImage} src='/images/youtube-music.png' alt='' />
                <p className={styles.exploreLabel}>YouTube Music</p>
              </MenuItem>

              <MenuItem url={'/youtube-kids'}>
                <img className={styles.moreYoutubeImage} src='/images/youtube-kids.png' alt='' />
                <p className={styles.exploreLabel}>YouTube Kids</p>
              </MenuItem>

              <MenuItem url={'/youtube-tv'}>
                <img className={styles.moreYoutubeImage} src='/images/youtube-tv.png' alt='' />
                <p className={styles.exploreLabel}>YouTube TV</p>
              </MenuItem>
            </ul>
          </section>

          {/* Configuraciones */}
          <span className={styles.separator}></span>
          <section className={styles.exploreContainer}>
            <ul className={styles.ul}>
              <MenuItem url={'/music'}>
                <img className={styles.configImage} src='/icons/settings.svg' alt='' />
                <p className={styles.exploreLabel}>Configuración</p>
              </MenuItem>

              <MenuItem url={'/sports'}>
                <img className={styles.configImage} src='/icons/flag-regular.svg' alt='' />
                <p className={styles.exploreLabel}>Deportes</p>
              </MenuItem>

              <MenuItem url={'/videogames'}>
                <img className={styles.configImage} src='/icons/help.svg' alt='' />
                <p className={styles.exploreLabel}>Videojuegos</p>
              </MenuItem>

              <MenuItem url={'/learning'}>
                <img className={styles.configImage} src='/icons/comments.svg' alt='' />
                <p className={styles.exploreLabel}>Aprendizaje</p>
              </MenuItem>
            </ul>
          </section>

          {/* Footer info */}
          <span className={styles.separator}></span>
          <footer className={styles.footerInfoContainer}>
            <div className={styles.footerLinksContainer}>
              <a className={styles.footerAnchor} href='#acerca-de'>
                Acerca de
              </a>
              <a className={styles.footerAnchor} href='#prensa'>
                Prensa
              </a>
              <a className={styles.footerAnchor} href='#derechos'>
                Derechos de autor
              </a>
              <a className={styles.footerAnchor} href='#comunicacion'>
                Comunicarte con nosotros
              </a>
              <a className={styles.footerAnchor} href='#creadores'>
                Creadores
              </a>
              <a className={styles.footerAnchor} href='#anunciar'>
                Anunciar
              </a>
              <a className={styles.footerAnchor} href='#develop'>
                Desarrolladores
              </a>
            </div>
            <div className={styles.footerLinksContainer}>
              <a className={styles.footerAnchor} href='#condiciones'>
                Condiciones
              </a>
              <a className={styles.footerAnchor} href='#Privacidad'>
                Privacidad
              </a>
              <a className={styles.footerAnchor} href='#politicas'>
                Políticas y seguridad
              </a>
              <a className={styles.footerAnchor} href='#howItWors'>
                Cómo funciona YouTube
              </a>
              <a className={styles.footerAnchor} href='#betatester'>
                Prueba funciones nuevas
              </a>
            </div>
            <div className={styles.footerLinksContainer}>
              <span className={styles.copyright}>© 2022 Google LLC</span>
            </div>
          </footer>
        </>
      )}
    </ul>
  );
}
