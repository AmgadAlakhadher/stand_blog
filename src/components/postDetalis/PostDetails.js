import React, { Fragment, memo } from 'react'
import Ads from '../ads_section/Ads'
import Header from '../header/Header'
import HeadSections from '../headSections/HeadSections'
import Sidebar from '../home_pg/Sidebar'

function PostDetails() {
  return (
    <Fragment>
      <Header />
      <HeadSections title="recent posts" desc="our recent blog entries" />
      <Ads />
      <div className='post__content pd-y-60'>
        <div className='myContainer'>
            <div className='post__content__items row'>
              <div className='mineContent col-lg-8'></div>
              <Sidebar />
            </div>
        </div>
      </div>
    </Fragment>
  )
}
export default memo(PostDetails)
