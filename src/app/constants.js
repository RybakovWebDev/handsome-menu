import Image from "next/image";

import { Instagram, PhoneCall } from "react-feather";
import Telegram from "../../public/images/telegram-logo-thin.svg";

export const MENULINKS = [
  {
    title: "Food",
    slug: "food",
    color: "hsl(36, 47%, 88%)",
  },
  {
    title: "Coffee",
    slug: "coffee",
    color: "hsl(0, 0%, 0%)",
  },
  {
    title: "Tea & Soft drinks",
    slug: "teaSoft",
    color: "hsl(0, 0%, 0%)",
  },
  {
    title: "Cocktails",
    slug: "cocktails",
    color: "hsl(0, 0%, 0%)",
  },
  {
    title: "Spirits",
    slug: "spirits",
    color: "hsl(0, 0%, 0%)",
  },
  {
    title: "Wine & Beer",
    slug: "wineBeer",
    color: "hsl(0, 0%, 0%)",
  },
];

export const MENU = [
  {
    title: "FOOD",
    slug: "food",
    types: ["MAIN", "PANCAKES", "SOUP", "*DAILY SPECIAL"],
    content: [
      {
        type: "MAIN",
        category: "SANDWICHES",
        positions: [
          {
            name: "BLT",
            subtitle: "*add cheese / halapeno / confi / mushrooms - 2 lari each",
            price: "17",
          },
          {
            name: "Salmon and cheese",
            price: "22",
          },
        ],
      },
      {
        type: "MAIN",
        category: "SANDBURGERS",
        positions: [
          {
            name: "Onion confit and bacon",
            price: "22",
          },
          {
            name: "Mushrooms stew",
            price: "22",
          },
        ],
      },
      {
        type: "PANCAKES",
        category: "CHEDDAR PANCAKES",
        positions: [
          {
            name: "Salmon and creamcheese",
            price: "18",
          },
          {
            name: "Mushrooms stew and honey",
            subtitle: "*add bacon - 3 lari",
            price: "14",
          },
        ],
      },
      {
        type: "PANCAKES",
        category: "SWEET PANCAKES",
        positions: [
          {
            name: "Nutella and banana",
            price: "14",
          },
          {
            name: "Pear and salted caramel",
            price: "13",
          },
        ],
      },
      {
        type: "SOUP",
        positions: [
          {
            name: "Cheese and potato",
            price: "10",
          },
          {
            name: "Mushroom",
            price: "10",
          },
        ],
      },
      {
        type: "*DAILY SPECIAL",
        positions: [
          {
            name: "Ask the bartender!",
            price: null,
          },
        ],
      },
    ],
  },
  {
    title: "COFFEE",
    slug: "coffee",
    content: [
      {
        category: "COFFEE",
        positions: [
          {
            name: "Espresso",
            price: "5",
          },
          {
            name: "Americano",
            price: "7",
          },
          {
            name: "Butch brew",
            price: "7",
          },
          {
            name: "Coffee with milk",
            subtitle: "(cappuccino, latte, etc.)",
            price: "10",
          },
          {
            name: "Tonic",
            price: "11",
          },
          {
            name: "Lime tonic",
            price: "14",
          },
          {
            name: "Bumble",
            price: "12",
          },
          {
            name: "Alternative milk",
            subtitle: "(banana milk, soy milk, oat milk, vanilla milk)",
            price: "+2",
          },
        ],
      },
    ],
  },
  {
    title: "COCKTAILS",
    slug: "cocktails",
    content: [
      {
        category: "COCKTAILS",
        positions: [
          {
            name: "Negroni",
            price: "25",
          },
          {
            name: "Boulevardier",
            price: "25",
          },
          {
            name: "Gimlet",
            price: "23",
          },
          {
            name: "Flowered Gimlet",
            price: "25",
          },
          {
            name: "Rubylonesca",
            price: "23",
          },
          {
            name: "Cream Pie",
            price: "23",
          },
          {
            name: "Jäg Young",
            price: "23",
          },
          {
            name: "Bloody Mary",
            price: "23",
          },
          {
            name: "Red Snapper",
            price: "25",
          },
          {
            name: "Bloody Maria",
            price: "25",
          },
        ],
      },
    ],
  },
  {
    title: "SPIRITS",
    slug: "spirits",
    content: [
      {
        category: "SPIRITS",
        positions: [
          {
            name: "Vodka Absolut",
            price: "8",
          },
          {
            name: "Gin Jako",
            price: "8",
          },
          {
            name: "Gin Bombey",
            price: "14",
          },
          {
            name: "Tequila Olmeca",
            price: "14",
          },
          {
            name: "Whiskey Jameson",
            price: "12",
          },
          {
            name: "Jägermester",
            price: "12",
          },
          {
            name: "Cherry liqueur",
            price: "10",
          },
          {
            name: "Becherovka",
            price: "8",
          },
          {
            name: "Vermouth",
            price: "10",
          },
          {
            name: "Gin + tonic",
            price: "18",
          },
          {
            name: "Whiskey + cola",
            price: "18",
          },
        ],
      },
    ],
  },
  {
    title: "TEA & SOFT DRINKS",
    slug: "teaSoft",
    content: [
      {
        category: "TEA",
        positions: [
          {
            name: "Black tea/Green tea (cup)",
            price: "5",
          },
          {
            name: "Black tea/Green tea (pot)",
            price: "10",
          },
        ],
      },
      {
        category: "SOFT DRINKS",
        positions: [
          {
            name: "Coca-Cola",
            price: "4",
          },
          {
            name: "Kombucha",
            price: "10",
          },
        ],
      },
    ],
  },
  {
    title: "WINE & BEER",
    slug: "wineBeer",
    content: [
      {
        category: "WINE",
        positions: [
          {
            name: "Red dry wine",
            price: "10",
          },
          {
            name: "Rkatseteli",
            price: "15",
          },
        ],
      },
      {
        category: "BEER",
        positions: [
          {
            name: "We have imported bottled craft beer, ask the bartender what's available!",
            price: "",
          },
        ],
        fullWidth: true,
      },
    ],
  },
];

export const CONTACTS = [
  {
    title: "Telegram",
    link: "https://t.me/Sky_mother",
    icon: <Image src={Telegram} alt='Telegram icon' height={30} width={30} />,
    description: "Contact us on Telegram",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/handsome.tbilisi?igsh=cXprOXA1ODd3NHhn",
    icon: <Instagram size={30} strokeWidth={1} />,
    description: "Follow us on Instagram",
  },
  {
    title: "Phone",
    link: "tel:+995599138719",
    icon: <PhoneCall size={30} strokeWidth={1} />,
    description: "Contact us by phone",
  },
];

export const ADDRESS = { street: "Tbilisi, Merab Kostava 35", lat: 41.70755988357727, lng: 44.787542958606494 };

export const smoothSpring = {
  type: "spring",
  damping: 60,
  stiffness: 500,
};

export const initialVerticalOffset = {
  y: 20,
  opacity: 0,
};

export const finalVerticalOffset = {
  y: 0,
  opacity: 1,
};
