import React from 'react'
import PropTypes from 'prop-types'
import InfoBlock from './InfoBlock'
import broadcastImg from '../img/broadcast.jpg';

//Блок Эфир
function Broadcast(props) {
    return(
        <>
            <h3>Эфир</h3>
            <InfoBlock leftText="Управление как искусство" rightText="Успех"> 
                <img src={broadcastImg} alt=""/>
            </InfoBlock>
            <InfoBlock leftText="Ночь. Мир в это время" rightText="earthTV">
                <img src={broadcastImg} alt=""/>
            </InfoBlock>
            <InfoBlock leftText="Андрей Возн..." rightText="Совершенно секретно"> 
                <img src={broadcastImg} alt=""/>
            </InfoBlock>
        </>
    )
}

export default Broadcast;