import adele from "../assets/music/adele-easy-on-me.mp3";
import Song2 from "../assets/music/on-n-on.mp3";
import Song3 from "../assets/music/somebody-new.mp3";

import Adele from "../assets/images/adele.jpeg";
import Iamdaylight from "../assets/images/iamdaylight.jpeg";
import Imagine from "../assets/images/imagine.jpeg";
import Nolwenn from "../assets/images/nolwenn.jpeg";
import Juliette from "../assets/images/juliette.jpeg";
import Michael from "../assets/images/manila.jpeg";
import Metroplex from "../assets/images/metroplex.jpg";
import Queen from "../assets/images/queen.jpeg";
import Stromae from "../assets/images/stromae.jpeg";
import Swedish from "../assets/images/swedish.jpeg";

const titles = [
  {
    name: "Adele",
    album: "30",
    title: "Easy on me",
    year: "2021",
    genre: "Pop",
    image: Adele,
    color: "#19CFFC",
    src: adele,
  },
  {
    name: "Nolwenn Leroy",
    album: "La Cavale",
    title: "Brésil, Finistère",
    year: "2021",
    genre: "Pop",
    image: Nolwenn,
    color: "#FFE694",
    src: Song2,
  },
  {
    name: "Juliette Armanet",
    album: "Brûler le feu",
    title: "Le Dernier Jour",
    year: "2021",
    genre: "Pop",
    image: Juliette,
    color: "#098DFE",
    src: Song3,
  },
  {
    name: "Metroplex",
    album: "Streetwise",
    title: "The Day After",
    year: "2016",
    genre: "Ambient",
    image: Metroplex,
    color: "#9545DD",
    src: Song2,
  },
  {
    name: "Stromae",
    album: "Santé",
    title: "Santé",
    year: "2021",
    genre: "Pop",
    image: Stromae,
    color: "#83D841",
    src: Song3,
  },
  {
    name: "Queen",
    album: "News of the World",
    title: "We Will Rock You",
    year: "1977",
    genre: "Rock",
    image: Queen,
    color: "#19CFFC",
    src: Song2,
    vibrate: [
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
      [150, 200, 150, 200, 150, 650],
    ],
  },
  {
    name: "IamDayLight",
    album: "Orion",
    title: "Blue",
    year: "2020",
    genre: "Rock",
    image: Iamdaylight,
    color: "#FFE694",
    src: Song3,
  },
  {
    name: "Imagine Dragons",
    album: "Mercury – Act 1",
    title: "Wrecked",
    year: "2021",
    genre: "Alternative",
    image: Imagine,
    color: "#098DFE",
    src: Song2,
  },
  {
    name: "Swedish House Mafia",
    album: "Moth To A Flame",
    title: "Moth To A Flame",
    year: "2021",
    genre: "Electro",
    image: Swedish,
    color: "#9545DD",
    src: Song3,
  },
  {
    name: "Michael Jackson",
    album: "Manila 1996",
    title: "Smooth criminal",
    year: "1996",
    genre: "Pop",
    image: Michael,
    color: "#83D841",
    src: Song2,
  },
];

export default titles;
