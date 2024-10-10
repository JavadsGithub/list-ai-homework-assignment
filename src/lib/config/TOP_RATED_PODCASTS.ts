import { Item } from "$/lib/redux";

export const TOP_RATED_PODCASTS: Item[] = [
  {
    id: "3",
    title: "Specification by Example",
    coverImage:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
    itemType: "book",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, iure.",
    progress: 31,
    author: "Satnam Alag",
  },
  {
    id: "4",
    title: "Flex 3 in Action",
    coverImage:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
    description:
      "New web applications require engaging user-friendly interfaces   and the cooler, the better.",
    itemType: "book",
    progress: 54,
    author: "Bernerd Allmon",
  },
  {
    id: "5",
    title: "Flex 4 in Action",
    coverImage:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
    description:
      'Using Flex, you can create high-quality, effective."Halo" versions.',
    itemType: "podcast",
    progress: 81,
    author: "Satnam Alag",
  },
  {
    id: "6",
    title: "Collective Intelligence in Action",
    coverImage:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
    description: "There's a great deal of wisdom in a crowd.",
    itemType: "podcast",
    progress: 16,
    author: "Rob Allen",
  },
];
