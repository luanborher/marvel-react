/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from 'react';

import { DataLogin } from '../Pages/Login';
import FilmsList from '../Container/FilmsList.json';
import PersonaList from '../Container/personagens.json';

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
  teory: string | null;
}

export interface ResponsePersonaMarvel {
  id: number;
  name: string;
  img: string;
  img2: string | null;
  faseOne: boolean;
  faseTwo: boolean;
  faseThree: boolean;
  faseFour: boolean;
  teory: string | null;
}

interface IUserProvider {
  user: DataLogin;
  films: ResponseFilmsMarvel[];
  persona: ResponsePersonaMarvel[];

  setUser: React.Dispatch<React.SetStateAction<DataLogin>>;
  setFilms: React.Dispatch<React.SetStateAction<ResponseFilmsMarvel[]>>;
  setPersona: React.Dispatch<React.SetStateAction<ResponsePersonaMarvel[]>>;
}

const AuthContext = createContext({} as IUserProvider);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<DataLogin>({} as DataLogin);
  const [films, setFilms] = useState<ResponseFilmsMarvel[]>(FilmsList);
  const [persona, setPersona] = useState<ResponsePersonaMarvel[]>(PersonaList);

  useEffect(() => {
    const dataUser = localStorage.getItem('@Marvel: user');

    if (dataUser) {
      setUser(JSON.parse(dataUser));
    }

    setFilms(FilmsList);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, films, setFilms, persona, setPersona }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
