import axios from 'axios';

const T2CBaseUrl = axios.create({
    baseURL: "https://time-to-clime.onrender.com/api"
});

export const fetchMapData = ((params) => {
    // TODO: temp data hard coded until BE is integrated
    return new Promise(() => {
        return (() => {
            return {
                userLocations: [
                    { id: 1, latitude: 53.98423, longitude: -1.43245, numOfSessions: 1 },
                    { id: 2, latitude: 52.28423, longitude: -1.83154, numOfSessions: 2 },
                    { id: 3, latitude: 52.98423, longitude: -2.45304, numOfSessions: 3 },
                    { id: 4, latitude: 53.347581, longitude: -1.459631, numOfSessions: 3 }
                ],
                gymLocations: [
                    { id: 1, latitude: 53.28423, longitude: -1.953013 },
                    { id: 2, latitude: 53.148291, longitude:-1.202161 }
                ],
                mapCentreLatitude: null, // TODO: set to user's location
                mapCentreLongitude: null // TODO: set to user's location
            }
        });
    });
});


