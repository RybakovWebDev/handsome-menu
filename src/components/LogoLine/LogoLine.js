"use client";
import { LazyMotion, m } from "framer-motion";

import { smoothSpring } from "@/constants";

const loadFeatures = () => import("../../features").then((res) => res.default);

function LogoLine({ toRight }) {
  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        animate={{
          width: "100%",
          backgroundColor: "rgb(0, 0, 0, 0.3)",
          x: 0,
        }}
        initial={{ height: "2px", x: toRight ? -300 : 300 }}
        transition={smoothSpring}
      />
    </LazyMotion>
  );
}

export default LogoLine;
