import React from "react";

import "./SavedBooks.css"

const SavedBooks = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">Saved Books</h5>
              <div className="card w-90">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-8 text-left">
                      <h5>Book Title</h5>
                      <h6>Book description</h6>
                    </div>
                    <div className="col-sm-4 text-right">
                      <button className="btn btn-outline-info">View</button>
                      <button className="btn btn-outline-info">Delete</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <img
                        src="https://www.fillmurray.com/200/200"
                        alt="Placeholder"
                      />
                    </div>
                    <div className="col-sm-10">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda asperiores nesciunt rerum placeat enim,
                        deserunt eaque totam necessitatibus tempora, ullam culpa
                        voluptates aliquam? Totam, error sequi cupiditate
                        excepturi explicabo asperiores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedBooks;
