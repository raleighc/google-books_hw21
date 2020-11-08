import React from 'react';
import DeleteBook from "../DeleteBook/DeleteBook"

const Results = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card w-100">
              <div className="card-body">
              <h5 className="card-title">Results</h5>
                  <DeleteBook />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Results;