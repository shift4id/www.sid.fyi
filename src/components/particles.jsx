import { useEffect } from "react";
import Particles from "@/lib/particles";

export default function Star() {
  useEffect(() => Particles.init(), []);

  return <canvas className="pointer-events-none fixed inset-0" id="particles"></canvas>;
}
