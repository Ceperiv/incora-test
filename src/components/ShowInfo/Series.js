import React from 'react';

function Series({showInfo, series}) {
    const submit = (seriesList) => {
        return series = seriesList
    }

    return (
        <div className={'Series'}>
            <label htmlFor="series">Choose Episode:</label>
            <select id="series" name="series">
                <option onClick={submit} value={showInfo.series.map(value => value.list.toString())}>
                    {showInfo.series.map(value => value.list)}</option>
            </select>
        </div>
    );
}

export {Series};