import React from "react";
import Articles from "../Components/Articles";
import { tech, webDesign, figma, general } from "../data/Articles.js";

const ArticlesPage = () => {
  return (
    <div>
      <Articles tech={tech} category="tech" />
      <Articles tech={webDesign} category="design" />
      <Articles tech={figma} category="figma" />
      <Articles tech={general} category="general" />
    </div>
  );
};

export default ArticlesPage;
