import React, { Component } from 'react';
import Seats from '../Seats/Seats';
import '../BTDatVeXemPhim.scss';
import Form from '../Form/Form';
import Table from '../Table/Table';

export default class BTDatVeXemPhim extends Component {
   render() {
      return (
         <div className='container-fluid px-0'>
            <div className='overlay'></div>
            <img
               className='background-image'
               src='./bgmovie.jpg'
            />
            <div className='container-fluid sub-container'>
               <h1 className='text-center text-white pt-2'>
                  Movie Seat Selection
               </h1>
               <div className='row'>
                  <div className='col-8 text-center text-light'>
                     <h5>Screen This Way</h5>
                     <div className='screen w-100 mb-5'></div>

                     <div className='container'>
                        <Seats />
                     </div>
                  </div>
                  <Form />
                  <Table />
               </div>
            </div>
         </div>
      );
   }
}
