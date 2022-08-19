import React, {useEffect, useState} from "react";

import {ViewsByShowNames} from "../ViewsByShowNames/ViewsByShowNames";
import {setWatchCount} from "../../services";

function Movie({showInfo}) {

    const source = showInfo.movieURL

    const [views, setViews] = useState(showInfo.views);
    let viewsCount = views

    const watch = () => {
        setViews(++showInfo.views)
    }

    useEffect(() => {
        viewsCount = setWatchCount(views)
    }, [views])

    return (
        <div className={'video'}>
            <iframe onClick={watch} title={showInfo.title} src={source} width="100%" height="100%"
                    frameBorder="0" scrolling="no" allowFullScreen="true">{showInfo.title}</iframe>
            <h4>Duration: {showInfo.duration}</h4>
            {<ViewsByShowNames key={showInfo.id} showInfo={showInfo}/>}
            {viewsCount}
        </div>
    );
}

export {Movie};