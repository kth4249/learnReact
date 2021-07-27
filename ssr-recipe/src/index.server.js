import React from "react";
import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(
  <diov>Hello Server Side Rendering!</diov>
);

console.log(html);
