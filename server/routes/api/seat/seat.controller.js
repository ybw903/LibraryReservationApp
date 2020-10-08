const Seat = require('../../../models').seat;

exports.seats = (req,res)=>{
    let l=req.params.l;
    let r=req.params.r;
    Seat.findAll({attributes:['id', 'room_seat_No', 'reservation_check'],where:{library_No:l, library_room_No: r}})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.seat_reserve = (req,res)=>{
    let id = req.params.id;
    Seat.update({'reservation_check':1},{where:{id:id}})
    .then(()=>{
        res.json({
            messeage : 'update completed'
        });
    })
    .catch((err)=>{
        console.log(err);
    })

}