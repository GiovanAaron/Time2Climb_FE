
import axios from 'axios';

export const getWalls = () => {
  return axios
    .get(`https://time2climb-be.onrender.com/api/walls`)
    .then(({ data }) => {
      return data
    })
}

export const getClimbsBySessionId = (sessionId) => {
  return axios
    .get(`https://time2climb-be.onrender.com/api/climbs/${sessionId}`)
    .then(({ data }) => {
      return data
    })
}

export const postClimb = (newClimb) => {
  return axios
    .post(`https://time2climb-be.onrender.com/api/climbs`,
      {
        session_id: newClimb.session_id,
        grade_id: newClimb.grade_id,
        type_id: newClimb.type_id,
        climb_outcome_id: newClimb.climb_outcome_id,
      }
    )
    .then(({ data }) => {
      console.log("posted")
      return data
    })
}

export const deleteClimb = (climbId) => {
  return axios
    .delete(`https://time2climb-be.onrender.com/api/climbs/${climbId}`)
}

export const deleteSession = (sessionId) => {
  return axios
    .delete(`https://time2climb-be.onrender.com/api/sessions/${sessionId}`)
    .then((response) => {
      console.log(response.status)
    })
}

export const patchClimb = (climbId, patchBody) => {
  return axios
    .patch(`https://time2climb-be.onrender.com/api/climbs/${climbId}`,
      patchBody
    )
    .then(({ data }) => {
      return data
    })
}

export const postSession = (newSession) => {
  return axios
    .post(`https://time2climb-be.onrender.com/api/sessions`, newSession
    )
    .then(({ data }) => {
      return data
    })
}

export const patchSession = (newSession, sessionId) => {
  return axios
    .patch(`https://time2climb-be.onrender.com/api/sessions/${sessionId}`, newSession
    )
    .then(({ data }) => {
      return data
    })
}

export const gradesList = [
  { "id": 1, "grade": "3", "category": 1 },
  { "id": 2, "grade": "3+", "category": 1 },
  { "id": 3, "grade": "4", "category": 1 },
  { "id": 4, "grade": "4+", "category": 1 },
  { "id": 5, "grade": "5", "category": 1 },
  { "id": 6, "grade": "5+", "category": 1 },
  { "id": 7, "grade": "6A", "category": 1 },
  { "id": 8, "grade": "6A+", "category": 1 },
  { "id": 9, "grade": "6B", "category": 1 },
  { "id": 10, "grade": "6B+", "category": 1 },
  { "id": 11, "grade": "6C", "category": 1 },
  { "id": 12, "grade": "6C+", "category": 1 },
  { "id": 13, "grade": "7a", "category": 1 },
  { "id": 14, "grade": "7a+", "category": 1 },
  { "id": 15, "grade": "7b", "category": 1 },
  { "id": 16, "grade": "7b+", "category": 1 },
  { "id": 17, "grade": "7c", "category": 1 },
  { "id": 18, "grade": "7c+", "category": 1 },
  { "id": 19, "grade": "8a", "category": 1 },
  { "id": 20, "grade": "8a+", "category": 1 },
  { "id": 21, "grade": "8b", "category": 1 },
  { "id": 22, "grade": "8b+", "category": 1 },
  { "id": 23, "grade": "VB-", "category": 2 },
  { "id": 24, "grade": "VB", "category": 2 },
  { "id": 25, "grade": "VB+", "category": 2 },
  { "id": 26, "grade": "V0-", "category": 2 },
  { "id": 27, "grade": "V0", "category": 2 },
  { "id": 28, "grade": "V0+", "category": 2 },
  { "id": 29, "grade": "V1", "category": 2 },
  { "id": 30, "grade": "V2", "category": 2 },
  { "id": 31, "grade": "V3", "category": 2 },
  { "id": 32, "grade": "V4", "category": 2 },
  { "id": 33, "grade": "V5", "category": 2 },
  { "id": 34, "grade": "V6", "category": 2 },
  { "id": 35, "grade": "V7", "category": 2 },
  { "id": 36, "grade": "V8", "category": 2 },
  { "id": 37, "grade": "V9", "category": 2 },
  { "id": 38, "grade": "V10", "category": 2 },
  { "id": 39, "grade": "V11", "category": 2 },
  { "id": 40, "grade": "V12", "category": 2 },
  { "id": 41, "grade": "V13", "category": 2 },
  { "id": 42, "grade": "3", "category": 3 },
  { "id": 43, "grade": "3+", "category": 3 },
  { "id": 44, "grade": "4", "category": 3 },
  { "id": 45, "grade": "4+", "category": 3 },
  { "id": 46, "grade": "5", "category": 3 },
  { "id": 47, "grade": "5+", "category": 3 },
  { "id": 48, "grade": "6a", "category": 3 },
  { "id": 49, "grade": "6a+", "category": 3 },
  { "id": 50, "grade": "6b", "category": 3 },
  { "id": 51, "grade": "6b+", "category": 3 },
  { "id": 52, "grade": "6c", "category": 3 },
  { "id": 53, "grade": "6c+", "category": 3 },
  { "id": 54, "grade": "7a", "category": 3 },
  { "id": 55, "grade": "7a+", "category": 3 },
  { "id": 56, "grade": "7b", "category": 3 },
  { "id": 57, "grade": "7b+", "category": 3 },
  { "id": 58, "grade": "7c", "category": 3 },
  { "id": 59, "grade": "7c+", "category": 3 },
  { "id": 60, "grade": "8a", "category": 3 },
  { "id": 61, "grade": "8a+", "category": 3 }
]

export const outcomesList = [
  { "id": 1, "description": "Onsight (first attempt - no beta)" },
  { "id": 2, "description": "Flash (first attempt - with beta)" },
  { "id": 3, "description": "Redpoint (multiple attempts)" },
  { "id": 4, "description": "Repeat ascent" },
  { "id": 5, "description": "Still working on it" }
]

export const climbTypeList = [
  { "id": 1, "description": "Boulder (v-grade)" },
  { "id": 2, "description": "Boulder (font)" },
  { "id": 3, "description": "Top rope" },
  { "id": 4, "description": "Lead" },
  { "id": 5, "description": "Auto belay" }
]