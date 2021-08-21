import type { NextPage, GetServerSideProps, GetStaticPaths } from 'next';

import { getCharacterId, getCharacters } from 'services/apis/marvel';

import CharacterScreen from 'screens/Character';

import { ICharacterPage } from 'screens/Character/Character';

const Character: NextPage<ICharacterPage> = ({ character }) => {
  return <CharacterScreen character={character} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const characters = await getCharacters();

    if (!characters?.length) {
      throw new Error('Characters not found!');
    }

    const paths = characters.map(({ id }) => ({
      params: { id: String(id) },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (e) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  try {
    const character = await getCharacterId(params?.id as string);

    if (!character?.length) {
      throw new Error('Character not found!');
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
