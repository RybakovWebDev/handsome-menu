"use client";
import React, { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import styles from "./MapWrapper.module.css";
import Image from "next/image";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function MapWrapper() {
  const [loadMap, setLoadMap] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadMap(false);
    }, 1000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.section initial={{ opacity: 0, height: "20rem" }} animate={{ opacity: 1 }} className={styles.wrapper}>
        {loadMap ? (
          <span className={styles.loader}></span>
        ) : (
          <m.iframe
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            title='Google Map with location of the Handsome bar in Tbilisi'
            loading='lazy'
            src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Handsome%2C+Tbilisi`}
            referrerPolicy='no-referrer-when-downgrade'
            sandbox='allow-scripts allow-same-origin'
          ></m.iframe>
        )}
      </m.section>
    </LazyMotion>
  );
}

export default MapWrapper;
