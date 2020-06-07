import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import ReactLoading from "react-loading";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  useEffect(() => {
    async function getPhotos() {
      let pictures = [];
      for (let i = 1; i <= 23; i++) {
        pictures.push({
          src: require(`./assets/img${i}.jpg`),
          width: 4,
          height: 3,
        });
      }

      setPhotos(shuffle(pictures));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    getPhotos();
  }, []);

  return (
    <>
      {loading ? (
        <div className="App-header">
          <ReactLoading color="#fff" />
        </div>
      ) : (
        <div>
          <Gallery photos={photos} />
        </div>
      )}
    </>
  );
};

export default App;
