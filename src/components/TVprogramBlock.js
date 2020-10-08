import React from 'react'
import PropTypes from 'prop-types'
import InfoBlock from './InfoBlock'

//Телепрограмма
function TVProgramBlock(props) {
    return(
        <div id="TVProgramBlock">
            <h3>Телепрограмма</h3>
            <button id="broadcastBtn">Эфир</button>
            <div style={{marginTop : "10px"}}>
                <InfoBlock leftText="02:00 ТНТ.Best" rightText="ТНТ International"/>
                <InfoBlock leftText="02:15 Джинглики" rightText="Карусель INT"/>
                <InfoBlock leftText="02:25 Наедине со всеми" rightText="Первый"/>
            </div>
        </div>
    )
}

export default TVProgramBlock;