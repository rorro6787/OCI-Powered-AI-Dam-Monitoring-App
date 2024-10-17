import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "El agua es vida",
          "Cada gota es importante",
          "Informate y actúa",
          "¡Cuidemosla juntos!",
          "Protejamos el futuro del agua juntos",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;