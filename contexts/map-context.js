import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchWalls } from "../utils/api";

const MapDataContext = createContext();

export const MapDataProvider = ({ children }) => {

    const [mapData, setMapData] = useState({});

    useEffect(() => {
        fetchWalls(1) // TODO: temporarily hardcoded user ID
            .then((response) => {
                setMapData(response);
            })
            .catch(() => {
                console.log(err, '--Error fetching map data--');
                // TODO: display error message to user
            });
    }, [])

  return (
    <MapDataContext.Provider value={{ mapData, setMapData }}>
      {children}
    </MapDataContext.Provider>
  );
};

export const useMapData = () => useContext(MapDataContext);

