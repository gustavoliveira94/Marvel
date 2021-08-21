import type { NextPage, GetServerSideProps, GetStaticPaths } from 'next';

import { getComicId, getComics } from 'services/apis/marvel';

import ComicScreen from 'screens/Comic';

import { IComicPage } from 'screens/Comic/Comic';

const Comic: NextPage<IComicPage> = ({ comic }) => {
  return <ComicScreen comic={comic} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const comics = await getComics();

    if (!comics?.length) {
      throw new Error('Comics not found!');
    }

    const paths = comics.map(({ id }) => ({
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
    const comic = await getComicId(params?.id as string);

    if (!comic?.length) {
      throw new Error('Comic not found!');
    }

    return {
      props: {
        comic: comic?.[0],
      },
    };
  } catch (e) {
    return {
      props: {
        comic: [],
      },
    };
  }
};

export default Comic;
