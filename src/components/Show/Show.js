import React, {useEffect, useState} from 'react';

import {genresService} from "../../services";
import {Movie} from "../ShowInfo/Movie";
import {Episode} from "../ShowInfo/Episode";
import {Series} from "../ShowInfo/Series";

function Show({showInfo, episode, series}) {
    const {name, genreId, releaseDate} = showInfo
    const [showGenre, setShowGenre] = useState('unknown');

    useEffect(() => {
        genresService().then(({data}) => data.id === genreId ? setShowGenre(data.genre) : null)
    }, [genreId])

    return (
        <div className={'ShowInfo'}>
            <h2>Name - {name ? name : 'unknown'}</h2>
            <h3>Genre - {showGenre}</h3>
            <h4>Release Date - {releaseDate ? releaseDate : 'unknown'}</h4>
            <Movie key={showInfo.id} showInfo={showInfo}/>
            <Episode key={showInfo.id} showInfo={showInfo} episode={episode}/>
            <Series key={showInfo.id} showInfo={showInfo} series={series}/>
        </div>
    );
}

export {Show};