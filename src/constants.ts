interface Position {
  name: string;
  price: string | null;
  subtitle?: string;
  options?: string[];
}

export interface Content {
  category: string;
  centeredHeading?: boolean;
  positions: Position[];
  fullWidth?: boolean;
}

export interface MenuItem {
  title: string;
  slug: string;
  content: Content[];
}

export interface Contact {
  title: string;
  link: string;
  iconProps: {
    src: string;
    alt: string;
  };
  description: string;
}

export interface Address {
  street: string;
  info: string;
  lat: number;
  lng: number;
}

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

export const MENU: MenuItem[] = [
  {
    title: "FOOD",
    slug: "food",
    content: [
      {
        category: "STARTERS",
        positions: [
          {
            name: "Cheese soup",
            price: "12",
          },
          {
            name: "Chicken soup",
            price: "12",
          },
          {
            name: "",
            price: "",
          },
          {
            name: "Falafel",
            price: "12",
          },
          {
            name: "Cole Slow",
            price: "5",
          },
          {
            name: "Country style potato",
            price: "10",
          },
        ],
      },

      {
        category: "MAIN",
        positions: [
          {
            name: "Mac & Cheese Bowl",
            price: "18",
          },
          {
            name: "Draniki (potato pancakes) with sour cream",
            price: "16",
          },
        ],
      },

      {
        category: "PANCAKES",
        positions: [
          {
            name: "Nutella and banana",
            price: "14",
          },
          {
            name: "Pear and salted caramel",
            price: "14",
          },
          {
            name: "Mushrooms stew and honey",
            subtitle: "*add bacon - 3 lari",
            price: "15",
          },
        ],
      },

      {
        category: "BURGERS",
        positions: [
          {
            name: "Cheeseburger",
            price: "20",
          },
          {
            name: "Confi Bacon",
            price: "22",
          },
          {
            name: "Hot Bacon",
            price: "22",
          },
          {
            name: "Mushrooms Stew",
            price: "22",
          },
          {
            name: "Chickenburger",
            price: "20",
          },
          {
            name: "Triple Cheese",
            price: "20",
          },
          {
            name: "Handsome Burger",
            price: "20",
          },
          {
            name: "Extra patty",
            price: "+8",
          },
          {
            name: "Choose your garnish:",
            price: " ",
            options: ["Falafel", "Cole Slow", "Country style potato"],
          },
        ],
      },

      {
        category: "*DAILY SPECIAL",
        centeredHeading: true,
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
    title: "COCKTAILS",
    slug: "cocktails",
    content: [
      {
        category: "COCKTAILS",
        positions: [
          {
            name: "Negroni",
            price: "22",
          },
          {
            name: "Boulevardier",
            price: "22",
          },
          {
            name: "Gimlet",
            price: "22",
          },
          {
            name: "Flowered Gimlet",
            price: "22",
          },
          {
            name: "Rubylonesca",
            price: "22",
          },
          {
            name: "Cream Pie",
            price: "22",
          },
          {
            name: "Jäg Young",
            price: "22",
          },
          {
            name: "Bloody Mary",
            price: "22",
          },
          {
            name: "Red Snapper",
            price: "22",
          },
          {
            name: "Bloody Maria",
            price: "22",
          },
          {
            name: "Berry Sour",
            price: "22",
          },
          {
            name: "Cider Sprits",
            price: "22",
          },
          {
            name: "Fresh Friday",
            price: "22",
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
            name: "Vodka",
            price: "6",
          },
          {
            name: "Gin Jako",
            price: "8",
          },
          {
            name: "Gin Bombey",
            price: "12",
          },
          {
            name: "Tequila Olmeca",
            price: "12",
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
            price: "8",
          },
          {
            name: "Becherovka",
            price: "6",
          },
          {
            name: "Vermouth",
            price: "8",
          },
          {
            name: "Gin + tonic",
            price: "16",
          },
          {
            name: "Whiskey + cola",
            price: "16",
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
    iconProps: { src: "/images/telegram-logo-thin.svg", alt: "Contact on Telegram" },
    description: "Contact us on Telegram",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/handsome.tbilisi?igsh=cXprOXA1ODd3NHhn",
    iconProps: { src: "/images/instagram.svg", alt: "Contact on Instagram" },
    description: "Follow us on Instagram",
  },
  {
    title: "Phone",
    link: "tel:+995599138719",
    iconProps: { src: "/images/phone-call.svg", alt: "Call phone number" },
    description: "Contact us by phone",
  },
];

export const ADDRESS = {
  street: "Tbilisi, Merab Kostava 35",
  info: "Entrance from Kostava and Vera Park",
  lat: 41.70755988357727,
  lng: 44.787542958606494,
};

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
