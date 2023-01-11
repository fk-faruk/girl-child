import React from "react";
import Card from "react-bootstrap/Card";
import Cards from "./Cards";
function Container(props) {
  return (
    <>
      {props.cold ? (
        <>
          <Card body className="image" style={props.style}>
            {props.picture ? (
              <Cards
                name="Get connected to the best Mentors"
                text="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco labori"
                text1="Learn more about your mentor"
                style={{ backgroundColor: "white" }}
              />
            ) : (
              ""
            )}
          </Card>
        </>
      ) : (
        <>
          <Card body className="imagesecond" style={props.style}>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-4">
                <Cards
                  name="Invite your friends"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
                />
              </div>
            </div>
          </Card>
        </>
      )}
    </>
  );
}

export default Container;
