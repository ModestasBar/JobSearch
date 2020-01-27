import React, { useState, Fragment } from "react";
import PostSection from "./components/PostSection";
import SearchField from "./components/searchForm/SearchField";

const App = () => {
  let [url, setUrl] = useState("");
  let [keyw, setKeyw] = useState("");
  let [scrapData, setScrapData] = useState([]);

  const handleClick = () => {
    console.log("test");
    fetch("http://localhost:3000/work", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ url, keyw })
    })
      .then(response => response.json())
      .then(res => {
        setScrapData((scrapData = res));
        console.log(res);
      })
      .catch(err => new Error("Ops... Something went wrong...", err));
  };

  const handleUrlChange = event => {
    setUrl((url = event.target.value));
  };

  const handleKeywChange = event => {
    setKeyw((keyw = event.target.value));
  };

  const handleScrapData = () => scrapData;

  return (
    // eslint-disable-next-line react/jsx-fragments
    <div>
      <SearchField
        onUrlChange={handleUrlChange}
        onKeywChange={handleKeywChange}
        onClick={handleClick}
      />
      <PostSection onScrapData={handleScrapData()} />
    </div>
  );
};

export default App;
