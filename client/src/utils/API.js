import axios from 'axios';
// Email POST request made from Contact form
const API = {
  sendEmail: function (data) {
    return axios.post('/api/contact/send', data);
  }
};

export default API;

// For local send
// http://localhost:3001/api/contact/send
