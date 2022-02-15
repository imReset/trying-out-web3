import { useState } from "react";
import styled from "styled-components";
import CoinbaseLogo from "../assets/logo.png";
import Image from "next/image";
import { navItems } from "../data/navItems";

function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(navItems[0].icon);

  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <Image src={CoinbaseLogo} alt="Coinbase Logo" />
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((item, index) => (
          <NavItem key={index} onClick={() => setActiveIcon(item.title)}>
            <NavIcon style={{ color: item.title === activeIcon && "#3773f5" }}>
              {item.icon}
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </NavItem>
        ))}
      </NavItemsContainer>
    </Wrapper>
  );
}

export default Sidebar;