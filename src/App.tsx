import React from 'react';
import './App.css';
import {Counter} from "./LocalStorage/LocalStorage";

function App() {
    return (
        <div className="App">
            <Counter title={'Counter and Redux'}/>
        </div>
    );
}

export default App;
