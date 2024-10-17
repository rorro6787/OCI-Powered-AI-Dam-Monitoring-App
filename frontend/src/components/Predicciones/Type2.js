import React from "react";
import Typewriter from "typewriter-effect";

function Type2() {
  return (
    <Typewriter
      options={{
        strings: [
            "Exciting Projects Coming Soon...",
            "More Projects Are on the Way...",
            "Stay Tuned for More Projects...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type2;
