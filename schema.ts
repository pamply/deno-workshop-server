import { gql } from "https://deno.land/x/oak_graphql/mod.ts";
const decoder = new TextDecoder('utf-8');
const graphqlSchema = decoder.decode(Deno.readFileSync('schema.graphql'));
console.log('loading schema', graphqlSchema);
export const typeDefs = gql`
    ${graphqlSchema}
`;
