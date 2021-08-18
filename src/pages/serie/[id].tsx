import type { NextPage, GetServerSideProps, GetStaticPaths } from "next";

import { getSeriesId } from "services/apis/marvel";

import SerieScreen from "screens/Serie";

import { ISeriePage } from "screens/Serie/Serie";

const Comic: NextPage<ISeriePage> = ({ serie }) => {
  return <SerieScreen serie={serie} />;
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  try {
    const serie = await getSeriesId(params?.id as string);

    if (!serie?.length) {
      throw new Error("Characters not found!");
    }

    return {
      props: {
        serie: serie?.[0],
      },
    };
  } catch (e) {
    return {
      props: {
        serie: [],
      },
    };
  }
};

export default Comic;
