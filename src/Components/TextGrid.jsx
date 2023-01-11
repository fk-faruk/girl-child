import React from "react";
// import Title from "./Title";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Title from "./Title";

const TextGrid = () => {
  return (
    <div className="" style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Row sm={1}>
        <Col lg={6}>
          <h5
            className="display-3"
            style={{
              fontSize: "30px",
              color: "black",
              fontWeight: 400,
            }}
          >
            Still have questions?
          </h5>
        </Col>
        <Col lg={6}>
          <h5
            className="display-3"
            style={{ fontSize: "20px", fontWeight: 400 }}
          >
            How much does it cost to have a mentor
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <h5
            className="display-4"
            style={{ fontSize: "20px", fontWeight: 400 }}
          >
            What is no show? what is a no show policy
          </h5>

          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          </p>

          <h5
            className="display-4"
            style={{ fontSize: "20px", fontWeight: 400, paddingTop: "30px" }}
          >
            What is no show? what is a no show policy
          </h5>

          <h5
            className="display-4"
            style={{ fontSize: "20px", fontWeight: 400, paddingTop: "30px" }}
          >
            What is no show? what is a no show policy
          </h5>

          <h5
            className="display-4"
            style={{ fontSize: "20px", fontWeight: 400, paddingTop: "30px" }}
          >
            What is no show? what is a no show policy
          </h5>
        </Col>
      </Row>
      {/* <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row> */}
    </div>
  );
};

export default TextGrid;
