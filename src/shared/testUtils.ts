import { ApolloClient, InMemoryCache } from "apollo-boost";
import { LocalResolvers } from "@graphql/resolvers";
import { ApolloLink } from 'apollo-link';


export function createMockedApolloClient(link: ApolloLink, initialCacheData: any = null) {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: link,
        resolvers: LocalResolvers
    })
    if (!initialCacheData) return client;
    client.writeData({
        data: initialCacheData
    })
    return client;
}

