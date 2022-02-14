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
