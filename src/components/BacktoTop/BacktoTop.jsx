import React, { useState, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

import "./BacktoTop.scss";
const BacktoTop = () => {
  const [backtoTop, setBacktoTop] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 100) {
          setBacktoTop(true);
        } else {
          setBacktoTop(false);
        }
      },
      []
    );
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={scrollUp}>
      {backtoTop && (
        <a href="#">
          <BsFillArrowUpSquareFill className="btn-top" />
        </a>
      )}
    </div>
  );
};

export default BacktoTop;
