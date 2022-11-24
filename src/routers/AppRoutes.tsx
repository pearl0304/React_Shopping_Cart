import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Main} from "../pages/main";
import {MenuListInterface} from "../interfaces/item.interface";
import {Navbar} from "../components/Navbar";
import {Home} from "../pages/Home";
import {Header} from "../components/Header";


type AppRoutesType = {
    menuList: MenuListInterface[] | null
    category: string[] | null
}

export const AppRouter = ({menuList, category}: AppRoutesType) => {
    return <>
        <BrowserRouter>
            <Header />
            <Navbar category={category}/>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/:category'} element={<Main menuList={menuList}/>}></Route>
            </Routes>
        </BrowserRouter>
    </>


}