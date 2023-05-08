import React, { memo } from 'react';
import { CarouselItemsContext } from '../../App';
import "./home.css";
function MainContent() {
    return (
        <div className='mainContent col-lg-8'>
            <div className='myContainer'>
                <div className='mainContent__items'>
                    <CarouselItemsContext.Consumer>
                        { (items) => {// step one = done!
                                return(
                                    items.map((data) =>{//step tow = done!
                                        return(
                                            <div className='mainContent__item' key={data.id}>
                                                <div className='mainContent__item__img bg-img' style={{backgroundImage: `url(${data.img})`}}></div>
                                                <div className='mainContent__item__info'>
                                                    <div className='mainContent__item__info__header'>
                                                        <h4 className='mainContent__item__info__header__cat uppercase'>{data.category}</h4>
                                                        <h4 className='mainContent__item__info__title capitalize'>{data.title}</h4>
                                                        <ul className='menu'>
                                                            <li><a href='#'>{data.details.wroteBy}</a></li>
                                                            <li><a href='#'>{data.details.date}</a></li>
                                                            <li><a href='#'>{data.details.qtyComments}</a></li>
                                                        </ul>
                                                    </div>
                                                    <hr/>
                                                    <div className='mainContent__item__info__body'>
                                                        <p className='mainContent__item__info__body__desc'>{data.desc}</p>
                                                    </div>
                                                    <hr/>
                                                    <div className='mainContent__item__info__footer'>
                                                        <p className='mainContent__item__info__footer__icons'><i className="fa fa-tags" aria-hidden="true"></i>{data.tags}</p>
                                                        <p className='mainContent__item__info__footer__icons'><i className="fa fa-share-alt capitalize" aria-hidden="true"></i>facebook , twiter , vk</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        )
                                    })
                                );
                            }
                        }
                    </CarouselItemsContext.Consumer>
                </div>
                <button className='mainContent__btn uppercase'>view all posts</button>
            </div>
        </div>
    )
}
export default memo(MainContent);