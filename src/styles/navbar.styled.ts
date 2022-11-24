import {styled} from "@mui/material";

export const NavWrap = styled("div")`
  width: 100%;
  height: 50px;
  background-color: #eee;
  color: #aaa;

  .nav-ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  }
  
  .nav-ul li {
    text-align: center;
    width: 12%;
    cursor: pointer;
  }

  .selected {
    color: black;
`;
