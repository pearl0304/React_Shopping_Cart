import {styled} from "@mui/material";

export const CartItemWrap = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #eee;
  margin-bottom: 40px;

  .thumb {
    width: 150px;
    height: 200px;
    background-color: aliceblue;
    margin-bottom: 30px;
  }

  .thumb img {
    width: 100%;
    height: 100%;
  }

  .info {
    margin-bottom: 20px;
  }

  .info p {
    margin-bottom: 5px;
  }

  .info p:first-child {
    font-weight: bold;
  }

  .buttons {
    margin-bottom: 20px;
  }

  .buttons Button {
    margin: 0 10px 0px 10px;
    background-color: lightpink;
  }
`