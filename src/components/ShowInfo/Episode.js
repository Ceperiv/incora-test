import React from 'react';

function Episode({showInfo, episode}) {
    const submit = (episodeName) => {
        return episode = episodeName
    }

    return (
        <div className={'Episode'}>
            <label htmlFor="Episode">Choose Episode:</label>
            <select id="Episode" name="Episode">
                <option onClick={submit} value={showInfo.episode.map(value => value.name)}>
                    {showInfo.episode.map(value => value.name)}</option>
            </select>
        </div>
    );
}

export {Episode};