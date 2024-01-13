import { Instagram, PhoneCall } from "react-feather";
import { PiTelegramLogoThin } from "react-icons/pi";

import foodMenu from "../../public/images/food.jpg";
import cocktailsMenu from "../../public/images/cocktails.jpg";
import coffeeMenu from "../../public/images/coffee.jpg";
import spiritsMenu from "../../public/images/spirits.jpg";
import teaSoftMenu from "../../public/images/teaSoft.jpg";
import wineBeerMenu from "../../public/images/wineBeer.jpg";

export const MENULINKS = [
  {
    title: "Food",
    slug: "food",
    color: "hsl(36, 47%, 88%)",
    image: foodMenu,
  },
  {
    title: "Coffee",
    slug: "coffee",
    color: "hsl(0, 0%, 0%)",
    image: coffeeMenu,
  },
  {
    title: "Tea & Soft drinks",
    slug: "teaSoft",
    color: "hsl(0, 0%, 0%)",
    image: teaSoftMenu,
  },
  {
    title: "Cocktails",
    slug: "cocktails",
    color: "hsl(0, 0%, 0%)",
    image: cocktailsMenu,
  },
  {
    title: "Spirits",
    slug: "spirits",
    color: "hsl(0, 0%, 0%)",
    image: spiritsMenu,
  },
  {
    title: "Wine & Beer",
    slug: "wineBeer",
    color: "hsl(0, 0%, 0%)",
    image: wineBeerMenu,
  },
];

export const CONTACTS = [
  {
    title: "Telegram",
    link: "https://t.me/Sky_mother",
    icon: <PiTelegramLogoThin size={30} />,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/handsome.tbilisi?igsh=cXprOXA1ODd3NHhn",
    icon: <Instagram size={30} strokeWidth={1} />,
  },
  {
    title: "Phone",
    link: "tel:+995599138719",
    icon: <PhoneCall size={30} strokeWidth={1} />,
  },
];

export const smoothSpring = {
  type: "spring",
  damping: 60,
  stiffness: 500,
};

export const shevronAnimation = {
  delay: 1,
  duration: 1,
  ease: "easeInOut",
  repeat: Infinity,
  repeatDelay: 1,
};

export const initialVerticalOffset = {
  y: 20,
  opacity: 0,
};

export const finalVerticalOffset = {
  y: 0,
  opacity: 1,
};

export const duration300 = {
  duration: 0.3,
};

export const duration500 = {
  duration: 0.5,
};
