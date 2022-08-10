import styles from './styles.module.css';

export default function FooterSection() {
  return (
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
  );
}
