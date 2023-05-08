import React, { Fragment, memo } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import HeadSections from '../headSections/HeadSections';
import "./contact.css";
function Contact() {
    return (
        <Fragment>
            <Header />
            <HeadSections title="contact us" desc="let's stay in touch!" />
            <div className='contact__content pd-y-60'>
                <div className='myContainer'>
                    <div className='contact__content__items row'>
                        <div className='contact__content__mainContent col-lg-8'>
                            <form action="" className="contact__content__mainContent__form" method="GET">
                                <h3 className="contact__content__mainContent__form__title uppercase">send us a message</h3>
                                <hr />
                                <div className='contact__content__mainContent__form__half'>
                                    <input type="text" name="name" className="contact__content__mainContent__form__half__input" placeholder="Name" />
                                    <input type="email" name="email" className="contact__content__mainContent__form__half__input" placeholder="Email" />
                                </div>
                                <input type="text" name="subject" className="contact__content__mainContent__input" placeholder="SUBJECT" />
                                <textarea name="text-area" rows="10" className="contact__content__mainContent__form__message" placeholder="Message..."></textarea>
                                <button type="submit" className="contact__content__mainContent__form__btn pointer capitalize opacityHover">send message</button>
                            </form>
                        </div>
                        <div className='sidebar col-lg-4'>
                            <div className='sidebarDom'>
                                <div className='sidebar__contentDom'>
                                    <h3 className='sidebar__contentDom uppercase'>contact information</h3>
                                    <hr />
                                    <ul className='sidebar__contentDom__list'>
                                        <li >
                                            <h4 className='sidebar__contentDom__list__date'>090-484-8080</h4>
                                            <p className='sidebar__contentDom__list__title uppercase'>phone number</p>
                                        </li>
                                        <li >
                                            <h4 className='sidebar__contentDom__list__date'>info@company.com</h4>
                                            <p className='sidebar__contentDom__list__title uppercase'>email address</p>
                                        </li>
                                        <li >
                                            <h4 className='sidebar__contentDom__list__date'>123 Aenean id posuere dui, Praesent laoreet 10660</h4>
                                            <p className='sidebar__contentDom__list__title uppercase'>street address</p>
                                        </li>
                                    </ul>
                                </div>               
                            </div>
                        </div>
                    </div>
                    <div className='contact__content__map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17919.660152640372!2d49.28652441283486!3d55.84605182516038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415eb47ef2fcaa45%3A0x8bb41a64fd00d1a7!2sChebaksa%2C%20Republic%20of%20Tatarstan!5e0!3m2!1sen!2sru!4v1675687529782!5m2!1sen!2sru" width={"100%"} height={"500"} style={{border: '0',marginTop: '30px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
export default  memo(Contact);