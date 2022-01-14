import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../../config/particle-config";

export default function ParticleBackground() {
  return (
    <div id="particles-js">
      <Particles params={ParticleConfig}></Particles>
    </div>
  );
}
