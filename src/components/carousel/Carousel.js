import React , { memo } from 'react';
import {CarouselItemsContext} from "../../App";
import "./carousel.css";

function Carousel() {
    return (
        <div className='carousel'>
            <div className='carousel'>
                <CarouselItemsContext.Consumer>
                    { (carouselItems) => {// step one = done!
                        return( <div className='carousel__items row'>
                        {
                            carouselItems.map((data) =>{//step tow = done!
                                return(
                                    <div className='carousel__item col-lg-4 col-sm-12' key={data.id}>
                                        <div className='carousel__item__content bg-img' style={{backgroundImage: `url(${data.img})`}}>
                                            <div className='carousel__item__content__info capitalize'>
                                                <h3 className='carsouel__content__item__content__info__title uppercase'>{data.title}</h3>
                                                <p className='carsouel__content__item__content__info__desc'>{data.desc.slice(0,50)}...</p>
                                                <ul className='menu'>
                                                    <li><a href='#'>{data.details.wroteBy}</a></li>
                                                    <li><a href='#'>{data.details.date}</a></li>
                                                    <li><a href='#'>{data.details.qtyComments}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> 
                                )
                            })
                        }
                        </div>
                    );}}
                </CarouselItemsContext.Consumer>
                </div>
                <div className='carousel__arrows'>
                    <i className="fa fa-chevron-left carousel__arrows__left" aria-hidden="true"></i>
                    <i className="fa fa-chevron-right carousel__arrows__right" aria-hidden="true"></i>
                </div>
            </div>
    )
}
export default  memo(Carousel);