import React from 'react'
import PropTypes from 'prop-types'
import NewsGroup from './NewsGroup';
import RatesGroup from './RatesGroup';
import TopAdBlock from './TopAdBlock';

//Все, что выше поисковой строки (верхняя часть страницы)
function TopPane(props) {
    return(
        <div id="topPane">
            <table>
                <tbody>
                <tr>
                    <td className="topNewsBlock">
                        <NewsGroup />
                        <RatesGroup />
                    </td>
                    <td>
                        <TopAdBlock />
                    </td>
                </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default TopPane;