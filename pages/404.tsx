import Error, { ErrorProps } from "next/error";
import { NextPageContext } from "next";
const Custom404 = (props: ErrorProps) => {
  console.log(props.statusCode, props.title);
  return (
    <div style={{ height: "40vh", overflow: "hidden", marginTop: "1rem" }}>
      <div style={{ marginTop: "-15rem" }}>
        <Error statusCode="404" />
      </div>
    </div>
  );
};



export default Custom404;
