"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

import { smoothSpring } from "@/app/constants";

function LogoLine({ toRight }) {
  return (
    <LazyMotion features={domAnimation}>
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
