import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import ReactLoading from "react-loading";
import ClipLoader from "react-spinners/ClipLoader";
// import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setTimeout(() => {
        setPhotos(pictures);
        setLoading(false);
      }, 3000);
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
