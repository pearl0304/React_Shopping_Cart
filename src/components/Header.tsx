import React, {useState} from "react";

import {CartList} from "./CartList";

import {ShoppingCartItem} from "../interfaces/item.interface";

import {HeaderWrap} from "../styles/header.styled,ts";
import {Drawer} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import Badge from "@mui/material/Badge";

type HeaderType = {
    cartItem: ShoppingCartItem[] | null
    addToCart: (item: ShoppingCartItem) => void
    removeFromCart: (id: number) => void
    getTotalItem: (items: any) => any
}

export const Header = ({cartItem, addToCart, removeFromCart, getTotalItem}: HeaderType) => {
    const [cartOpen, setCartOpen] = useState<boolean>(false);

    return <HeaderWrap>
        <Drawer anchor={'right'} open={cartOpen} onClose={() => setCartOpen(false)}>
            <CartList cartItem={cartItem} addToCart={addToCart} removeFromCart={removeFromCart} />
        </Drawer>
        <div className={'header-left'}>
            <div>
                <p>R</p>
            </div>
            <div className={'logo'}>
                RINE FRIENDS
            </div>
        </div>
        <div className={'header-right'}>
            <div>
                <SearchIcon/>
            </div>
            <div onClick={() => setCartOpen(true)}>
                <Badge className={'count_badge'} badgeContent={getTotalItem(cartItem)} color={'error'}></Badge>
                <ShoppingBasketOutlinedIcon/>
            </div>
            <div>
                <ViewHeadlineIcon/>
            </div>
        </div>
    </HeaderWrap>
}