import React from 'react'
import PropTypes from 'prop-types'
import InfoBlock from './InfoBlock'

//Посещаемое
function VisitedSections(props) {
    return(
        <>
            <h3> Посещаемое </h3>
            <InfoBlock extraClass="visitedBlock" leftText="Недвижимость" rightText=" - о сталинках" />
            <InfoBlock extraClass="visitedBlock" leftText="Маркет" rightText=" - люстры и светильники" />
            <InfoBlock extraClass="visitedBlock" leftText="Авто.ру" rightText=" - привод 4х4 до 500 000" />
        </>
    )
}

export default VisitedSections;