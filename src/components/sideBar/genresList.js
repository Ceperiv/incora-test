import React from 'react';

function GenresList({genre, showsInfo}) {
    let chosenGenreId = ''

    const getRecommendationByGenre = () => {
        const res = showsInfo.filter(value =>
            value.genreId === genre.id)[(Math.floor(Math.random() * showsInfo.length))]
        getMostViewedShowsOfGenre(genre.id, (Math.floor(Math.random() * 10)))
        return res
    }

    const recommendationByGenre = (data) => {
        chosenGenreId = data.target.id
        getRecommendationByGenre(chosenGenreId)
    }

    const getMostViewedShowsOfGenre = (genreId, index) => {
        console.log(genreId)
        console.log(index)
        const res = showsInfo.filter(value => value.genreId === genreId)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
        if (res && index) {
            return res[index]
        } else if (res) {
            return res
        } else {
            return 'there are no movies in this genre'
        }
    }

    return (
        <ul>
            <button onClick={recommendationByGenre}>RecommendationByGenre</button>
            <li>
                <button onClick={getMostViewedShowsOfGenre} id={genre.id}>{genre.name}</button>
            </li>
        </ul>
    );
}

export {GenresList};