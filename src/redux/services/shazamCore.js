import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreAPI = createApi({
  reducerPath: "shazamCoreAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "3f87f317dbmsh0a43adb43efb249p1af4c7jsn8f022f905139"
      );
      return headers;
    },
  }),
  endpoints: (build) => ({
    getTopCharts: build.query({
      query: () => "/charts/world",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreAPI;
