import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import axios from "axios";
import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const API_KEY = "16911223-0187ed3475f961e58bd214821";
  const URL =
    "https://pixabay.com/api/?key=" +
    API_KEY +
    "&q=" +
    encodeURIComponent("red roses");

  useEffect(() => {
    axios.get(URL, function (data) {
      console.info(data, "data");
    });

    // setPhotos([
    //   {
    //     src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    //     width: 4,
    //     height: 3,
    //   },
    //   {
    //     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    //     width: 3,
    //     height: 5,
    //   },
    //   {
    //     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    //     width: 1,
    //     height: 1,
    //   },
    //   {
    //     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    //     width: 3,
    //     height: 4,
    //   },
    //   {
    //     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    //     width: 3,
    //     height: 4,
    //   },

    //   {
    //     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    //     width: 2,
    //     height: 1,
    //   },
    // ]);
  }, [URL, photos]);

  return <Gallery photos={photos} />;
};

export default App;
