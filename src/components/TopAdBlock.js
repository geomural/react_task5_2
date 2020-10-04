import React from 'react'
import PropTypes from 'prop-types'
import adImg from '../img/topAd.jpg'

//Блок с рекламой справа наверху
function TopAdBlock(props) {

    return(
        <div id="topAdBlock">
            <img src={adImg} />
            <p className="activeNewsTab">Работа над ошибками</p>
            <p>Смотрите на Яндексе и запоминайте</p>
        </div>
    )
}

export default TopAdBlock;