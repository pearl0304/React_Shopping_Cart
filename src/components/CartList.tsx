import React from "react";
import {numberFormat} from "../common";
import {CartListWrap} from "../styles/cartList.styled";
import {ShoppingCartItem} from "../interfaces/item.interface";
import {CartItem} from "./CartItem";


type CartList = {
    cartItem: ShoppingCartItem[] | null
    addToCart: (item: ShoppingCartItem) => void
    removeFromCart: (id: number) => void
}

export const CartList = ({cartItem, addToCart, removeFromCart}: CartList) => {
    const totalPrice = (items: ShoppingCartItem[]) => {
        return items?.reduce((count, item) => count + item.amount * item.price, 0);
    }

    const hidden = cartItem?.length === 0 ? 'hidden' : "";


    return <CartListWrap>
        <div className={'title'}>
            <h3>Your Shopping Cart</h3>
        </div>
        <div className={hidden}>
            {cartItem?.map((item) => (
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
            ))}
            <div className={'price'}>
                <span>
                    TOTAL : <strong>{numberFormat(totalPrice(cartItem?  cartItem : []))}원</strong>
                </span>
            </div>
        </div>
    </CartListWrap>
}