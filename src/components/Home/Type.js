import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hire me!",
          "Full Stack AWS Developer",
          "iOS Developer",
          "Hire me!",
          "Technical Writer",
          "Langchain",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;