import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const MyProviderr = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);
  
  return (
    <MyContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProviderr;
