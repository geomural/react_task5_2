import React from 'react'
import PropTypes from 'prop-types'

//Одна строка раздела Посещаемое
function VisitedSection(props) {
    const {section, info} = props
    return(
        <div className="inlineDiv">
            <b> {section} </b>
            <p> - {info}</p>            
        </div>
    )
}
VisitedSection.propTypes = {
    section: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
}
export default VisitedSection;