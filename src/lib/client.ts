import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "https://graphql.anilist.co",
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
};

//not recommended as it always returns a new client if running 
//on the server(window is undefined) 