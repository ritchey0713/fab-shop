import styled from "@emotion/styled";

import Image from "./Image";
import Quantity from "./Quantity.component";

const ShopStyle = styled.div`
  padding: 10px 20px 40px 20px;
`;

const ShopName = styled.h1`
  font-size: 18px;
  color: #fff;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: 20px;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Shop = ({ onAdd, onRemove, numItem }) => {
  return (
    <ShopStyle>
      <ShopName>/stripe/donut</ShopName>
      <Image src="./donut.png" width="100px"></Image>
      <Controls>
        <Quantity onAdd={onAdd} onRemove={onRemove} quantity={numItem} />
      </Controls>
    </ShopStyle>
  );
};

export default Shop;
