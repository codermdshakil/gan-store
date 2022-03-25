import React, { useEffect, useState } from 'react';
import Gan from '../Gan/Gan';

const AllGans = () => {

    const [gans, setGans] = useState([]);

    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGans(data))
    },[])

    return (
        <div className='row'>
            {
                gans.map(gan => <Gan gan={gan} key={gan.id}></Gan>)
            }
        </div>
    );
};

export default AllGans;