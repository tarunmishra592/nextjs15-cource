import { StaticImageData } from "next/image";
import photo1 from "./photos/1.png";
import photo2 from "./photos/2.png";
import photo3 from "./photos/3.png";
import photo4 from "./photos/4.png";
import photo5 from "./photos/5.png";
import photo6 from "./photos/6.png";
import photo7 from "./photos/7.png";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: photo1,
    photographer: "Photo by SylviaWetzel",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: photo2,
    photographer: "Photo by ChiemSeherin",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: photo3,
    photographer: "Photo by Graham-H",
    location: "Brazil",
  },
  {
    id: "4",
    name: "Machu Picchu",
    src: photo4,
    photographer: "Photo by WikiImages",
    location: "Peru",
  },
  {
    id: "5",
    name: "Chichen Itza",
    src: photo5,
    photographer: "Photo by Walkerssk",
    location: "Mexico",
  },
  {
    id: "6",
    name: "Roman Colosseum",
    src: photo6,
    photographer: "Photo by Serena Morandi",
    location: "Italy",
  },
  {
    id: "7",
    name: "Taj Mahal",
    src: photo7,
    photographer: "Photo by RuthiesArtCreations",
    location: "India",
  },
];

export default wondersImages;
