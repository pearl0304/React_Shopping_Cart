import {styled} from "@mui/material";

export const HeaderWrap = styled("div")`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  cursor: pointer;
  background-color: white;

  .header-left {
    display: flex;
    align-items: center;
  }

  .header-left div:first-child {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    text-align: center;
  }

  .header-left .logo {
    font-weight: 600;
    font-size: 20px;
  }

  .header-left div:first-child p {
    padding: 2px;
  }

  .header-left div,
  .header-right div {
    margin-left: 20px;
    margin-right: 10px;
  }

  .header-right {
    display: flex;
    align-items: center;
  }

  .count_badge {
    position: absolute;
    right: 65px;
    top: 45px;
    color: white;
  }`;
