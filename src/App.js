import React from 'react'
import TabsBar from './components/TabsBar.jsx';

import './App.css';

const list = [{ text: '12' }, {text: '1122'}]

const App = () => (
    <div>
        <TabsBar
            list={list}
            color={''}
            selectedColor={''}
            backgroundColor={''}
            />
    </div>
);

export default App