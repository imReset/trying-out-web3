import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { coins } from "../data/coins";
import Coin from "./Coin";
import BalanceChart from "./BalanceChart";
import { useEffect, useState } from "react";

function Portfolio({ thirdWebTokens, sanityTokens, walletAddress }) {
  const [walletBalance, setWalletBalance] = useState(0);

  const tokenToUsd = {};
  for (const token of sanityTokens) {
    tokenToUsd[token.contractAddress] = Number(token.usdPrice);
  }

  useEffect(() => {
    const calculateTotalBalance = async () => {
      const totalBalance = await Promise.all(
        thirdWebTokens.map(async (token) => {
          const balance = await token.balanceOf(walletAddress);
          return Number(balance.displayValue) * tokenToUsd[token.address];
        })
      );

      setWalletBalance(totalBalance.reduce((acc, cur) => acc + cur, 0));
    };

    return calculateTotalBalance();
  }, [thirdWebTokens, sanityTokens]);
}
