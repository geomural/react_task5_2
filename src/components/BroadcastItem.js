import React from 'react'
import PropTypes from 'prop-types'
import broadcastImg from '../img/broadcast.jpg';

//Одна строка в блоке Эфир
function BroadcastItem(props) {
    const {name, source} = props;
    return(
        <div className="inlineDiv">
            <img src={broadcastImg} />
            <p> {name} </p>
            <p className="grey"> {source} </p>
        </div>
    )
}
BroadcastItem.propTypes = {
    name: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
}

export default BroadcastItem;