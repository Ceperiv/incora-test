import React from 'react';

import './App.css';
import {MainPage} from "./pages";
import {Header} from "./components";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainPage/>
            <footer><p>all rights reserved</p></footer>
        </div>
    );
}

export default App;
