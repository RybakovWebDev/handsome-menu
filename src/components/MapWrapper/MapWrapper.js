"use client";
import React, { useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { motion } from "framer-motion";

import styles from "./MapWrapper.module.css";

import { ADDRESS } from "@/app/constants";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const position = { lat: ADDRESS.lat, lng: ADDRESS.lng };

function MapWrapper() {
  const [mapReady, setMapReady] = useState(false);
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: mapReady ? 1 : 0, y: mapReady ? 0 : 20 }}
      className={styles.wrapper}
    >
      <APIProvider apiKey={API_KEY}>
        <Map
          zoom={15}
          center={position}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          onTilesLoaded={() => setMapReady(true)}
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    </motion.section>
  );
}

export default MapWrapper;
