import { useEffect } from "react";
import React from "react";
import Particles from "@/lib/particles";

const Star: React.FC = function () {
  useEffect(() => Particles.init(), []);

  return <canvas className="pointer-events-none fixed inset-0" id="particles"></canvas>;
};

export default Star;
