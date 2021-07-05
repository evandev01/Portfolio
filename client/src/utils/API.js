import axios from 'axios'
// Email POST request made from Contact form
const API = {
  sendEmail: async function (formData) {
    return await axios.post('/api/mail/send', formData)
  },
  // getApiKey: async function () {
  //   return await axios.get('/api/apikey')
  // },
}

export default API
