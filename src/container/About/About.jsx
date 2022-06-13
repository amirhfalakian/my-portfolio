import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { client, urlFor } from "./../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className="about__container">
      <h2 className="head-text" style={{ paddingTop: 40, paddingBottom: 40 }}>
        what i do ?
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            // whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2
              className="bold-text"
              style={{ marginTop: 20, textAlign: "center" }}
            >
              {about.title}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
