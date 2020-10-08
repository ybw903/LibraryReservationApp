const Reservation = require('../../../models').reservation;
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

exports.reservation = (req,res)=>{
    const {username, seat_No} = req.body;
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    Reservation.create({s_ID: username, seat_No: seat_No, Reservation_time : time, Finish: 0})
    .then(()=>{
        res.json({
            message: 'reservation success'
        });
    })
    .catch((err)=>{
        console.log(err);
    })

}