import React from 'react'
import PropTypes from 'prop-types'
import rainImg from '../img/rainIcon.jpg';
//Погода
function Weather(props) {
    return(
        <div id="weather">
            <h3> Погода </h3>
            <table>
                <tbody>
                    <tr> 
                        <td>
                            <img id="imgWeather" src={rainImg} />
                        </td>
                        <td>
                            <p id="currentTemperature">+17°</p>
                        </td>
                        <td>
                            <p className="weatherInfo">Утром +17,</p>
                            <br/>
                            <p className="weatherInfo">днем +20</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Weather;