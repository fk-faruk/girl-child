import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ExpandedCard(props) {
  return (
    // <Container style={{ border: "red solid 1px" }}>
    <Row sm={1} lg={2} className="g-8" style={props.style}>
      {[1, 2].map((ww, ee) => (
        <>
          <Col lg={2}>
            <img
              src={props.img}
              alt=""
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "20px",
              }}
            />
          </Col>
          <Col lg={4}>
            <div className="">
              <p> {props.name}</p> <h4>{props.content} </h4>{" "}
              <p>{props.content2} </p>
              <small>{props.content3}</small>{" "}
            </div>
          </Col>
        </>
      ))}
    </Row>

    /* <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row> */
    // </Container>

    // <div>
    //   <div className="d-flex side-by-side">
    //     <div className="">
    //       <img
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZcDgjim8snEHvymCvxt7_4NxEe9NV_mwMw&usqp=CAU"
    //         alt=""
    //       ></img>
    //     </div>

    //     <div className="">
    //       <p>The side hustle of the famous </p>
    //       <h4>
    //         Your side Hustle most likely died a quick death cause youre are dead
    //       </h4>
    //       <p>
    //         thread this new path careflly so as not to questions who has
    //         bestowed this authority on you
    //       </p>
    //       <small>2 days ago</small>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ExpandedCard;
