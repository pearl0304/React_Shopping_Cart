import React from "react";
import {ShoppingCartItem} from "../interfaces/item.interface";
import {numberFormat} from "../common";
import {CartItemWrap} from "../styles/cartItem.styled";
import { Button } from "@mui/material";

type CartItemType = {
    item: ShoppingCartItem
    addToCart: (item: ShoppingCartItem) => void
    removeFromCart: (id: number) => void
}

export const CartItem = ({item, addToCart, removeFromCart}: CartItemType) => {

    return <CartItemWrap>
        <div className="thumb">
            <img src={item.image} alt={item.title}></img>
        </div>
        <div className="info">
            <p>{item.title}</p>
            <p>Price : {numberFormat(item.price)}원</p>
            <p>Total : {numberFormat(item.amount * item.price)}원</p>
        </div>
        <div className="buttons">
            <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => {
                    removeFromCart(item.id);
                }}
            >
                -
            </Button>
            {item.amount}
            <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => {
                    addToCart(item);
                }}
            >
                +
            </Button>
        </div>
    </CartItemWrap>
}