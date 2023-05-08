import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { CarouselItemsContext } from '../../App';
import "./home.css";
function Sidebar() {
    return (
        <div className='sidebar col-lg-4'>
            <CarouselItemsContext.Consumer>
                { (data) => {// step one = done!
                        return(
                            <div className='sidebarDom'>
                                <div className='searchInputDom'><input type="text" className="searchInputDom__input" name="search" placeholder="TYPE TO SEARCH"/></div>
                                <div className='recentPostsDom'>
                                    <h3 className='recentPostsDom uppercase'>recent posts</h3>
                                    <ul className='recentPosts__list'>
                                        {data.map((item,index)=> {
                                            if(index < 10){
                                                return(
                                                    <li key={item.id}>
                                                        <Link className='recentPosts__list__link' href={"/"+item.id} >{item.title}</Link>
                                                        <p className='recentPosts__list__date'>{item.details.date}</p>
                                                    </li>
                                                );
                                            }
                                        })}
                                    </ul>
                                </div>
                                <div className='categories'>
                                    <h3 className='categoriesDom uppercase'>categories</h3>
                                    <ul>
                                        {data.map((item,index)=> {
                                            if(index < 10){
                                                return(
                                                    <li key={item.id}><Link className='categories__list__link' href={"/"+item.id} >- {item.category}</Link>
                                                    </li>
                                                );
                                            }
                                        })}
                                    </ul>
                                </div>
                                <div className='tags'>
                                    <h3 className='tagsDom uppercase'>tag cloud</h3>
                                    <div className='tags__btns'>
                                        {data.map((item,index)=> {
                                            if(index < 10){
                                                return(
                                                    <Link className='tags__btns__link' href={"/"+item.id} key={item.id}>
                                                        <button className='tags__btns__link__btn'>{item.tags}</button>     
                                                    </Link>
                                                    
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            </CarouselItemsContext.Consumer>
        </div>
    )
}
export default memo(Sidebar);