import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

import riaImg from '../img/ria.png'
import notRiaImg from '../img/notRio.png'

//Раздел с новостями и датой
function NewsGroup(props) {
    return(        
        <div id="newsGroup">
            <div id="newsTabsNames">
                <p className="activeNewsTab"> Сейчас в СМИ</p>
                <p className="newsTab"> в Германии</p>
                <p className="newsTab"> Рекомендуем</p>
                <p id="dateTime"> {new Date(2020, 7, 31, 2, 42).toLocaleString()}</p>
            </div>
            <News imgSrc={riaImg} newsText="Путин упростил получение автомобильных номеров" />
            <News imgSrc={riaImg} newsText="В команде Зеленского раскрыли план реформ на Украине" />
            <News imgSrc={notRiaImg} newsText="Турпомощь прокомментировала ситуцию в Анталье" />
            <News imgSrc={riaImg} newsText="Суд закрыл дело Демпартии США против РФ" />
            <News imgSrc={notRiaImg} newsText="На Украине призвали создать ракеты для удара по Москве" />
        </div>
    )
}

export default NewsGroup;