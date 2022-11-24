import {styled} from "@mui/material";

export const ItemWrap = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  .container {
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
  }

  .item-image {
    width: 300px;
    height: 330px;
    margin-bottom: 20px;
  }

  .item-info {
    margin-bottom: 10px;
    height: 100px;
  }

  .item-info h3 {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    bottom: 0;
  }




`;