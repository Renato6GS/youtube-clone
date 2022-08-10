import { useContext } from 'react';
import Context from 'context/MenuContext';
import styles from './styles.module.css';

interface UlListMenuProps {
  children: React.ReactNode;
  showScroll?: boolean;
}

export default function UlListMenu({ children, showScroll = false }: UlListMenuProps) {
  const { menu } = useContext(Context);

  return <ul className={`${styles.ul} ${showScroll && menu && styles.showScrollUl}`}>{children}</ul>;
}
