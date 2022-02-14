import React from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";

function Coin({ coin }) {
  return (
    <Wrapper>
      <div>
        <div style={{ flex: 3 }}>
          <NameCol>
            <CoinIcon>
              <Image src={coin.logo} alt={coin.name} />
            </CoinIcon>
            <div>
              <Title>{coin.name}</Title>
              <Subtitle>{coin.sign}</Subtitle>
            </div>
          </NameCol>
        </div>
        <div style={{ flex: 2 }}>
          <Title>{"$" + coin.balanceUsd}</Title>
          <Subtitle>{coin.balanceCoin + " " + coin.sign}</Subtitle>
        </div>
        <div style={{ flex: 1 }}>
          <Title>{"$" + coin.priceUsd}</Title>
          <div style={{ color: coin.change < 0 ? "#f0616d" : "#26ad75" }}>
            {coin.change > 0 && "+"}
            {coin.change}%
          </div>
        </div>
        <div style={{ flex: 1 }}>{coin.allocation}%</div>
        <div style={{ flex: 0 }}>
          <BsThreeDotsVertical />
        </div>
      </div>
    </Wrapper>
  );
}
