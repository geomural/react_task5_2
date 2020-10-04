import React from 'react'
import PropTypes from 'prop-types'

//Строка с отображаемой программой в телепрограмме
function TVProgram(props) {
    const {time, name, channel} = props;
    return(
        <div id="TVProgram">
            <p> {time} </p>
            <p> {name} </p>
            <p className="grey"> {channel} </p>
        </div>
    )
}
TVProgram.propTypes = {
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired
}
export default TVProgram;