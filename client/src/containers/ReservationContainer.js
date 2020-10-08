import React, {Component} from 'react';
import ReservationMenu from '../components/ReservationMenu';
import Board from './Board';

class ReservationContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            floor:0
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({floor: e.target.value});
    }
    render() {
        const library_No = this.props.library_No;
        return (
            <div>
                <ReservationMenu library_No={library_No} floor={this.state.floor} floorChange={this.handleChange}/>
                <Board libraryNo={library_No} floorNo={this.state.floor+1}></Board>
            </div>
            
        );
    }
}

export default ReservationContainer;