import React, {useEffect, useState} from "react";
import {genresService, getShowsInfo} from "../services";
import {GenresList, Subscription} from "../components";

function UserPage() {

    const [showsInfo, setShowsInfo] = useState([]);
    useEffect(() => {
        getShowsInfo().then(({data}) => setShowsInfo(data))
    }, [])

    let currentYear = new Date().getFullYear()

    const getRecommendationTrending = () => {
        const res = showsInfo[Math.floor(Math.random() * showsInfo.length)]
        getMostViewedShowsOfYear(Math.floor(Math.random() * 10))
        return res
    }

    const getMostViewedShowsOfYear = (index) => {
        const res = showsInfo.filter(value => value.releaseDate === currentYear)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
        console.log(index)
        if (typeof index === 'number') {
            return res[index]
        } else return res

    }
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        genresService().then(({data}) => setGenres(data.genres))
    }, [])

    return (
        <div className={'UserPage'}>
            <Subscription showsInfo={showsInfo} genres={genres}/>

            <ul>
                <li>
                    <button onClick={getRecommendationTrending}>Recommendation Trending</button>
                </li>
                <li>
                    <button onClick={getMostViewedShowsOfYear}>Most Viewed Shows Of Year</button>
                </li>
            </ul>

            {genres.map(genre => <GenresList key={genre.id} genre={genre} showsInfo={showsInfo}/>)}
        </div>

    );
}

export {UserPage};