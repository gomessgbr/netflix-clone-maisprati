import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const authToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDA2MDY2MjJmNGMzYmExZWU3OGY2MjZhZTlkNGIxNiIsIm5iZiI6MTcyNDYxMzA5My4xOTYyNzgsInN1YiI6IjY2YzY4MzdjOWUzNGQxZmU3ZmZhNDc0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bl7TJT9b4IlDqstXfR3wVlZJ4lbo6BHuHzIU_FdOQEI";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});
