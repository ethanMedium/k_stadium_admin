import axios from "axios";

const baseURL = "http://192.168.72.109:1111/";
const opt = {
  withCredentials: false,
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

function trimmer(data) {
  let refined = data.data.replace("<pre>", "");
  refined = refined.replace("</pre>", "");
  refined = refined.replace(/2-basic-info-/gi, "");
  refined = refined.replace(/4-basic-info-/gi, "");
  refined = refined.replace(/-/gi, "_");
  refined = JSON.parse(refined);
  refined = Object.values(refined);
  return refined;
}
class MediumService {
  async getDailyRewards(year, month, soID, address) {
    const url = `${baseURL}report/${year}/${month}/${soID}`;
    let data = await axios.get(url, opt);
    data = trimmer(data);
    const url2 = `${baseURL}report/${year}/${month}/${address}?so=${soID}`;
    let data2 = await axios.get(url2, opt);
    data2 = trimmer(data2);
    data2.map((item) => {
      item["dailyRewards"] = item.dailyReward;
      delete item.dailyReward;
      delete item.time;
      delete item.address;
      delete item.extra;
      return item;
    });
    data.map((item, idx) => {
      const a = Object.assign(item, data2[idx]);
      return a;
    });
    return data;
  }
}

export default MediumService;
