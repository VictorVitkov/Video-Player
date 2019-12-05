import axios from 'axios';

const KEY = 'AIzaSyAg0PmmBxC3-4BVUCpQaZqe-pIJsYve5Dk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
