import React from 'react'
import PropTypes from 'prop-types'
import VisitedSection from './VisitedSection'

//Посещаемое
function VisitedSections(props) {
    return(
        <>
            <h3> Посещаемое </h3>
            <VisitedSection section="Недвижимость" info="о сталинках" />
            <VisitedSection section="Маркет" info="люстры и светильники" />
            <VisitedSection section="Авто.ру" info="привод 4х4 до 500 000" />
        </>
    )
}

export default VisitedSections;