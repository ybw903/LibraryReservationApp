import axios from 'axios';

export function getSeat(libraryNo, floorNo){
    return axios.get(`/api/seat/${libraryNo}/${floorNo}`);
}

export function seatUpdate(seatNo){
    return axios.put(`/api/seat/${seatNo}`);
}