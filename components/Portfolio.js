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
}
