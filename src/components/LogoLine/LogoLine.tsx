"use client";
import React from "react";

import { LazyMotion, m } from "framer-motion";

import { smoothSpring } from "@/constants";

const loadFeatures = () => import("../../features").then((res) => res.default);

type LogoLineProps = {
  rightDirection?: boolean;
};

const LogoLine: React.FC<LogoLineProps> = ({ rightDirection = false }) => {
  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        animate={{
          width: "100%",
          backgroundColor: "rgb(0, 0, 0, 0.3)",
          x: 0,
        }}
        initial={{ height: "2px", x: rightDirection ? -300 : 300 }}
        transition={smoothSpring}
      />
    </LazyMotion>
  );
};

export default LogoLine;
