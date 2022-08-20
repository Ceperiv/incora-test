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
            <h3><i>keep calm:)</i></h3>
            <iframe src="https://embed.api.video/vod/vi47PvFcvP2I9fyU6niDKIlb" width="300px" height="100%"
                    frameBorder="0" scrolling="no" allowFullScreen="true">keep clam
            </iframe>
        </div>
    );
}

export {StreamingService};