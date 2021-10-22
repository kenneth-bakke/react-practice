import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID vP58g8lX4ao0H6lbmNp1TSqxNTxgovC_7PaH-OY1BCY'
  }
});