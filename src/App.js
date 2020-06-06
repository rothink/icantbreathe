import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import axios from "axios";
import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL =
    "https://pixabay.com/api/?key=" +
    API_KEY +
    "&q=" +
    encodeURIComponent("red roses");

  useEffect(() => {
    // axios.get(URL, function (data) {
    //   console.info(data, "data");
    // });
    // axios
    //   .get(
    //     "https://unsplash.com/napi/search/photos?query=i%20cant%20breathe&xp=&per_page=20&page=2&color=black_and_white"
    //   )
    //   .then((res) => {
    //     res.results.map((photo) => {
    //       setPhotos([
    //         {
    //           width: 4,
    //           height: 5,
    //           src:
    //             "https://images.unsplash.com/photo-1590940343077-256fb4ef5f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    //         },
    //       ]);
    //     });
    //   });
    setPhotos([
      {
        src:
          "https://images.unsplash.com/photo-1591155740183-6c2d6dc2713a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        width: 7,
        height: 10,
      },

      {
        src:
          "https://images.unsplash.com/photo-1590962375196-cd5ea2a9f7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        width: 1,
        height: 1,
      },
      {
        src:
          "https://images.unsplash.com/photo-1590962375107-d227f462d558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        width: 4,
        height: 5,
      },
      {
        src:
          "https://images.unsplash.com/photo-1590940390781-5610fd34a14c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        width: 4,
        height: 5,
      },
      {
        src:
          "https://images.unsplash.com/photo-1590962375807-5700303c0d0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        width: 4,
        height: 5,
      },
      {
        src:
          "https://images.unsplash.com/photo-1591091579849-a09ab742e14b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        width: 4,
        height: 5,
      },
      {
        src:
          "https://images.unsplash.com/photo-1590895794926-2c74ed5e9388?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        width: 4,
        height: 5,
      },
      {
        src:
          "https://images.unsplash.com/photo-1591065411478-97722a82fe81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80",
        width: 4,
        height: 5,
      },
      {
        src:
          "https://images.unsplash.com/photo-1590940291260-e2a1176d5a14?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        width: 4,
        height: 5,
      },
      {
        src:
          "https://images.unsplash.com/photo-1591189328344-6af9c0c47440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
        width: 4,
        height: 5,
      },
    ]);
  }, [URL, photos]);

  return (
    <div class="App-header">
      <Gallery photos={photos} />
    </div>
  );
};

export default App;
