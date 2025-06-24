import { createContext, useState } from "react";

export const ActionContext = createContext();

export const ActionProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);

  const nextCard = () => {
    setIndex(Math.floor(Math.random() * 10));
    setReveal(false);
  };

  const toggleCard = () => {
    setReveal(!reveal);
    console.log(reveal);
  };

  return (
    <ActionContext.Provider value={{index, nextCard, toggleCard}}>
        {children}
    </ActionContext.Provider>
  );
};
