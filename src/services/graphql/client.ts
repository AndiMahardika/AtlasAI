import { ApolloClient, InMemoryCache } from "@apollo/client";

const BASE_URL_GRAPHQL = import.meta.env.VITE_URL_GRAPHQL

export const client = new ApolloClient({
  uri: BASE_URL_GRAPHQL,
  cache: new InMemoryCache(),
});