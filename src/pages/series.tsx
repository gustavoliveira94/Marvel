import type { NextPage, GetServerSideProps } from 'next';

import { getSeries } from 'services/apis/marvel';

import SeriesScreen from 'screens/Series';

import { ISeriesPage } from 'screens/Series/Series';

const Series: NextPage<ISeriesPage> = ({ series }) => {
  return <SeriesScreen series={series} />;
};

export const getStaticProps: GetServerSideProps = async () => {
  try {
    const series = await getSeries();

    if (!series?.length) {
      throw new Error('Series not found!');
    }

    return {
      props: {
        series,
      },
    };
  } catch (e) {
    return {
      props: {
        series: [],
      },
    };
  }
};

export default Series;
