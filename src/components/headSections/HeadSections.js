import React, { memo } from 'react';
import "./HeadSection.css";

function HeadSections(props) {
    return (
        <div className='headSection bg-img uppercase'>
            <div className='myContainer'>
                <h3 className='headSection__title'>{props.title}</h3>
                <p className='headSection__desc'>{props.desc}</p>
            </div>
        </div>
    )
}
export default memo(HeadSections);