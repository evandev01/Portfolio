import axios from 'axios';
// Email POST request made from Contact form
const API = {
  sendEmail: function (data) {
    return axios.post('/api/contact/send', data);
  }
};

export default API;
