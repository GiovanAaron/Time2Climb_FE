import axios from 'axios';

const t2cDb = axios.create({
    baseURL: "https://time2climb-be.onrender.com/api"
});

export const fetchWalls = ((user_id) => {
    return t2cDb.get(`/walls/user/${user_id}`)
        .then(({data}) => {
            return data;
        })
        .catch((err) => {
            console.log(err, '-- Error occurred whilst fetching walls --');
            throw(err);
        });
});

export const fetchUserSessions = ((user_id) => {
    return t2cDb.get(`/sessions/users/${user_id}`)
        .then(({data}) => {
            return data;
        })
        .catch((err) => {
            console.log(err, '-- Error occurred whilst fetching user sessions --');
            throw(err);
        });
});

export const fetchUserWallSessions = ((user_id, wall_id) => {
    console.log(user_id,wall_id, '--api data');
    return t2cDb.get(`/sessions/users/${user_id}/walls/${wall_id}`)
        .then(({data}) => {
            return data;
        })
        .catch((err) => {
            console.log(err, '-- Error occurred whilst fetching user wall sessions --');
            throw(err);
        });
});
