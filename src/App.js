import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import axios from "axios";
import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      const response = await axios.get(
        "https://unsplash.com/napi/search/photos?query=i%20cant%20breathe&xp=&per_page=20&page=2&color=black_and_white"
      );
      const pictures = await response.data.results.map((photo) => {
        return {
          id: photo.id,
          src: photo.urls.small,
          width: 4,
          height: 3,
        };
      });
      setPhotos(pictures);
    }
    getPhotos();
  }, []);

  return (
    <div className="App-header">
      <Gallery photos={photos} />
    </div>
  );
};

export default App;
