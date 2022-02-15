import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

function Main({ thirdWebTokens, sanityTokens, walletAddres }) {
  return (
    <Wrapper>
      <Portfolio
        walletAddres={walletAddres}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWeb}
      />
      <Promos />
    </Wrapper>
  );
}

export default Main;
