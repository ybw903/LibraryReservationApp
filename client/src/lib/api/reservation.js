import axios from 'axios';
import Cookie from 'js-cookie';

export function reservation(username, seat_No){
    return axios.post('/api/reservation',{username,seat_No},{headers:{'Authorization': 'Bearer '+Cookie.get('user')}});
}