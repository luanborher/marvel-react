/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from 'react';

import { DataLogin } from '../Pages/Login';
import FilmsList from '../Container/FilmsList.json';

export interface ResponseFilmsMarvel {
  id: number;
  title: string;
  text: string;
  image: string;
  galery: string[];
  link: string;
  category: string;
  fase: number;
  note: number[];
}

interface IUserProvider {
  user: DataLogin;
  films: ResponseFilmsMarvel[];

  setUser: React.Dispatch<React.SetStateAction<DataLogin>>;
  setFilms: React.Dispatch<React.SetStateAction<ResponseFilmsMarvel[]>>;
}

const AuthContext = createContext({} as IUserProvider);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<DataLogin>({} as DataLogin);
  const [films, setFilms] = useState<ResponseFilmsMarvel[]>(FilmsList);

  useEffect(() => {
    const dataUser = localStorage.getItem('@Marvel: user');

    if (dataUser) {
      setUser(JSON.parse(dataUser));
    }

    setFilms(FilmsList);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, films, setFilms }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
