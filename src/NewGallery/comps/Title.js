import React from "react";
import "../css/title.scss";

const Title = () => {
  return (
    <div className="title">
      <h1 id="homeh1">
        Artsy<span className="span-homeh1">Ish</span>
      </h1>
      <h2 className="title-h2">
        <span className="title-h2-span">Y</span>our
      </h2>
      <h2 className="title-h2-2">
        <span className="title-h2-2-span">P</span>ICTURES
      </h2>

      <p className="title-p">
        + +  SHOW    YOUR     TALENT     TO     THE     NET     AND     THE     MASSES  + +
      </p>
    </div>
  );
};

export default Title;
