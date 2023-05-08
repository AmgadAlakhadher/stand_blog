import React, { memo } from 'react';
import img from "../../assest/images/adsImages/koran.jpg";
function Ads() {
    const ads__content = {
            backgroundImage: `url(${img})`,
            height: 140,
            position: 'relative',
            borderRadius: 10,
            textAlign: 'center',
            zIndex: -2
        };
        const ads__content__text = {
            color: 'var(--whiteColor)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            fontSize: '1.5rem'
        };
    return (
        <a className='ads' href='http://www.quranreading.com/blog/facts-about-the-quran-revelation/' style={{display:'block',marginTop: '60px'}} target='_blank'>
            <div className='myContainer' >
                <div className='ads__content bg-img' style={ads__content}>
                    <div className='overLay' style={{borderRadius: 10}}></div>
                    <p className='ads__content__text' style={ads__content__text}>what do you know about quran?</p>
                </div>
            </div>
        </a>
    )
}
export default memo(Ads);