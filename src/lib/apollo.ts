import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clfre410g0ygi01uehkc3e3ws/master',
  cache: new InMemoryCache()
})