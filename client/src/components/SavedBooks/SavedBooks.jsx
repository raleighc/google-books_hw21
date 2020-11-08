import React from "react";
import DeleteBook from "../SaveBook/SaveBook"

const SavedBooks = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card w-100">
            <div className="card-body">
            <h5 className="card-title">Saved Books</h5>
                <DeleteBook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedBooks;
