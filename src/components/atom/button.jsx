import React from "react";
import { Button } from "@nextui-org/react";

const Btn = (props) => {
  return (
    <Button
      onClick={props.navigation}
      radius="small"
      className={`${props.register ? "registerBtn" : "btn"} text-white shadow-lg ${props.width}`}
    >
      {props.text}
    </Button>
  );
};

export default Btn;
