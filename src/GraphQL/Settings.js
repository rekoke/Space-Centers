import {onError} from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import { 
    ApolloClient,
    InMemoryCache,
    HttpLink, 
    from
  } from "@apollo/client";

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if(graphqlErrors){
      graphqlErrors.forEach(({message, location, path}) => {
        alert(`Graphql error ${message}`);
      })
    }
  });
  
  const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:3000/graphql" }),
  ]);
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: "Bearer API_KEY",
      }
    }
  });
  
  export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link)
  });
  