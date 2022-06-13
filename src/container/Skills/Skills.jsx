import React, { useState, useEffect } from "react";

import "./Skills.scss";
import { client, urlFor } from "./../../client";
import { motion } from "framer-motion";
const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="skills__container" id="skills">
      <h2 className="head-text" style={{ paddingTop: 40, paddingBottom: 40 }}>
        My Skils
      </h2>
      <div className="skills__profiles">
        {skills.map((skill, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="skill__profile-item"
            key={skill.title + index}
          >
            <img src={urlFor(skill.imgUrl)} alt={skill.title} />
            <h2
              className="bold-text"
              style={{ marginTop: 20, textAlign: "center" }}
            >
              {skill.title}
            </h2>
            <p
              className="p-text"
              style={{
                marginTop: 20,
                textAlign: "center",
              }}
            >
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
