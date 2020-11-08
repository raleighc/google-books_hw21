import React, { useState } from "react";
import Results from "../Results/Results";
import API from "../../utils/API";

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
    API.getBook(query)
      .then((result) => {
        // console.log(result.data);
        setBooks(result.data.items);
        // console.log(books);
        setQuery("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Book Search</h5>
                <form onSubmit={handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">
                      Search for Book Title:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Type book title here then click Search!"
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
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Results</h5>
                {books === undefined || books.length === 0
                  ? "There are no books by that title in our collection."
                  : books.map((book) => {
                      // console.log(book);
                      return (
                        <Results
                          key={book.id}
                          title={book.volumeInfo.title}
                          authors={book.volumeInfo.authors}
                          image={book.volumeInfo.imageLinks.smallThumbnail}
                          description={book.volumeInfo.description}
                          link={book.volumeInfo.infoLink}
                        />
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
