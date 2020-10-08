import axios from 'axios';
import Cookie from 'js-cookie';

export function authlogin (username,password){
    return axios.post('/api/auth/login',{username,password});
}

export function checkStatus(){
    return axios.get('/api/auth/check',{headers:{'x-access-token':Cookie.get('user')}});
} 