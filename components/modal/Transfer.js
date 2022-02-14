import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaWallet } from "react-icons/fa";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";

function Transfer({ selectedToken, setAction, thirdWebTokens, walletAddress }) {
  const [amount, setAmount] = useState();
  const [recepient, setRecepient] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [activeThirdWebToken, setActiveThirdWebToken] = useState();
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

    if (activeThirdWebToken) {
      getBalance();
    }
  }, [activeThirdWebToken]);

  const sendCrypto = async (amount, recepient) => {
    if (activeThirdWebToken && amount && recepient) {
      setAction("tranferring...");

      const tx = await activeThirdWebToken.transfer(
        recepient,
        amount.toString().concat("000000000000000000")
      );

      setAction("transferred");
    } else {
      console.error("Missing required fields");
    }
  };

  return (
    <Wrapper>
      <Amount>
        <FlexInputContainer>
          <FlexInput
            placeholder="0"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>{selectedToken.symbol}</span>
        </FlexInputContainer>
        <Warning amount={amount}>Amount is a required field</Warning>
      </Amount>
      <TransferForm>
        <Row>
          <FieldName>To</FieldName>
          <Icon>
            <FaWallet></FaWallet>
          </Icon>
          <Recipient
            placeholder="Address"
            value={recipient}
            onChange={(e) => setRecepient(e.target.value)}
          />
        </Row>
        <Divider />
        <Row>
          <FieldName>Pay With</FieldName>
          <CoinSelectList onClick={() => setAction("select")}>
            <Icon>
              <img src={imageUrl} alt="coin" />
            </Icon>
          </CoinSelectList>
        </Row>
      </TransferForm>
      <Row>
        <Button onClick={() => sendCrypto(amount, recipient)}>Continue</Button>
      </Row>
      <Row>
        <BalanceTitle>{selectedToken.name} Balance</BalanceTitle>
        <Balance>
          {balance} {selectedToken.name}
        </Balance>
      </Row>
    </Wrapper>
  );
}
