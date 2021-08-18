import type { NextPage, GetServerSideProps, GetStaticPaths } from "next";

import { getComicId } from "services/apis/marvel";

import ComicScreen from "screens/Comic";

import { IComicPage } from "screens/Comic/Comic";

const Comic: NextPage<IComicPage> = ({ comic }) => {
  return <ComicScreen comic={comic} />;
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  try {
    const comic = await getComicId(params?.id as string);

    if (!comic?.length) {
      throw new Error("Characters not found!");
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
