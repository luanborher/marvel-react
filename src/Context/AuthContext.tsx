import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props: any) => {
  const user = {
    name: "Luan",
  };

  return <AuthProvider value={{ user }}>{props.children}</AuthProvider>;
};
