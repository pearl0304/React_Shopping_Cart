import React from "react";
import {Link, NavLink} from "react-router-dom";
import {NavWrap} from "../styles/navbar.styled";

type NavbarType = {
    category: string[] | null

}

export const Navbar = ({category}: NavbarType) => {
    const renderLi = (cate: string, index: number) => {
        let key = `${cate}-${index}`
        return <Link style={{textDecoration: "none", color: "inherit"}}
                     to={`/${cate}`}>
            <li key={key}>{cate}</li>
        </Link>
    }


    return <NavWrap>
        <ul className="nav-ul">{category?.map((item, index: number) => renderLi(item, index))}</ul>
    </NavWrap>
}