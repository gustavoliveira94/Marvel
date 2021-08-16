/* eslint-disable no-console */
import { useEffect } from "react";
import type { NextPage } from "next";

import { getCharacters } from "services/apis/marvel";

import HomeScreen from "screens/Home/Home";

const Home: NextPage = () => {
  const charactes = async () => {
    try {
      const data = await getCharacters();

      return data;
    } catch (e) {
      return console.error(e);
    }
  };

  useEffect(() => {
    charactes();
  }, []);

  return <HomeScreen />;
};

export default Home;
