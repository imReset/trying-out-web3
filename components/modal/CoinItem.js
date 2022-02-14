import { useEffect, useState } from "react";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";
import { FaCheck } from "react-icons/fa";

function CoinItem({
  token,
  sender,
  selectedToken,
  setSelectedToken,
  thirdWebTokens,
  sanityTokens,
  setAction,
}) {
  const [balance, setBalance] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      let activeThirdWebToken;

      thirdWebTokens.map((thirdWebToken) => {
        if (thirdWebToken.address === token.contractAddress) {
          activeThirdWebToken = thirdWebToken;
        }
      });
      const balance = await activeThirdWebToken.balanceOf(sender);
      return await setBalance(balance.displayValue.split(".")[0]);
    };

    const getImageUrl = async () => {
      const imgUrl = imageUrlBuilder(client).image(token.logo).url();
      setImageUrl(imgUrl);
    };

    getImageUrl();
    getBalance();
  }, []);
}

return (
  <Wrapper
    style={{
      backgroundColor: selectedToken.name === token.name && "#141519",
    }}
    onClick={() => setSelectedToken(token)}
  >
    <Main>
      <Icon>
        <img src={imageUrl} alt={token.name} />
      </Icon>
      <NameDetails>
        <Name>{token.name}</Name>
        <Symbol>{token.symbol}</Symbol>
      </NameDetails>
    </Main>
    <Balance>
      {balance} {token.symbol}
    </Balance>
    <IsSelected>
      {selectedToken.contractAddress === token.contractAddress && <FaCheck />}
    </IsSelected>
  </Wrapper>
);

export default CoinItem;
