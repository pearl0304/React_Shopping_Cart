import React from "react";
import {ShoppingCartItem} from "../interfaces/item.interface";
import Swal from "sweetalert2";
import {numberFormat} from "../common";

// CSS
import {Button} from "@mui/material";
import {ItemWrap} from "../styles/item.styled,ts";



type ItemType = {
    item: ShoppingCartItem
    addToCart: (item: ShoppingCartItem) => void
}


export const Item = ({item,addToCart}: ItemType) => {
    const onClick = (clickedItem : ShoppingCartItem) => {
        Swal.fire({
            title:"장바구니에 추가하시겠습니까?",
            showDenyButton:true,
            confirmButtonText: "ADD",
            denyButtonText:"CANCLE"
        }).then((result) => {
            if(result.isConfirmed) {
                addToCart(clickedItem)
                Swal.fire('추가했습니다.', "", "success");
            } else {
                Swal.fire('취소했습니다.', "", "error");
            }
        })
    }


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
                    onClick={() => {
                        onClick(item);
                    }}
                >
                    Add To Cart
                </Button>
            </div>
        </div>
    </ItemWrap>
}