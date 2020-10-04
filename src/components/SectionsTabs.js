import React from 'react'
import PropTypes from 'prop-types'

//Строка с разделами
function SectionsTab(props) {
    return(
        <div id="sectionsTabs">
            <p> <a href="#">Видео</a> </p>
            <p> <a href="#">Картинки</a> </p>
            <p> <a href="#">Новости</a> </p>
            <p> <a href="#">Карты</a> </p>
            <p> <a href="#">Маркет</a> </p>
            <p> <a href="#">Переводчик</a> </p>
            <p> <a href="#">Эфир</a> </p>
            <p> <a href="#">ещё</a> </p>
        </div>
    )
}

export default SectionsTab;