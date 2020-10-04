import React from 'react'
import PropTypes from 'prop-types'
import TVProgram from './TVprogram'

//Телепрограмма
function TVProgramBlock(props) {
    return(
        <div id="TVProgramBlock">
            <h3>Телепрограмма</h3>
            <button id="broadcastBtn">Эфир</button>
            <div style={{marginTop : "10px"}}>
                <TVProgram time="02:00" name="ТНТ.Best" channel="ТНТ International"/>
                <TVProgram time="02:15" name="Джинглики" channel="Карусель INT"/>
                <TVProgram time="02:25" name="Наедине со всеми" channel="Первый"/>
            </div>
        </div>
    )
}

export default TVProgramBlock;