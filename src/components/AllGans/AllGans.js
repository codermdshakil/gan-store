import React, { useEffect, useState } from 'react';

const AllGans = () => {

    const [gans, setGans] = useState([]);

    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGans(data))
    },[])

    return (
        <div className='gans-container'>
            {
                gans.map(gan => console.log(gan))
            }
        </div>
    );
};

export default AllGans;