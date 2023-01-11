import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ImageCard(props) {
  return (
    <Row sm={1} lg={3} className="g-4">
      {props.cards3 ? (
        <>
          {["0", "2", "2"].map((sss, i) => (
            <Col md={1} lg={4}>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.content}</Card.Text>
                {/* <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Text>{props.content}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body> */}
              </Card>
            </Col>
          ))}
        </>
      ) : (
        <>
          {["0", "2", "6", "7"].map((sss, i) => (
            <Col md={1} lg={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src={props.img}
                  style={{
                    height: "270px",
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Text>{props.content}</Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </>
      )}
    </Row>
  );
}

export default ImageCard;

// import Card from 'react-bootstrap/Card';

// function GridExample() {
//   return (

// }

// export default GridExample;
