import type { NextPage, GetServerSideProps } from "next";

import { getComics } from "services/apis/marvel";

import Comicscreen, { IComicsPage } from "screens/Comics/Comics";

const Stories: NextPage<IComicsPage> = ({ comics }) => {
  return <Comicscreen comics={comics} />;
};

export const getStaticProps: GetServerSideProps = async () => {
  try {
    const comics = await getComics();

    if (!comics?.length) {
      throw new Error("Comics not found!");
    }

    return {
      props: {
        comics,
      },
    };
  } catch (e) {
    return {
      props: {
        comics: [],
      },
    };
  }
};

export default Stories;
