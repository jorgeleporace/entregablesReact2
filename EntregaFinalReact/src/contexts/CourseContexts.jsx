import { createContext, useState } from "react";

export const CourseContext = createContext(null);

export const CourseProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CourseContext.Provider value={[cart, setCart]}>
      {children}
    </CourseContext.Provider>
  );
};
export default CourseContext;