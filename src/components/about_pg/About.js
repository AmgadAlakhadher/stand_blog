import React, { Fragment } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import HeadSections from '../headSections/HeadSections';
import img from "../../assest/images/aboutPage/about-us.jpg";
import "./about.css";

export default function About() {
    return (
        <Fragment>
            <Header />
            <HeadSections title="about us" desc="more about us!" />
            <div className='about pd-y-60'>
                <div className='myContainer'>
                    <div className='about__content section1'>
                        <div className='bg-img' style={{background: `url(${img})`,width: '100%',height:'530px'}}></div>
                        <p className='about__content__desc'>Please tell your friends about TemplateMo website. Thank you. You can browse through different categories of templates such as business, portfolio, restaurant, etc. Pellentesque quis luctus libero. Maecenas pretium molestie erat, ac tincidunt leo gravida ac. Cras ullamcorper eu ipsum eu sollicitudin. Fusce vitae commodo turpis. Integer ullamcorper purus nec justo mollis fermentum. Nunc imperdiet erat nec lacinia laoreet.</p>
                        <p className='about__content__desc'>Maecenas faucibus ullamcorper felis vitae finibus. Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo. Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula eros orci vel neque.</p>
                    </div>
                    <hr />
                    <div className='about__content section2'>
                        <div className='row'>
                            <div className='about__content__section2 col-md-6 col-sm-12'>
                                <h4 className='about__content__title'>Two-One Donec porttitor augue</h4>
                                <p className='about__content__desc'>Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                            </div>
                            <div className='about__content__section2 col-md-6 col-sm-12'>
                                <h4 className='about__content__title'>Two-Two Donec porttitor augue</h4>
                                <p className='about__content__desc'>Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='about__content section3'>
                        <div className='row'>
                            <div className='about__content__section2 col-md-4 col-sm-12'>
                                <h4 className='about__content__title'>Two-One Donec porttitor augue</h4>
                                <p className='about__content__desc'>Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                            </div>
                            <div className='about__content__section2 col-md-4 col-sm-12'>
                                <h4 className='about__content__title'>Two-Two Donec porttitor augue</h4>
                                <p className='about__content__desc'>Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                            </div>
                            <div className='about__content__section2 col-md-4 col-sm-12'>
                                <h4 className='about__content__title'>Two-One Donec porttitor augue</h4>
                                <p className='about__content__desc'>Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='about__content section4'>
                        <div className='row'>
                            <div className='about__content__section2 col-md-3 col-sm-12'>
                                <h4 className='about__content__title'>Two-One Donec porttitor augue</h4>
                                <p className='about__content__desc'>Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                            </div>
                            <div className='about__content__section2 col-md-3 col-sm-12'>
                                <h4 className='about__content__title'>Two-Two Donec porttitor augue</h4>
                                <p className='about__content__desc'>Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                            </div>
                            <div className='about__content__section2 col-md-3 col-sm-12'>
                                <h4 className='about__content__title'>Two-One Donec porttitor augue</h4>
                                <p className='about__content__desc'>Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                            </div>
                            <div className='about__content__section2 col-md-3 col-sm-12'>
                                <h4 className='about__content__title'>Two-One Donec porttitor augue</h4>
                                <p className='about__content__desc'>Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='about__content__icons'>
                        <a href='#'><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href='#'><i class="fa fa-github" aria-hidden="true"></i></a>
                        <a href='#'><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href='#'><i class="fa fa-amazon" aria-hidden="true"></i></a>
                        <a href='#'><i class="fa fa-btc" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
