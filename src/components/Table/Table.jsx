import React, { Component } from 'react';
import { connect } from 'react-redux';
class Table extends Component {
   renderTable = () => {
      let name = this.props.userInfor.name;
      let numberOfSeats = this.props.userInfor.numberOfSeats;
      let selectedSeats = this.props.selectedSeats;
      if (name !== '' && numberOfSeats > 0 && selectedSeats.length > 0) {
         return (
            <tbody>
               <tr>
                  <th scope='row'></th>
                  <td>{name}</td>
                  <td>{numberOfSeats}</td>
                  <td>
                     {selectedSeats.map((item) => {
                        console.log(item);
                        return `${item.soGhe}, `;
                     })}
                  </td>
               </tr>
            </tbody>
         );
      }
   };
   render() {
      return (
         <table className='col-8 table table-dark mt-5'>
            <thead>
               <tr>
                  <th scope='col'></th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Number of seats</th>
                  <th scope='col'>Seats</th>
               </tr>
            </thead>
            {this.renderTable()}
         </table>
      );
   }
}
const mapStateToProps = (rootReducer) => {
   return {
      userInfor: rootReducer.datVePhimReducer.userInfor,
      selectedSeats: rootReducer.datVePhimReducer.selectedSeats,
   };
};

const ComponentTable = connect(mapStateToProps)(Table);

export default ComponentTable;
