import AsideMenu from 'components/AsideMenu';
import Header from 'components/Header';
import { HandlerMenuContext } from 'context/MenuContext';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HandlerMenuContext>
      <Header />
      {children}
      <AsideMenu />
    </HandlerMenuContext>
  );
}
