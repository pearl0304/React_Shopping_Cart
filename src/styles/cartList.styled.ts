import {styled} from "@mui/material";

export const CartListWrap = styled('aside')`
  width: 300px;
  padding: 20px;

  .title {
    text-align: center;
    align-items: center;
    margin: 15px 10px 40px 10px;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
  }
  .close {
    margin-left: 20px;
    cursor: pointer;
  }

  .hidden {
    display: none;
  }

  .price {
    margin-top: 20px;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
  }
`;