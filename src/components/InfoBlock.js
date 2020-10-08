import React from 'react'
import PropTypes from 'prop-types'

//Информационный блок: Телепрограмма, Посещаемое, Эфир
function InfoBlock(props) {
    const {leftText, rightText, extraClass} = props;
    return(
        <div id="InfoBlock" className={`inlineDiv ${extraClass}`}>
            {props.children}
            <p className="leftTextInfoBlock"> {leftText} </p>
            <p className="rightTextInfoBlock"> {rightText} </p>
        </div>
    )
}
InfoBlock.propTypes = {
    leftText: PropTypes.string.isRequired,
    rightText: PropTypes.string.isRequired
}
export default InfoBlock;