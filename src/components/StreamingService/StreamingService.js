import React, {useEffect, useState} from 'react';
import {Show} from "../Show/Show";
import {getShowsInfo} from "../../services";

function StreamingService() {
    const [showsInfo, setShowsInfo] = useState([]);
    const episode = ''
    const series = ''

    useEffect((episode, series) => {
        getShowsInfo(episode, series).then(({data}) => setShowsInfo(data))
    }, [episode, series])

    return (
        <div className={'StreamingService'}>
            {showsInfo.map(showInfo => <Show key={showInfo.id} showInfo={showInfo} episode={episode} series={series}/>)}
        </div>
    );
}

export {StreamingService};