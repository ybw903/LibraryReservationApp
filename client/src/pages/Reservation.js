import React, {Component} from 'react';

import ReservationContainer from '../containers/ReservationContainer';
class Reservation extends Component {
    render() {
        const {params} = this.props.match;
        
        return (
            <div>
                <ReservationContainer library_No={params.library_No}/>
            </div>   
        );
    }
}

export default Reservation;