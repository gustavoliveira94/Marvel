import type { NextPage, GetServerSideProps, GetStaticPaths } from 'next';

import { getSeriesId, getSeries } from 'services/apis/marvel';

import SerieScreen from 'screens/Serie';

import { ISeriePage } from 'screens/Serie/Serie';

const Comic: NextPage<ISeriePage> = ({ serie }) => {
  return <SerieScreen serie={serie} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const series = await getSeries();

    if (!series?.length) {
      throw new Error('Series not found!');
    }

    const paths = series.map(({ id }) => ({
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
    const serie = await getSeriesId(params?.id as string);

    if (!serie?.length) {
      throw new Error('Characters not found!');
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
