import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Item} from "../components/Item";


import {MenuListInterface} from "../interfaces/item.interface";
import {MainWrap} from "../styles/main.styled";
import {Grid} from "@mui/material";
import {Navbar} from "../components/Navbar";

type MainType = {
    menuList: MenuListInterface[] | null
}

export const Main = ({menuList}: MainType) => {
    const {category} = useParams();
    let list ;
    if (category === 'ALL') {
        list = menuList
    } else {
        list = menuList?.filter((item:any) => (item.category === category));
    }

    return <MainWrap>
        <Grid container item spacing={5}>
            {list?.map((item: any) => (
                <Grid item key={item.id} xs={12} sm={3}>
                    <Item item={item}></Item>
                </Grid>
            ))}
        </Grid>
    </MainWrap>
}