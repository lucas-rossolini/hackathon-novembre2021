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

const playlist = {
  simpsons: [
    166, 320, 128, 257, 103, 249, 71, 145, 138, 366, 119, 273, 120, 248, 79,
    121, 71, 121, 63, 113, 63, 129, 263, 665, 103, 112, 64, 113, 63, 105, 63,
    129, 119, 521, 71, 129, 63, 120, 56, 149, 107,
  ],

  ghostBusters: [
    592, 184, 632, 144, 584, 169, 534, 282, 96, 159, 95, 161, 104, 24, 88, 40,
    120, 152, 592, 184, 632, 144, 584, 169, 534, 282, 96, 159, 95, 161, 104, 24,
    88, 40, 120, 152,
  ],

  mario: [87, 89, 104, 176, 96, 176, 88, 88, 79, 241, 176, 377, 191],

  powerRangers: [150, 150, 150, 150, 75, 75, 150, 150, 150, 150, 450],

  mortalKombat: [
    100, 200, 100, 200, 100, 200, 100, 200, 100, 100, 100, 100, 100, 200, 100,
    200, 100, 200, 100, 200, 100, 100, 100, 100, 100, 200, 100, 200, 100, 200,
    100, 200, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 50, 50, 100,
    800,
  ],

  jamesbond: [
    200, 100, 200, 275, 425, 100, 200, 100, 200, 275, 425, 100, 75, 25, 75, 125,
    75, 25, 75, 125, 100, 100,
  ],

  starwars: [
    500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170,
    40, 500,
  ],

  morsecode: [
    100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30,
    100,
  ],

  gameOfThrones: [
    950, 50, 530, 80, 100, 100, 100, 60, 930, 50, 530, 80, 100, 100, 100, 60,
    980,
  ],

  survivor: [
    700, 150, 150, 150, 150, 150, 150, 1000, 150, 150, 150, 150, 150, 700, 150,
    150, 150, 150, 150, 0, 2000,
  ],
};

const $buttons = document.querySelector('[data-box="buttons"]');
const $textSupport = document.querySelector('p[data-js="support"]');

const isSupported = "vibrate" in navigator;

const vibrate = (music) => navigator.vibrate(playlist[music]);

const supportedMessage = (is) =>
  is ? "You browser supports" : "You browser does not supports";

$textSupport.innerHTML = supportedMessage(isSupported);

if (isSupported) {
  $buttons.addEventListener("click", (e) => {
    const music = e.target.dataset[" js "];
    vibrate(music);
  });
}

export default titles;
