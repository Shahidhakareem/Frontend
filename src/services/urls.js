const BASE_URL = import.meta.env.VITE_API_BASE || "http://localhost:3001";


const urls = {
  baseURL: {
    dev: "http://localhost:3001",
    prod: "https://your-live-api.com",
  },
  signUp: "/user/signup",
  login: "/user/login",
  courseList: "/courses",
  addCourse: "/courses/addcourse",
  addFreeCourse : "courses/addfreecourse"
};

export default urls;
