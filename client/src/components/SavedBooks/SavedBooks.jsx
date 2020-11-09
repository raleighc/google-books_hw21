import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./SavedBooks.css";

const SavedBooks = () => {
  const [allSavedBooks, setAllSavedBooks] = useState([]);

  useEffect(() => {
    loadSavedBooks();
  },[]);

  const loadSavedBooks = () => {
    Axios.get("/api/books").then((res) => {
      setAllSavedBooks(res.data);
    });
  };

  const deleteOneBook = (event) => {
    console.log(event.target.id)
    Axios.delete("/api/books/" + event.target.id).then((result) => {
      console.log(result);
      loadSavedBooks();
    }).catch((err) => {
      console.log(err)
    })
  };

  const viewLink = (event) => {
    window.open(event.target.id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">Saved Books</h5>

              {allSavedBooks.map((book) => {
                return (
                <div key={book._id} className="card w-90">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-8 text-left">
                        <h5>{book.title}</h5>
                        <h6>{book.authors}</h6>
                      </div>
                      <div className="col-sm-4 text-right">
                        <button
                        id={book.link}
                          onClick={viewLink}
                          className="btn btn-outline-info"
                        >
                          View
                        </button>
                        <button
                        id={book._id}
                          onClick={deleteOneBook}
                          className="btn btn-outline-info"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-2">
                        <img src={book.image} alt="cover of book" />
                      </div>
                      <div className="col-sm-10">
                        <p>{book.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedBooks;
