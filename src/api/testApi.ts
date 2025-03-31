import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./baseUrl";
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const testApi = createApi({
  reducerPath: "test",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTodo: builder.query<ITodo, number>({
      query: (id) => `/todos/${id}`,
    }),
  }),
});
export const { useGetTodoQuery } = testApi;
