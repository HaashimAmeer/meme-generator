import React from "react";
import MemesData from "../memesData";

export default function Meme() {
  //stores Meme object
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  //Stores source of all meme images
  const [allMemeImages, setAllMemeImages] = React.useState(MemesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="Top text" />
        <input type="text" className="form-input" placeholder="Bottom text" />
        <button className="form-output-btn" onClick={getMemeImage}>
          {" "}
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme-img" alt="" />
    </main>
  );
}
