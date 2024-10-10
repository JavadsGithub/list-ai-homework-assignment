import {
  IconBook,
  IconLayoutGrid,
  IconMicrophone,
  IconSearch,
} from "@tabler/icons-react";

export const SIDE_NAVBAR = [
  {
    id: 0,
    title: "Podcast",
    icon: <IconMicrophone size={22} />,
    href: "/podcasts",
  },
  {
    id: 1,
    title: "Books",
    icon: <IconBook size={22} />,
    href: "/books",
  },
  {
    id: 2,
    title: "Category",
    icon: <IconLayoutGrid size={22} />,
    href: "/category",
  },
  {
    id: 3,
    title: "Search",
    icon: <IconSearch size={22} />,
    href: "/search",
  },
];
