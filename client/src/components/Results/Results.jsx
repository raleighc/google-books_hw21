import React from "react";

import "./Results.css";

const Results = (props) => {
  // const [state, setState] = useState({
  //   title: props.title,
  //   authors: props.authors,
  //   description: props.description,
  //   image: props.image,
  //   link: props.link,
  // });


const viewLink = (event) => {
  window.open(props.link);
}

  return (
    <div className="card w-90">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-8 text-left">
            <h5>{props.title}</h5>
            <h6>by: {props.authors}</h6>
          </div>
          <div className="col-sm-4 text-right">
            <button onClick={viewLink} className="btn btn-outline-info">View</button>
            <button className="btn btn-outline-info">Save</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <img src={props.image} alt="cover of book" />
          </div>
          <div className="col-sm-10">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
