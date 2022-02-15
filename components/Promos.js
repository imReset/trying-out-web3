import React from "react";
import styled from "styled-components";

function Promos() {
  return (
    <Wrapper>
      <OfferCard>
        <Title>Yield earned</Title>
        <Description>Earn up to 3% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ fontSize: "1.5rem" }}>
          $0.00066 <span>2.8% APY</span>
        </Additional>
      </OfferCard>
      <OfferCard>
        <Title>Learn and Earn</Title>
        <Description>Earn up to 2.8% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ color: "#3773f5" }}>Verify Identity</Additional>
      </OfferCard>
    </Wrapper>
  );
}

export default Promos;
