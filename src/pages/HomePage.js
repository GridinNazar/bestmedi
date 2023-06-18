import React, { useState } from "react";
import AdSlider from "../components/adSlider/AdSlider";
import Header from "../components/header/Header";
import SearchingField from "../components/searchingField/SearchingField";
import Description from "../components/description/Description";
import List from "../components/list/List";

function HomePage() {
  const [isFound, setIsFound] = useState(false);
  return (
    <div className="HomePage">
      <Header />
      <Description />
      <SearchingField found={isFound} setFound={setIsFound} />
      {isFound ? <List /> : <AdSlider />}
    </div>
  );
}

export default HomePage;
