import {locations} from '../db.ts';

interface variables {
    input: string,
    limit: number
}

export function getLocations(_: any, {input, limit = 5}: variables) {
    return locations.filter((loc) => loc.includes(input))
                    .map((loc) => ({name: loc}))
                    .slice(0, limit);
}