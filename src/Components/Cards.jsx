import React from "react";

const Cards = (props) => {
  return (
    <div className="cardsss" style={props.style}>
      <div className=" " style={{ padding: "50px" }}>
        <h3
          className=""
          style={{ color: "black", fontWeight: "bold", fontSize: "34px" }}
        >
          {props.name}
        </h3>
        <p className="card-text"> {props.text}</p>

        <form action="" className="search-wrapper cf">
          <div className="d-flex">
            <input
              className="form-control input"
              style={{ border: "1px solid black" }}
              placeholder="enter name please"
            />
            {/* <button className="btn btn-dark ">submit</button> */}
          </div>
        </form>
        <p className="card-text">{props.text1}</p>
      </div>
    </div>
  );
};

export default Cards;
