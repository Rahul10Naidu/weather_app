import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className="btn btn-lg btn-warning text-white m-1 pe-auto "
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Button;
