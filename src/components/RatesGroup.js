import React from 'react'
import PropTypes from 'prop-types'
import Rate from './Rate';

//Строка со всеми котировками
function RatesGroup(props) {
    return(
        <div id="ratesGroup">
            <Rate name="USD MOEX" value="63,52" diff="+0,09" />
            <Rate name="EUR MOEX" value="70,86" diff="+0,14" />
            <Rate name="НЕФТЬ" value="64,90" diff="+1,63%" />
            <p id="moreRates"> ... </p>
        </div>
    )
}

export default RatesGroup;