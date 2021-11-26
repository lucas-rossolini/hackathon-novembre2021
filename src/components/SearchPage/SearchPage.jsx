import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./SearchPage.css";
import titles from "../../Data/data";
import Coeur from "../../assets/images/emptyheart.png";

function SearchPage() {
  const [filtervalue, setFiltervalue] = useState("");

  const onChangefilter = (event) => {
    const newvalue = event.target.value;
    setFiltervalue(newvalue);
  };

  return (
    <div className="searchBar">
      <div>
        <h2>Search</h2>
      </div>
      <div>
        <SearchBar filtervalue={filtervalue} onChangefilter={onChangefilter} />
      </div>
      <div>
        {titles
          .filter((title) =>
            title.title.toLowerCase().includes(filtervalue.toLowerCase())
          )
          .map((title) => (
            <div className="favori-global">
              <div className="cartes-favori">
                <img className="coeur-favori" src={Coeur} alt="coeur" />
                <img className="image-favori" src={title.image} alt="" />
                <div className="description-favori">
                  <p className="titre-favori">{title.title}</p>
                  <p className="artiste-favori">{title.name}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchPage;
