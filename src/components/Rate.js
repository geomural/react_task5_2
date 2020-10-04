import React from 'react'
import PropTypes from 'prop-types'

//Строка с одной котировкой
function Rate(props) {
    const {name, value, diff} = props;
    return(
        <div className="rate">
            <p className="rateName">{name}</p>
            <p className="rateValue">{value}</p>
            <p className="rateDiff">{diff}</p>
        </div>
    )
}
Rate.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    diff: PropTypes.string.isRequired
}
export default Rate;