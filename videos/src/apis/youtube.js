// Preconfigured version of Axios
import axios from 'axios';

const KEY = 'AIzaSyD78Ww5YQDIgMn_ESZJo-fK35b_X-uqvmA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});