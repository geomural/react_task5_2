import React from 'react'
import PropTypes from 'prop-types'
import SectionsTabs from './SectionsTabs'
import SearchArea from './SearchArea'
import mainAd from '../img/mainAd.jpg'
import Weather from './Weather'
import VisitedSections from './VisitedSections'
import Map from './Map'
import TVProgramBlock from './TVprogramBlock'
import Broadcast from './Broadcast'

//Центральная панель (все, что ниже котировок)
function MainPane(props) {
    return(
        <div id="mainPane">
            <SectionsTabs />
            <SearchArea />
            <img src={mainAd} alt=""/>
            <table id="mainPaneTable">
                <tbody>
                    <tr>
                        <td>
                            <Weather />
                            <VisitedSections />
                        </td>
                        <td>
                            <Map />
                            <TVProgramBlock />
                        </td>
                        <td>
                            <Broadcast />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MainPane;