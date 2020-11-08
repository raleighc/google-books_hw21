import React from "react";

import "./SearchCard.css";

const SearchCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">Book Search</h5>
              <form>
                <div className="form-group">
                  <label for="formGroupExampleInput">Book</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Type which Book or Author you would like to search."
                  />
                    <button class="btn btn-outline-dark float-right" type="submit">Search</button>
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
