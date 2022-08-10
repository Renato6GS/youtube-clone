import { useContext } from 'react';
import Context from 'context/MenuContext';
import Link from 'next/link';

import styles from './styles.module.css';

interface MenuItemProps {
  url: string;
  children: React.ReactNode;
  isActiveButton?: boolean;
}

export default function MenuItem({ url, children, isActiveButton = false }: MenuItemProps) {
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
