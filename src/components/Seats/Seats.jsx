import React, { Component } from 'react';
import '../BTDatVeXemPhim.scss';
import { connect } from 'react-redux';
class Seats extends Component {
   state = { selectedSeat: [] };

   handleOnClick = (id) => {
      let userInfor = this.props.userInfor;

      if (userInfor.name !== '' && userInfor.numberOfSeats !== 0) {
         if (this.state.selectedSeat.length < userInfor.numberOfSeats) {
            let newSelectedSeatArray = [...this.state.selectedSeat];

            newSelectedSeatArray.push(id);
            this.setState({ selectedSeat: newSelectedSeatArray });
            let action = {
               type: 'DANG_CHON',
               pendingSeats: newSelectedSeatArray,
            };
            this.props.dispatch(action);
         } else {
            alert('Please enter a new number of seats');
         }
      } else {
         alert('Please fill in the form before choosing seats');
      }
   };
   clearSelection = () => {
      this.setState({ selectedSeat: [] });
      let action = {
         type: 'XOA_GHE',
         selectedSeats: this.state.selectedSeat,
      };
      this.props.dispatch(action);
   };
   confirmSelectSeats = () => {
      let action = {
         type: 'CHON_GHE',
         selectedSeats: this.state.selectedSeat,
      };
      this.props.dispatch(action);
   };
   render() {
      return (
         <div className=''>
            {this.props.seatsList.map((item) => {
               if (item.hang !== '') {
                  return (
                     <div className='row'>
                        <div
                           key={item.hang}
                           className='col firstChar'
                        >
                           {item.hang}
                        </div>
                        {item.danhSachGhe.map((item) => {
                           return (
                              <div
                                 onClick={() => {
                                    this.handleOnClick(item.soGhe);
                                 }}
                                 className={
                                    item.daDat
                                       ? 'col ghe gheDuocChon'
                                       : 'col ghe'
                                 }
                                 key={item.soGhe}
                              >
                                 {item.soGhe}
                              </div>
                           );
                        })}
                     </div>
                  );
               }
            })}
            <div className='row justify-content-end'>
               <button
                  onClick={this.confirmSelectSeats}
                  className='btn btn-light d-flex justify-content-center mt-2'
               >
                  Select Seat
               </button>
               <button
                  onClick={this.clearSelection}
                  className='btn btn-danger d-flex justify-content-center mt-2 ml-5'
               >
                  Clear
               </button>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (rootReducer) => {
   return {
      seatsList: rootReducer.datVePhimReducer.seatsList,
      userInfor: rootReducer.datVePhimReducer.userInfor,
      selectedSeat: rootReducer.datVePhimReducer.selectedSeats,
      pendingSeats: rootReducer.datVePhimReducer.pendingSeats,
   };
};

const ComponentSeats = connect(mapStateToProps)(Seats);

export default ComponentSeats;
