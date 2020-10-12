import React from 'react'
import PropTypes from 'prop-types'
import InfoBlock from './InfoBlock'

//Посещаемое, Телепрограмма, Эфир
function InfoBlocks(props) {
    const {title, infoBlockData, extraClass, broadcastImg} = props;

    let data = infoBlockData.map(element => <InfoBlock key={element.leftText} broadcastImg={broadcastImg} extraClass={extraClass} leftText={element.leftText} rightText={element.rightText} />);
    return(
        <>
            <h3> {title} </h3>
            {props.children}
            {data}
        </>
    )
}

InfoBlocks.propTypes = {
    title: PropTypes.string.isRequired,
    infoBlockData: PropTypes.array.isRequired,
    extraClass: PropTypes.string,
    broadcastImg: PropTypes.string
}

export default InfoBlocks;