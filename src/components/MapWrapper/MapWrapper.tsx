"use client";
import React from "react";
import { LazyMotion, m } from "framer-motion";

import styles from "./MapWrapper.module.css";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const loadFeatures = () => import("../../features").then((res) => res.default);

const MapWrapper: React.FC = () => {
  return (
    <LazyMotion features={loadFeatures}>
      <m.section
        initial={{ opacity: 0, height: "20rem" }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className={styles.wrapper}
      >
        <iframe
          title='Google Map with location of the Handsome bar in Tbilisi'
          loading='lazy'
          src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Handsome%2C+Tbilisi`}
          referrerPolicy='no-referrer-when-downgrade'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </m.section>
    </LazyMotion>
  );
};

export default MapWrapper;
