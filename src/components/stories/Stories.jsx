import "./stories.scss";

import React from "react";

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Anya-taylor joy",
      img: "https://images.pexels.com/photos/4909818/pexels-photo-4909818.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Alba baptista ",
      img: "https://images.pexels.com/photos/4571276/pexels-photo-4571276.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Dua Lipa",
      img: "https://images.pexels.com/photos/4255410/pexels-photo-4255410.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // {
    //   id: 4,
    //   name: "Thomasin Mackenzie",
    //   img: "https://images.pexels.com/photos/4909818/pexels-photo-4909818.jpeg?auto=compress&cs=tinysrgb&w=600",
    // },
    // {
    //   id: 5,
    //   name: "Anya-taylor joy",
    //   img: "https://images.pexels.com/photos/4909818/pexels-photo-4909818.jpeg?auto=compress&cs=tinysrgb&w=600",
    // },
    // {
    //   id: 6,
    //   name: "Kylie Jenner",
    //   img: "https://images.pexels.com/photos/4909818/pexels-photo-4909818.jpeg?auto=compress&cs=tinysrgb&w=600",
    // },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img
          src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <span>Mad Sparks</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
