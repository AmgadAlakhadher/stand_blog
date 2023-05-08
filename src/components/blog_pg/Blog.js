import React, { Fragment, memo } from 'react'
import Header from '../header/Header'
import HeadSections from '../headSections/HeadSections'

function Blog() {
    return (
        <Fragment>
            <Header />
            <HeadSections title="recent posts" desc="our recent blog entries" />
        </Fragment>
    )
}
export default  memo(Blog)