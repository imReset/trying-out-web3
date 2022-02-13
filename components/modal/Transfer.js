import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaWallet } from "react-icons/fa";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";

function Transfer({ selectedToken, setAction, thirdWebTokens, walletAddress }) {
  const [amount, setAmount] = useState();
  const [recepient, setRecepient] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [activeThridWebToken, setActiveThirdWebToken] = useState();
  const [balance, setBalance] = useState("Fetching...");

  useEffect(() => {
    const activeToken = thirdWebTokens.find(
      (token) => token.address === selectedToken.contractAddress
    );
    setActiveThirdWebToken(activeToken);
  }, [thirdWebTokens, selectedToken]);

  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();
    setImageUrl(url);
  }, [selectedToken]);

  useEffect(() => {
    const getBalance = async () => {
      const balance = await setActiveThirdWebToken.balanceOf(walletAddress);
      setBalance(balance.displayValue);
    };
  });
}
