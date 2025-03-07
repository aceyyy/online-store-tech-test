"use client";

import { createContext, useContext, useState } from "react";
import { InitialCart } from "@/lib/mock.response";

const AppContext = createContext<any>(undefined);

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState(InitialCart);

  return (
    <AppContext.Provider value={{
      cart,
      setCart,
    }}>
      {children}
    </AppContext.Provider>
  )
};

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within a StoreProvider");
  return context;
};