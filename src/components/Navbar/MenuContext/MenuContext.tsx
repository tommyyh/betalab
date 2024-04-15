'use client';

import React, { createContext, useState, useMemo } from 'react';

const MenuContext = createContext(null);

export function MenuProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const value = useMemo(() => ({ isOpen, toggleMenu }), [isOpen]);

  return (
    <MenuContext.Provider value={value as any}>{children}</MenuContext.Provider>
  );
}

export { MenuContext };
