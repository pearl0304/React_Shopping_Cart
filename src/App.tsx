import React, {useState} from 'react';
import {database} from "./database/products";

import {AppRouter} from "./routers/AppRoutes";

import './App.css'

// SET CATEGORY
const arr = database.map((item) => {
    return item.category
});
arr.push('ALL');
const category = Array.from(new Set(arr)).sort();

const App = () => {
    return (
        <>
            <AppRouter menuList={database} category={category}/>
        </>


    );
}

export default App;