import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Gan.css';


const Gan = ({gan, handleAddToCart}) => {
    const {name, price, img, bullet, capacity, action} = gan;

    return (
        <div className='col-lg-4 col-md-6 col-10 d-block m-auto m-md-0 '>
           <div className='gan-box'>
             <img src={img} alt="" />
             <h3>{name}</h3>
             <p>Bullet : {bullet}</p>
             <p>Capacity: {capacity}</p>
             <p>Action: {action}</p>
             <div className='d-flex align-items-center '>
                 <FontAwesomeIcon className='shop-Icon' onClick={() => handleAddToCart(gan)} icon={faShoppingCart}/>
                 <h2>${price}</h2>
             </div>
           </div>
        </div>
    );
};

export default Gan;