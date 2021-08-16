/* eslint-disable no-console */
import { request } from "services/request";

const marvelApi = request({
  baseURL: process.env.API_URL_MARVEL,
  params: {
    apikey: process.env.API_KEY_MARVEL,
    hash: process.env.HASH_MARVEL,
  },
});

interface ICharacters {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: string[];
  thumbnail: string;
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
