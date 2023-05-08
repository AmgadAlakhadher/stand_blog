import React, { memo } from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className='footer pd-y-60'>
            <div className='myContainer'>
                <ul className='menu capitalize'>
                    <li><a href='https://www.youtube.com/@UniqueCoderzAcademy' target="_blank">UniqueCoderzAcademy</a></li>
                    <li><a href='#' target="_blank">google</a></li>
                    <li><a href='#' target="_blank">instagram</a></li>
                    <li><a href='#' target="_blank">telegram</a></li>
                    <li><a href='#' target="_blank">vk contact</a></li>
                </ul><br/>
                <hr />
                <p className='footer__copyright'>COPYRIGHT 2020 STAND BLOG CO. | DESIGN: <a href="#" className='footer__copyright__link' target="_blank">link</a></p>
            </div>
        </footer> //footer
    )
}
export default memo(Footer);