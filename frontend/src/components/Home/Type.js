import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Engineer",
          "Offensive Security Practitioner",
          "Cybersecurity Enthusiast",
          "Persistent Challenge Seeker",
          "Curious Explorer of AI",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
