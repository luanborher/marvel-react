import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props: any) => {
  const user = {
    name: "Luan",
    color: "Red",
  };

  return <AuthProvider value={{ user }}>{props.children}</AuthProvider>;
};
