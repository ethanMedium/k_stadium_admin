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
    const url = `http://192.168.72.109:1111/report/2022/10/14`;
    const data = await axios.get(url, opt);
    return data;
  }
}

export default MediumService;
