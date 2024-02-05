import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update state with the received dog image
        setDogImage(data.message);
        setLoading(false); // Set loading to false after receiving the response
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      {loading ? <p>Loading...</p> : <img src={dogImage} alt="A Random Dog" />}
    </div>
  );
};

export default App;
