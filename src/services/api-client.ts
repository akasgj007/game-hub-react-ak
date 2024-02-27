import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "00cb92be518240bfbe297d66ed7067f9",
  },
});
