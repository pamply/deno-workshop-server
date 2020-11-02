interface User {
  name: string;
  email: string;
  password: string;
}
export const users: User[] = [
  {
    name: "mpamplona",
    email: "manuel.pamplona.rosado@gmail.com",
    password: "test456",
  },
  {
    name: "mpamplona2",
    email: "mapr_14@hotmail.com",
    password: "test456",
  },
  {
    name: "mpamplona3",
    email: "test@hotmail.com",
    password: "test456",
  },
];

// interface Country {
//    name: CountryName,
//    cities: string[],
// }
// interface Location {
//   country: Country;
// }

// enum CountryName {
//   MEXICO = 'MEXICO',
//   USA = 'USA',
// }

// export const locations: Location[] = [
//   {
//     country: {
//       name: CountryName.MEXICO,
//       cities: [
//         'Merida',
//         'Guadalajara',
//         'Monterrey',
//         'CDMX'
//       ]
//     }
//   }
// ]

export const locations = [
  'd 1',
  'd 2',
  'd 3',
  'd 4',
  'd 5',
  'd 6',
  'd 7',
  'd 8',
  'd 9',
  'd 10',
  'du 1',
  'du 2',
  'du 3',
  'du 4',
  'du 5',
  'du 6',
  'du 7',
  'du 8',
  'du 9',
  'du 10',
  'dum 1',
  'dum 2',
  'dum 3',
  'dum 4',
  'dum 5',
  'dum 6',
  'dum 7',
  'dum 8',
  'dum 9',
  'dum 10',
  'dumm 1',
  'dumm 2',
  'dumm 3',
  'dumm 4',
  'dumm 5',
  'dumm 6',
  'dumm 7',
  'dumm 8',
  'dumm 9',
  'dumm 10',
  'dummy 1',
  'dummy 2',
  'dummy 3',
  'dummy 4',
  'dummy 5',
  'dummy 6',
  'dummy 7',
  'dummy 8',
  'dummy 9',
  'dummy 10',
];

enum Category {
  SEAFOOD = 'Seafood',
  CHINESE = 'Chinese',
  JAPANESE = 'Japanese',
  MEXICAN = 'Mexican',
  ITALIAN = 'Italian'
}

interface Restaurant {
  id: string;
  name: string;
  description: string;
  imageURL: string;
  categories: Category[];

}

const TacoBuenoRestaurant = {
  id: 'taco-bueno',
  name: 'Tacho bueno',
  description: 'Best tacos ever',
  imageURL: 'https://www.pngkit.com/png/detail/289-2894670_tacos-mexicanos-imagenes-de-tacos-png.png',
  categories: [
    Category.MEXICAN
  ],
}

const TacoLocoRestaurant = {
  id: 'taco-loco',
  name: 'Tacho loco',
  description: 'Best tacos ever',
  imageURL: 'https://assets.stickpng.com/images/58727fe0f3a71010b5e8ef0d.png',
  categories: [
    Category.MEXICAN
  ],
}

const MySushiRestaurant = {
  id: 'my-sushi',
  name: 'My sushi',
  description: 'Best sushi ever',
  imageURL: 'https://static.wixstatic.com/media/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png/v1/fill/w_720,h_716,fp_0.50_0.50,lg_1,q_95/2cd43b_e5828aa119524592ab00126dfa48a944~mv2.png',
  categories: [
    Category.JAPANESE
  ],
};

const HappyFishRestaurant = {
  id: 'happy-fish',
  name: 'Happy fish',
  description: 'Happiest fish ever',
  imageURL: 'https://cocinapacifico.weebly.com/uploads/3/8/1/8/38180499/1549653_orig.jpg',
  categories: [
    Category.SEAFOOD
  ],
}

const HappyItalianRestaurant = {
  id: 'happy-pizza',
  name: 'Happy pizza',
  description: 'Happiest pizza ever',
  imageURL: 'https://www.pngfind.com/pngs/m/80-800270_pizza-png-high-quality-image-png-de-pizza.png',
  categories: [
    Category.ITALIAN
  ],
}

const HappyPastaRestaurant = {
  id: 'happy-pasta',
  name: 'Happy pasta',
  description: 'Happiest pasta ever',
  imageURL: 'https://pngimg.com/uploads/pasta/pasta_PNG58.png',
  categories: [
    Category.ITALIAN
  ],
}

const HappyQuesadillasRestaurant = {
  id: 'happy-quesadillas',
  name: 'Happy quesadilla',
  description: 'Happiest quesadilla ever',
  imageURL: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/5/1/WU0404H_chicken-quesadillas-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1488566353090.jpeg',
  categories: [
    Category.MEXICAN
  ],
}

export const restaurants: Restaurant[] = [
  MySushiRestaurant,
  TacoLocoRestaurant,
  TacoBuenoRestaurant,
  HappyFishRestaurant,
  HappyItalianRestaurant,
  HappyPastaRestaurant,
  HappyQuesadillasRestaurant
];

const menus: Menu[] = [{
  restaurantID: MySushiRestaurant.id,
  products: [
    {
      name: 'Taco de Labio',
  description: 'Taco de labio con tortilla a elección, salsa roja, martajada, verde sin picante y mexicana con guacamole, frijoles y cebollas guisadas.',
  price: 26,
  imageURL: 'https://images.rappi.com.mx/products/978532747-1598533763088.png?d=128x90&e=webp'
    }
  ]
}]

interface Product {
  name: string
  description: string
  price: number
  imageURL: string
}

interface Menu {
  restaurantID: string
  products: [Product]
}

export const menu = (restaurantId: string) => {
  return menus.find((menu) => menu.restaurantID === restaurantId);
}

interface SelectedProduct {
  product: Product
  quantity: number
}

interface Order {
  selectedProducts: [SelectedProduct]
}
