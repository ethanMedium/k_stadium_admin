import axios from "axios";

const baseURL = "https://forum.kstadium.io";
const token = process.env.REACT_APP_DISCOURSE_KEY;
const clientId = process.env.REACT_APP_DISCOURSE_USER_ID;
const opt = {
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
    "User-API-Key": token,
    "User-Api-Client-Id": clientId,
    Accept: "application/json",
  },
};

class DiscourseService {
  async getTopics() {
    const url = `${baseURL}/latest.json?order=created`;
    const data = await axios.get(url, opt);
    const topics = data.data.topic_list.topics;
    return topics;
  }
  async getPosts() {
    const url = `${baseURL}/posts.json?`;
    const data = await axios.get(url, opt);
    const posts = data.data.latest_posts;
    return posts;
  }
  async getSingleTopic(id) {
    const url = `${baseURL}/t/${id}.json`;
    const data = await axios.get(url, opt);
    const topic = data.data;
    return topic;
  }
}

export default DiscourseService;
