import React from "react";
import {ShoppingCartItem} from "../interfaces/item.interface";
import {numberFormat} from "../common";

// CSS
import {Button} from "@mui/material";
import {ItemWrap} from "../styles/item.styled,ts";


type ItemType = {
    item: ShoppingCartItem
}


export const Item = ({item}: ItemType) => {
    return <ItemWrap>
        <div>
            <div className="container">
                <div className="item-image">
                    <img src={item.image} alt={item.title}/>
                </div>
                <div className="item-info">
                    <h3>{item.title}</h3>
                    <h3>{numberFormat(item.price)}원</h3>
                </div>
                <Button
                    // onClick={() => {
                    //     onClickButton(item);
                    // }}
                >
                    Add To Cart
                </Button>
            </div>
        </div>
    </ItemWrap>
}