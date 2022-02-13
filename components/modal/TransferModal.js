import { useState } from "react";
import styled from "styled-components";
import Transfer from "./Transfer";
import CoinSelector from "./CoinSelector";
import { TailSpin } from "react-loader-spinner";
import Recieve from "./Recieve";

function TransferModal({ sanityTokens, thirdWebTokens, walletAdress }) {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

  const selectedStyle = {
    color: "#3773f5",
  };
  const unselectedStyle = {
    border: "1px solid #282b2f",
  };

  const selectedModal = (option) => {
    switch (option) {
      case "send":
        return (
          <Transfer
            selectedToken={selectedToken}
            setAction={setAction}
            thirdWebTokens={thirdWebTokens}
            walletAdress={walletAdress}
          />
        );
      case "recieve":
        return (
          <Recieve
            setAction={setAction}
            selectedToken={selectedToken}
            walletAdress={walletAdress}
          />
        );
      case "select":
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            walletAdress={walletAdress}
          />
        );
        case "transferring":
          retunr (
            <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              
            }}
          )
    }
  };
}
