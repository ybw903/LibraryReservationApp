import axios from 'axios';
import Cookie from 'js-cookie';

export function reservation(username, seat_No){
    return axios.post('/api/reservation',{username,seat_No},{headers:{'x-access-token':Cookie.get('user')}});
}