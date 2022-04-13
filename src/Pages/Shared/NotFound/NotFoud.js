import React from 'react';
import lazyCat from '../../../images/lazy-cat-404.jpg'

const NotFoud = () => {
    return (
        <div>
            <h3 className='text-danger text-center m-3'>Mechanic is Sleeping</h3>
            <img className='w-100' src={lazyCat} alt="" />
        </div>
    );
};

export default NotFoud;