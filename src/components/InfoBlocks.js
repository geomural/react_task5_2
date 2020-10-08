import React from 'react'
import PropTypes from 'prop-types'
import InfoBlock from './InfoBlock'

//Посещаемое
function InfoBlocks(props) {
    const {header} = props
    return(
        <>
            <h3> {header} </h3>
            <InfoBlock leftText="Недвижимость" rightText=" - о сталинках" />
            <InfoBlock leftText="Маркет" rightText=" - люстры и светильники" />
            <InfoBlock leftText="Авто.ру" rightText=" - привод 4х4 до 500 000" />
        </>
    )
}

export default InfoBlocks;