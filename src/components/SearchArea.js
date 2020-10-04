import React from 'react'
import PropTypes from 'prop-types'

//Блок с поиском
function SearchArea(props) {
    return(
        <div id="searchArea">
            <input type="text"/>
            <button id="search">Найти</button>
            <p> Найдется всё. Например, <span> фаза луны сегодня </span> </p>
        </div>
    )
}

export default SearchArea;