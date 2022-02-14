import styled from "styled-components";
import CoinItem from "./CoinItem";

function CoinSelector({
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdWebTokens,
  walletAddress,
}) {
  return (
    <Wrapper>
      <Title>Select A Token</Title>
      <CoinList>
        {sanityTokens.map((token) => (
          <CoinItem
            key={token.contractAddress}
            token={token}
            sender={walletAddress}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            thirdWebTokens={thirdWebTokens}
            sanityTokens={sanityTokens}
            setAction={setAction}
          />
        ))}
      </CoinList>
    </Wrapper>
  );
}
