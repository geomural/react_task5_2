import React from 'react'
import PropTypes from 'prop-types'
import BroadcastItem from './BroadcastItem'

//Блок Эфир
function Broadcast(props) {
    return(
        <>
            <h3>Эфир</h3>
            <BroadcastItem name="Управление как искусство" source="Успех"/>
            <BroadcastItem name="Ночь. Мир в это время" source="earthTV" />
            <BroadcastItem name="Андрей Возн..." source="Совершенно секретно" />
        </>
    )
}

export default Broadcast;