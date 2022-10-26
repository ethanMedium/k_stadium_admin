import axios from "axios";

const baseURL = "http://192.168.72.109:1111/";
const opt = {
  withCredentials: false,
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

class MediumService {
  async getDailyRewards() {
    const url = `${baseURL}report/2022/10/14`;
    const data = await axios.get(url, opt);
    const refined = data.data.replace("<pre>", "");
    const refined2 = refined.replace("</pre>", "");
    const refined3 = refined2.replace(/14-basic-info-/gi, "");
    const refined4 = refined3.replace(/-/gi, "_");
    return JSON.parse(refined4);
  }
}

export default MediumService;
