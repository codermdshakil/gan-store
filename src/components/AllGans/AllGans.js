import React, { useEffect, useState } from 'react';
import Gan from '../Gan/Gan';
import './AllGans.css';


const AllGans = ({addToCart}) => {
    const [gans, setGans] = useState([]);

    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGans(data))
    },[])

    return (
        <div className='row py-5 all-container'>
            {
                gans.map(gan => <Gan gan={gan} addToCart={addToCart} key={gan.id}></Gan>)
            }
        </div>
    );
};

export default AllGans;