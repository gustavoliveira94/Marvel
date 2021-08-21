import axios, { AxiosRequestConfig } from "axios";

export const request = (config: AxiosRequestConfig) =>
    axios.create({
        ...config,
    });
