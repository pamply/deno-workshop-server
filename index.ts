import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { applyGraphQL } from "https://deno.land/x/oak_graphql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
const env = config();

import { getMenu } from './resolvers/menu.ts';
import { getLocations } from './resolvers/locations.ts';
import { typeDefs } from "./schema.ts";
import { getUsers } from "./resolvers/users.ts";
import { getRestaurants } from "./resolvers/restaurants.ts";
import { getCurrentOrder } from "./resolvers/order.ts";

const app = new Application();

const resolvers = {
  Query: {
    users: getUsers,
    locations: getLocations,
    restaurants: getRestaurants,
    menu: getMenu,
    currentOrder: getCurrentOrder,
  },
};

app.use(async (ctx, next) => {
  ctx.response.headers.set('Access-Control-Allow-Headers', 'content-type')
  ctx.response.headers.set('Access-Control-Allow-Origin', '*');
  await next();
});

const GraphQLService = await applyGraphQL({ resolvers, typeDefs, Router });
app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

const DEFAULT_PORT = 9000;
const port = Number(env.PORT) || DEFAULT_PORT;

console.log(`Server start at http://0.0.0.0:${port}`);

await app.listen({ port });
