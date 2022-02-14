import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";
import { BiCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

function Receive({ setAction, selectedToken, walletAddress }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();
    setImageUrl(url);
  }, [selectedToken]);
}

return (
  <Wrapper>
    <Content>
      <QRContainer>
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${walletAddress}`}
          alt=""
        />
      </QRContainer>
      <Divider />
      <Row>
        <CoinSelectList>
          <Icon>
            <img src={imageUrl} alt={selectedToken.name} />
          </Icon>
          <CoinName>{selectedToken.name}</CoinName>
        </CoinSelectList>
      </Row>
      <Divider />
      <Row>
        <div>
          <Title>{selectedToken.symbol} Address</Title>
          <Address>{walletAddress}</Address>
        </div>
        <CopyButton
          onClick={() => {
            navigator.clipboard.writeText(walletAddress);
            setCopied(true);
          }}
        >
          {copied ? <FaCheck style={{ color: "#27ad75" }} /> : <BiCopy />}
        </CopyButton>
      </Row>
    </Content>
  </Wrapper>
);
