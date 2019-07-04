import Axios from 'axios';

export default class Ticket {

  static async getAllByUser(token){
      if(undefined === token){
          return false
      } else {
          return Axios.get('/api/user/order', {
              headers: {
                  'Content-type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer '+token,
              }
          }).then(res => {
                return res.data;

          }).catch(err => {
              return {err: err}
          })
      }
  }
}
