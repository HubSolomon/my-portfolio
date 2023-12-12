import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Developer",
          "Back End Developer",
          "BrainStorming",
          "Software Engineer",
          "Open Source Contributor",
          "Ideas Harvesting",
          "Data Control",
          "Social Media Marketing",
          "Project planing",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
