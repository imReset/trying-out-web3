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

  return (
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <BalanceTitle>Portfolio Balance</BalanceTitle>
            <BalanceValue>
              {"$"}
              {walletBalance.toLocaleString()}
            </BalanceValue>
          </div>
          <BalanceChart />
        </Chart>

        <TableItem>
          <Title>Your Assets</Title>
        </TableItem>
        <Divider />
        <Table>
          <TableItem>
            <TableRow>
              <div style={{ flex: 3 }}>Name</div>
              <div style={{ flex: 2 }}>Balance</div>
              <div style={{ flex: 1 }}>Price</div>
              <div style={{ flex: 1 }}>Allowcation</div>
              <div style={{ flex: 0 }}>
                <BsThreeDotsVertical />
              </div>
            </TableRow>
          </TableItem>
          <Divider />
          <div>
            {coins.map((coin, index) => (
              <div key={index}>
                <Coin coin={coin} />
                <Divider />
              </div>
            ))}
          </div>
        </Table>
        <PortfolioTable />
      </Content>
    </Wrapper>
  );
}
