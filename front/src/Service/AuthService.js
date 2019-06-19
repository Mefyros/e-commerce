import Axios from 'axios';
export default class Auth {
    static async isAdmin(){
        if(undefined === localStorage.eToken){
            return false
        } else {
            return Axios.get('/api/user/isadmin', {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': localStorage.eToken,
                }
            }).then(res => {
                if(res.data[0] == 'ROLE_ADMIN'){
                    return true
                } else {
                    return false
                }
            }).catch(err => {
                return {err: err}
            })
        }
    }
    static async getUser(token){
        if(undefined === token){
            return false
        } else {
            return Axios.get('/api/user/', {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+token,
                }
            }).then(res => {
                if(undefined !== res.data.message && res.data.message === 'Unauthenticated'){
                    return false
                } else if (undefined !== res.data.id){
                    return {user: res.data}
                }
            }).catch(err => {
                return {err: err}
            })
        }
    }
}
