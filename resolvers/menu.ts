import { menu } from "../db.ts";

interface variables {
    restaurantID: string
}

export const getMenu = (_: any, {restaurantID}: variables) => {
    return menu(restaurantID);
}
