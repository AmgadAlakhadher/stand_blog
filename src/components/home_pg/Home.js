import React, { Fragment, memo } from 'react';
import Ads from '../ads_section/Ads';
import Carousel from '../carousel/Carousel';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

function Home() {
    return (
        <Fragment>
            <Header />
            <Carousel />
            <Ads />
            <div className='home__content pd-y-60'>
                <div className='myContainer'>
                    <div className='home__content__items row'>
                        <MainContent />
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
export default memo(Home);