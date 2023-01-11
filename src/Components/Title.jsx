import React from "react";

const Title = (props) => {
  return (
    <div>
      <h5
        href="#"
        className="display-4"
        style={{
          fontSize: "30px",
          marginTop: "50px",
          marginBottom: "20px",
          color: "black",
          fontWeight: 400,
        }}
      >
        {props.name}
      </h5>
    </div>
  );
};

export default Title;
