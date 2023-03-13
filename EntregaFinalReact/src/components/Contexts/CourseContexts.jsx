import { createContext, useState } from "react";

export const CourseContext = createContext(null);

export const CourseProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <Course.Provider value={[cart, setCart]}>
      {children}
    </Course.Provider>
  );
};