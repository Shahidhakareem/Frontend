const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

const urls = {
  baseURL: {
    dev: "http://localhost:3001",
    prod: "https://your-backend-service.onrender.com", // Render backend URL
  },
  signUp: "/user/signup",
  login: "/user/login",
  courseList: "/courses",
  addCourse: "/courses/addcourse",
  addFreeCourse: "/courses/addfreecourse",
};

export default urls;
