interface Menu {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}


const menu: Menu[] = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "https://static01.nyt.com/images/2016/06/15/dining/15PANCAKEGUIDE3-WEB/15PANCAKEGUIDE3-WEB-articleLarge.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    title: "Eggs Benedict",
    category: "Breakfast",
    price: 12.99,
    img: "https://www.simplyrecipes.com/thmb/XSpHSUt6_YkCXJ-1ZRp5HfbZoWw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__04__eggs-benedict-horiz-a-1600-6f8850c8046b412b940fb1d657a5ba9a.jpg",
    desc: `Organic eggs, toasted English muffin, Canadian bacon, and hollandaise sauce.`,
  },
  {
    id: 3,
    title: "Avocado Toast",
    category: "Breakfast",
    price: 9.99,
    img: "https://cdn.shopify.com/s/files/1/2265/1105/articles/Spicy_Avocado_Toast.png?crop=center&format=pjpg&height=1000&v=1669999369&width=1500",
    desc: `Sourdough bread topped with smashed avocado, cherry tomatoes, and feta cheese.`,
  },
  {
    id: 4,
    title: "Chicken Caesar Salad",
    category: "Lunch",
    price: 13.99,
    img: "https://www.spendwithpennies.com/wp-content/uploads/2021/04/FT-Chicken-Caesar-Salad-SpendWithPennies-4.jpg",
    desc: `Grilled chicken breast, romaine lettuce, croutons, and Caesar dressing.`,
  },
  {
    id: 5,
    title: "Margherita Pizza",
    category: "Lunch",
    price: 16.99,
    img: "https://img.taste.com.au/DhThzPm9/taste/2016/11/eat-pray-love-39581-3.jpeg",
    desc: `Classic pizza with fresh mozzarella, tomatoes, basil, and olive oil.`,
  },
  {
    id: 6,
    title: "Beef Burger",
    category: "Lunch",
    price: 14.99,
    img: "https://images.immediate.co.uk/production/volatile/sites/2/2015/04/2015-02-24-olive-test-d5b505c.jpg?quality=90&crop=7px,1865px,3278px,1410px&resize=556,505",
    desc: `Grilled beef patty with lettuce, tomato, onion, and a side of fries.`,
  },
  // {
  //   id: 7,
  //   title: "Spaghetti Carbonara",
  //   category: "Dinner",
  //   price: 18.99,
  //   img: "ihttps://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
  //   desc: `Spaghetti pasta with creamy egg and bacon sauce.`,
  // },
  {
    id: 8,
    title: "Grilled Salmon",
    category: "Dinner",
    price: 21.99,
    img: "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
    desc: `Fresh grilled salmon served with roasted vegetables and lemon butter sauce.`,
  },
  {
    id: 9,
    title: "Mushroom Risotto",
    category: "Dinner",
    price: 17.99,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto.jpg",
    desc: `Creamy risotto with assorted mushrooms and parmesan cheese.`,
  },
  {
    id: 10,
    title: "Cheesecake",
    category: "Dessert",
    price: 9.99,
    img: "https://www.glorioustreats.com/wp-content/uploads/2017/05/cheesecake-recipe-square-500x375.jpeg",
    desc: `Classic New York-style cheesecake with a graham cracker crust.`,
  },
];

export default menu