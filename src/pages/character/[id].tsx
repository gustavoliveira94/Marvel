import type { NextPage, GetServerSideProps, GetStaticPaths } from "next";

import { getCharacterId } from "services/apis/marvel";

import CharacterScreen from "screens/Character";

import { ICharacterPage } from "screens/Character/Character";

const Character: NextPage<ICharacterPage> = ({ character }) => {
  return <CharacterScreen character={character} />;
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  try {
    const character = await getCharacterId(params?.id as string);

    if (!character?.length) {
      throw new Error("Character not found!");
    }

    return {
      props: {
        character: character?.[0],
      },
    };
  } catch (e) {
    return {
      props: {
        character: [],
      },
    };
  }
};

export default Character;
