import React from 'react';
import google from '../../../images/google.png'
import fb from '../../../images/facebook.png'
import github from '../../../images/GitHub-Mark.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-info w-50 text-center d-block mx-auto mb-3'>
                    <img className='bg-white rounded' style={{width : '30px'}} src={google}alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 text-center d-block mx-auto mb-3'>
                    <img className='bg-white rounded' style={{width : '30px'}} src={fb}alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button className='btn btn-info w-50 text-center d-block mx-auto'>
                    <img className='bg-white rounded' style={{width : '30px'}} src={github}alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;