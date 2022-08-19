import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {StreamingService} from "../StreamingService/StreamingService";
import {UserPage} from "../../pages";

function Routers() {
    return (
        <div className={'Routers'}>
            <Routes>
                <Route index element={<Navigate to="/User" replace/>}/>
                <Route path={'/User'} element={<UserPage/>}/>
                <Route path={'/Subscription'} element={<StreamingService/>}/>
            </Routes>
        </div>
    );
}

export {Routers};