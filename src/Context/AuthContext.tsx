import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props: any) => {
  type User = {
    user: string;
    password: string;
  };

  return <AuthProvider value={{}}>{props.children}</AuthProvider>;
};
