let games = [
  {
    id: "game_1",
    title: "The Last of Us Part II",
    genre: "Action-Adventure",
    platform: ["PlayStation 4", "PlayStation 5"],
  },
  {
    id: "game_2",
    title: "Cyberpunk 2077",
    genre: "RPG",
    platform: ["PC", "PlayStation 5", "Xbox Series X"],
  },
  {
    id: "game_3",
    title: "Elden Ring",
    genre: "Action RPG",
    platform: ["PC", "PlayStation 5", "Xbox Series X"],
  },
  {
    id: "game_4",
    title: "God of War Ragnarok",
    genre: "Action",
    platform: ["PlayStation 5"],
  },
  {
    id: "game_5",
    title: "Red Dead Redemption 2",
    genre: "Open-World",
    platform: ["PC", "PlayStation 4", "Xbox One"],
  },
  {
    id: "game_6",
    title: "Hollow Knight",
    genre: "Metroidvania",
    platform: ["PC", "Nintendo Switch"],
  },
  {
    id: "game_7",
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Adventure",
    platform: ["Nintendo Switch"],
  },
  {
    id: "game_8",
    title: "Super Mario Odyssey",
    genre: "Platformer",
    platform: ["Nintendo Switch"],
  },
  {
    id: "game_9",
    title: "Halo Infinite",
    genre: "Shooter",
    platform: ["PC", "Xbox Series X"],
  },
  {
    id: "game_10",
    title: "Minecraft",
    genre: "Sandbox",
    platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "Mobile"],
  },
];

let reviews = [
  {
    id: "review_1",
    rating: 9,
    content:
      "An emotional rollercoaster with incredible storytelling and gameplay.",
    gameId: "game_1",
    authorId: "author_1",
  },
  {
    id: "review_2",
    rating: 8,
    content: "Despite the bugs, an immersive cyberpunk world like no other.",
    gameId: "game_2",
    authorId: "author_2",
  },
  {
    id: "review_3",
    rating: 10,
    content: "One of the best open-world RPGs ever created.",
    gameId: "game_3",
    authorId: "author_3",
  },
  {
    id: "review_4",
    rating: 9,
    content:
      "A fantastic continuation of Kratos' journey with emotional depth.",
    gameId: "game_4",
    authorId: "author_4",
  },
  {
    id: "review_5",
    rating: 10,
    content: "A masterpiece in open-world storytelling.",
    gameId: "game_5",
    authorId: "author_5",
  },
  {
    id: "review_6",
    rating: 9,
    content: "Incredible atmosphere and tight gameplay make this a must-play.",
    gameId: "game_6",
    authorId: "author_6",
  },
  {
    id: "review_7",
    rating: 10,
    content: "A breathtaking adventure with endless possibilities.",
    gameId: "game_7",
    authorId: "author_7",
  },
  {
    id: "review_8",
    rating: 9,
    content: "Pure joy wrapped in a colorful platforming experience.",
    gameId: "game_8",
    authorId: "author_8",
  },
  {
    id: "review_9",
    rating: 7,
    content: "Solid multiplayer, but the campaign lacks depth.",
    gameId: "game_9",
    authorId: "author_9",
  },
  {
    id: "review_10",
    rating: 10,
    content: "The ultimate sandbox experience with unlimited creativity.",
    gameId: "game_10",
    authorId: "author_10",
  },
];

let authors = [
  {
    id: "author_1",
    name: "John Doe",
    verified: true,
  },
  {
    id: "author_2",
    name: "Jane Smith",
    verified: false,
  },
  {
    id: "author_3",
    name: "Michael Johnson",
    verified: true,
  },
  {
    id: "author_4",
    name: "Emily White",
    verified: false,
  },
  {
    id: "author_5",
    name: "David Brown",
    verified: true,
  },
  {
    id: "author_6",
    name: "Sophia Green",
    verified: true,
  },
  {
    id: "author_7",
    name: "James Miller",
    verified: false,
  },
  {
    id: "author_8",
    name: "Olivia Martinez",
    verified: true,
  },
  {
    id: "author_9",
    name: "Daniel Wilson",
    verified: false,
  },
  {
    id: "author_10",
    name: "Emma Anderson",
    verified: true,
  },
];

export default { authors, games, reviews };
