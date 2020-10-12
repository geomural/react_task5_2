import React from 'react'
import PropTypes from 'prop-types'
import SectionsTabs from './SectionsTabs'
import SearchArea from './SearchArea'
import mainAd from '../img/mainAd.jpg'
import Weather from './Weather'
import Map from './Map'
import InfoBlocks from './InfoBlocks'
import broadcastImg from '../img/broadcast.jpg';

const visitedData = [{
    leftText: "Недвижимость",
    rightText: " - о сталинках"
},
{
    leftText: "Маркет",
    rightText: " - люстры и светильники"
},
{
    leftText: "Авто.ру",
    rightText: " - привод 4х4 до 500 000"
}
];

const TVprogramData = [
    {
        leftText: "02:00 ТНТ.Best",
        rightText: "ТНТ International"
    },
    {
        leftText: "02:15 Джинглики",
        rightText: "Карусель INT"
    },
    {
        leftText: "02:25 Наедине со всеми",
        rightText: "Первый"
    }
];

const broadcastData = [
    {
        leftText: "Управление как искусство",
        rightText: "Успех"
    },
    {
        leftText: "Ночь. Мир в это время",
        rightText: "earthTV"
    },
    {
        leftText: "Андрей Возн...",
        rightText: "Совершенно секретно"
    }
];

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
                            <InfoBlocks extraClass="visitedBlock" title="Посещаемое" infoBlockData={visitedData} />
                        </td>
                        <td>
                            <Map />
                            <InfoBlocks title="Телепрограмма" infoBlockData={TVprogramData}>
                                <button id="broadcastBtn">Эфир</button>
                            </InfoBlocks>
                        </td>
                        <td>
                            <InfoBlocks title="Эфир" infoBlockData={broadcastData} broadcastImg={broadcastImg}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MainPane;