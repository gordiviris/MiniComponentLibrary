import React from "react";

function Box({ size , children}) {
  let width, height;
  switch (size) {
    case "s":
    case "small":
    case "sm":
      width = "100px";
      height = "100px";
      break;
    case "m":
    case "medium":
    case "md":
      width = "200px";
      height = "200px";
      break;
    case "l":
    case "large":
    case "lg":
      width = "300px";
      height = "300px";
      break;
    default:
      width = "500px";
      height = "500px";
  }

  return <div style={{ width, height, backgroundColor: "white" }}>{children}</div>;
}

export default Box;