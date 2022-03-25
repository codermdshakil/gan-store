import React from 'react';
import './Gan.css';


const Gan = (props) => {

    const {name, price, img} = props.gan;
    return (
        <div className='col-lg-4 col-md-6 col-10 d-block m-auto  '>
           <div className='gan-box'>
             <img src={img} alt="" />
             <h2>{name}</h2>
             <h3>${price}</h3>
           </div>
        </div>
    );
};

export default Gan;