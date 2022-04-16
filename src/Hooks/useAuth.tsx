/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from 'react';

import { DataLogin } from '../Pages/Login';
import FilmsMarvel from '../Container/filmsMarvel.json';
import PersonaMarvel from '../Container/personagens.json';
import FilmsDC from '../Container/filmsDC.json';

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

export interface ResponseFilmsDC {
  id: number;
  title: string;
  text: string;
  image: string;
  galery: string[];
  note: number[];
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
  filmsDC: ResponseFilmsDC[];

  setUser: React.Dispatch<React.SetStateAction<DataLogin>>;
  setFilms: React.Dispatch<React.SetStateAction<ResponseFilmsMarvel[]>>;
  setPersona: React.Dispatch<React.SetStateAction<ResponsePersonaMarvel[]>>;
  setFilmsDC: React.Dispatch<React.SetStateAction<ResponseFilmsDC[]>>;
}

const AuthContext = createContext({} as IUserProvider);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<DataLogin>({} as DataLogin);
  const [films, setFilms] = useState<ResponseFilmsMarvel[]>(FilmsMarvel);
  const [persona, setPersona] =
    useState<ResponsePersonaMarvel[]>(PersonaMarvel);
  const [filmsDC, setFilmsDC] = useState<ResponseFilmsDC[]>(FilmsDC);

  useEffect(() => {
    const dataUser = localStorage.getItem('@Marvel: user');

    if (dataUser) {
      setUser(JSON.parse(dataUser));
    }

    setFilms(FilmsMarvel);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        films,
        setFilms,
        persona,
        setPersona,
        filmsDC,
        setFilmsDC,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
