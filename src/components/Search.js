import React,{useState} from "react";

function Search({onSearch}) {

  const [searchTerm, setSearchTerm]= useState("");

  const handleChange =(e) => {
    const search= e.target.value;
    setSearchTerm(search);
    onSearch(search);
  };

  
  return (

    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleChange}

      />

    </div>
  );
}

export default Search;
