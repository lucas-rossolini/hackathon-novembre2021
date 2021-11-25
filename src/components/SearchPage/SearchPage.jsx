import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./SearchPage.css";
import data from "../../Data/data";

function SearchPage() {
  const [filtervalue, setFiltervalue] = useState("");
  // Fonction pour filtrer les cartes des personnages grace à la search bar
  const onChangefilter = (event) => {
    const newvalue = event.target.value;
    setFiltervalue(newvalue);
  };
  return (
    <div>
      <div>
        <SearchBar filtervalue={filtervalue} onChangefilter={onChangefilter} />
      </div>

      <div>
        <div class="mx-auto">
          <button class="btn col-5 m-2 btncolor" type="button">
            Rap
          </button>
          <button class="btn col-5 m-2 btncolor" type="button">
            Rock
          </button>
          <button class="btn col-5 m-2 btncolor" type="button">
            Pop
          </button>
          <button class="btn col-5 m-2 btncolor" type="button">
            Alternative
          </button>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default SearchPage;
