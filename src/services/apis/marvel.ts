/* eslint-disable no-console */
import { request } from "services/request";

const timestamp = process.env.NEXT_PUBLIC_TS_MARVEL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY_MARVEL;
const hash = process.env.NEXT_PUBLIC_HASH_MARVEL;

const marvelApi = request({
  baseURL: process.env.NEXT_PUBLIC_API_URL_MARVEL,
  params: {
    ts: timestamp,
    apikey: apiKey,
    hash,
  },
});

export interface ICharacters {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: {
      name: string;
      role: string;
    }[];
  };
  comics: {
    items: {
      name: string;
    }[];
  };
  stories: {
    items: {
      name: string;
    }[];
  };
}

const characters = {
  getCharacters: async () => {
    try {
      const {
        data: { data },
      } = await marvelApi.get("/v1/public/characters");

      return data?.results as ICharacters[];
    } catch (e) {
      return console.error(e);
    }
  },
  getCharacterId: async (id: string) => {
    try {
      const {
        data: { data },
      } = await marvelApi.get(`/v1/public/characters/${id}`);

      return data?.results as ICharacters[];
    } catch (e) {
      return console.error(e);
    }
  },
};

export const { getCharacterId, getCharacters } = characters;

export interface IComics {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: {
      name: string;
      role: string;
    }[];
  };
  characters: {
    items: {
      name: string;
    }[];
  };
  stories: {
    items: {
      name: string;
    }[];
  };
}

const comics = {
  getComics: async () => {
    try {
      const { data } = await marvelApi.get("/v1/public/comics");

      return data?.data?.results as IComics[];
    } catch (e) {
      return console.error(e);
    }
  },
  getComicId: async (id: string) => {
    try {
      const { data } = await marvelApi.get(`/v1/public/comics/${id}`);

      return data?.data?.results as IComics[];
    } catch (e) {
      return console.error(e);
    }
  },
};

export const { getComics, getComicId } = comics;

export interface ISeries {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: {
      name: string;
      role: string;
    }[];
  };
  characters: {
    items: {
      name: string;
    }[];
  };
  stories: {
    items: {
      name: string;
    }[];
  };
}

const series = {
  getSeries: async () => {
    try {
      const { data } = await marvelApi.get("/v1/public/series");

      return data?.data?.results as ISeries[];
    } catch (e) {
      return console.error(e);
    }
  },
  getSeriesId: async (id: string) => {
    try {
      const { data } = await marvelApi.get(`/v1/public/series/${id}`);

      return data?.data?.results as ISeries[];
    } catch (e) {
      return console.error(e);
    }
  },
};

export const { getSeries, getSeriesId } = series;
