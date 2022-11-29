import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// PAGES
import {Main} from "../pages/main";
import {Home} from "../pages/Home";

// COMPONENTS
import {Navbar} from "../components/Navbar";
import {Header} from "../components/Header";

// INTERFACES
import {MenuListInterface, ShoppingCartItem} from "../interfaces/item.interface";



type AppRoutesType = {
    menuList: MenuListInterface[] | null
    category: string[] | null
    cartItem: ShoppingCartItem[] | null
    addToCart: (item: ShoppingCartItem) => void
    removeFromCart: (id: number) => void
    getTotalItem: (items: any) => any
}

export const AppRouter = ({menuList, category, cartItem, addToCart, removeFromCart, getTotalItem}: AppRoutesType) => {
    return <>
        <BrowserRouter>
            <Header cartItem={cartItem} addToCart={addToCart} removeFromCart={removeFromCart} getTotalItem={getTotalItem}/>
            <Navbar category={category}/>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/:category'} element={<Main menuList={menuList} addToCart={addToCart}/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
}