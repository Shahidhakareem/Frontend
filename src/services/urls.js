const BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3001"; // local fallback

const urls = {
  baseURL: BASE_URL,
  signUp: "/user/signup",
  login: "/user/login",
  courseList: "/courses",
  addCourse: "/courses/addcourse",
  addFreeCourse: "/courses/addfreecourse",
};

export default urls;

