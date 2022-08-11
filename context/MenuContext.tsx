import { useState, createContext } from 'react';

interface MenuContext {
  menu: boolean;
  handlerMenu: () => void;
}

const Context = createContext({} as MenuContext);

interface Props {
  children: React.ReactNode;
}

// Método del contexto:
export const HandlerMenuContext = ({ children }: Props) => {
  const [menu, setMenu] = useState(false);

  const handlerMenu = () => {
    setMenu(!menu);
  };

  return <Context.Provider value={{ menu, handlerMenu }}>{children}</Context.Provider>;
};

export default Context;
