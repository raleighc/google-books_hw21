import React, { useState } from "react";
import API from "../../utils/API"

import "./SearchCard.css";

const SearchCard = () => {

  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleInputChange = (event) => {
    event.preventDefault();
    let { value } = event.target;
    
    setQuery(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();    
    if (query === "") {
      console.log("You must enter a book title to search");
      return;
    }
    API.getBook(query).then((result) => {
        console.log(result.data);
        setBooks(result.data.items);
        console.log(books)
        setQuery("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">Book Search</h5>
              <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Book</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Type which Book you would like to search for."
                    name="query"
                    value={query}
                    onChange={handleInputChange}
                  />
                  <button
                    className="btn btn-outline-dark float-right"
                    type="submit"
                    onClick={handleOnSubmit}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
