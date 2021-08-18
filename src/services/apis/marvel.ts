/* eslint-disable no-console */
import { request } from "services/request";

const timestamp = "fsadsa";
const apiKey = process.env.NEXT_PUBLIC_API_KEY_MARVEL;
const hash = "4bb7d6a9f8edfa2c46f2dd30f79d7f9c";

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
  modified: Date;
  resourceURI: string;
  urls: string[];
  thumbnail: {
    path: string;
    extension: string;
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
  getCharacterId: async (id: number) => {
    try {
      const {
        data: { data },
      } = await marvelApi.get(`/v1/public/characters/${id}`);

      return data?.results as ICharacters;
    } catch (e) {
      return console.error(e);
    }
  },
};

export const { getCharacterId, getCharacters } = characters;

type IStories = ICharacters;

const stories = {
  getStories: async () => {
    try {
      const { data } = await marvelApi.get("/v1/public/stories");

      return data?.results as IStories[];
    } catch (e) {
      return console.error(e);
    }
  },
  getStoryId: async (id: number) => {
    try {
      const { data } = await marvelApi.get(`/v1/public/stories/${id}`);

      return data?.results as IStories;
    } catch (e) {
      return console.error(e);
    }
  },
};

export const { getStories, getStoryId } = stories;

interface ISeries extends ICharacters {
  startYear: number;
  endYear: number;
  rating: string;
}

const series = {
  getSeries: async () => {
    try {
      const { data } = await marvelApi.get("/v1/public/series");

      return data?.results as ISeries[];
    } catch (e) {
      return console.error(e);
    }
  },
  getSeriesId: async (id: number) => {
    try {
      const { data } = await marvelApi.get(`/v1/public/series/${id}`);

      return data?.results as ISeries;
    } catch (e) {
      return console.error(e);
    }
  },
};

export const { getSeries, getSeriesId } = series;
