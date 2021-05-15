const { User, Truck, Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    review: "This truck gave me diaherria",
    user_id: 1,
    truck_id: 2,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    user_id: 7,
    truck_id: 3,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    user_id: 9,
    truck_id: 3,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    user_id: 9,
    truck_id: 3,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    user_id: 9,
    truck_id: 3,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    user_id: 9,
    truck_id: 3,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    review:
      "Nulla magni veniam. Temporibus consectetur sunt sed tenetur non dicta sed doloremque. Non voluptas ex recusandae eum illum quisquam. Accusantium iste accusamus odit dolorum ipsum ab et. Architecto laborum pariatur cumque nihil et et. Iste et harum et et laudantium.",
    user_id: 9,
    truck_id: 3,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    user_id: 9,
    truck_id: 3,
  },
  {
    title: "Donec posuere metus vitae ipsum.",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    user_id: 9,
    truck_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
