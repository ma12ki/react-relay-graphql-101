import { HackerNews } from 'graphqlhub-schemas';
import { GraphQLSchema } from 'graphql';

let schema = new GraphQLSchema({
  query: HackerNews.QueryObjectType
});
