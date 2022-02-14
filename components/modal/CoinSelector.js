import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";
import { BiCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

function Receive({ setAction, selectedToken, walletAddress }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();
    setImageUrl(url);
  }, [selectedToken]);
}
