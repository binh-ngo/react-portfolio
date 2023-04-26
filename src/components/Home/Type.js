import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hire me!",
          "Full Stack MERN Developer",
          "AWS Developer",
          "Hire me!",
          "Code Blogger",
          "Creator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;