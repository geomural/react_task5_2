import React from 'react'
import PropTypes from 'prop-types'

//Информационный блок: Телепрограмма, Посещаемое, Эфир
function InfoBlock(props) {
    const {leftText, rightText, extraClass, broadcastImg} = props;
    return(
        <div id="InfoBlock" className={`inlineDiv ${extraClass}`}>
            <img src={broadcastImg} alt=""/>
            <p className="leftTextInfoBlock"> {leftText} </p>
            <p className="rightTextInfoBlock"> {rightText} </p>
        </div>
    )
}
InfoBlock.propTypes = {
    leftText: PropTypes.string.isRequired,
    rightText: PropTypes.string.isRequired,
    extraClass: PropTypes.string,
    broadcastImg: PropTypes.string
}
export default InfoBlock;