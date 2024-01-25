"use client";
import React from "react";
import { motion } from "framer-motion";

import { smoothSpring } from "@/app/constants";

function LogoLine({ toRight }) {
  return (
    <motion.div
      animate={{
        width: "100%",
        backgroundColor: "rgb(0, 0, 0, 0.3)",
        x: 0,
      }}
      initial={{ height: "2px", x: toRight ? -300 : 300 }}
      transition={smoothSpring}
    />
  );
}

export default LogoLine;
