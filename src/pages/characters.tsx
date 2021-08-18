import type { NextPage, GetServerSideProps } from "next";

import { getCharacters } from "services/apis/marvel";

import CharactersScreen, {
  ICharactersPage,
} from "screens/Characters/Characters";

const Characters: NextPage<ICharactersPage> = ({ characters }) => {
  return <CharactersScreen characters={characters} />;
};

export const getStaticProps: GetServerSideProps = async () => {
  try {
    const characters = await getCharacters();

    if (!characters) {
      throw new Error("Characters not found!");
    }

    return {
      props: {
        characters,
      },
    };
  } catch (e) {
    return {
      props: {
        characters: [],
      },
    };
  }
};

export default Characters;
