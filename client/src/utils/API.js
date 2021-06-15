import axios from 'axios';
// Email POST request made from Contact form
const API = {
  sendEmail: function (data) {
    return axios.post('https://api.sendgrid.com/v3/mail/send', data);
  }
};

export default API;
