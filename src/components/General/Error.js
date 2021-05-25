import React from 'react';
import Error404 from '../../assest/image/404.svg';
import '../styles/Error.css'

const Error = (props) => (
    <div className='container'>
        <div className='col'>
            <h2>{props.message}</h2>
        </div>
        <div className='col'>
            <img src={Error404} alt={props.message} />
        </div>
    </div>
)
export default Error;