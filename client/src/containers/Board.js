import React from'react';
import Seat from '../components/Seat';
import * as seatApi from '../lib/api/seat';
import * as reservationApi from '../lib/api/reservation';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state={
            seats: '',
        };
    }
    reservationRequest = (username,seat_No)=>{
        reservationApi.reservation(username,seat_No).then((res)=>{
            console.log(seat_No);
            seatApi.seatUpdate(seat_No).then(
                ()=>{this.stateUpdate();console.log("update finished");}
            ).catch((e)=>{
                console.log("update failed");
            })
        }).catch((e)=>(console.log("reservation failed")));
        // reservationApi.reservation().then((res)=>{
        // })
    }
    stateUpdate=()=>{
        const {libraryNo, floorNo} = this.props;
        this.setState({seats:''});
        seatApi.getSeat(libraryNo+1,floorNo).then((res)=>{
            this.setState({seats:res.data});
        }).catch((e)=>console.log(e))
    }
    componentDidMount(){
        this.stateUpdate();
    }
    componentDidUpdate(prevProps){
        const{floorNo}= this.props;
        if(floorNo!==prevProps.floorNo)this.stateUpdate();   
    }
    render() {
      return (
        <div >
            {this.state.seats?this.state.seats.map((c,i)=>
            (<Seat id={c.id} seatNo={c.room_seat_No} check={c.reservation_check} reservationReq={this.reservationRequest}/>))
            :null}
        </div>
      );
    }
  }

  
export default Board;