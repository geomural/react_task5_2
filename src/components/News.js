import React from 'react'
import PropTypes from 'prop-types'

//Строка с новостью
function News(props) {
    const {imgSrc, newsText } = props;
    return(
        <div className="news">
            <img className="imgNews" src={imgSrc} />
            <p className="textNews"> {newsText} </p>
        </div>
    )
}
News.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    newsText: PropTypes.string.isRequired
}
export default News;