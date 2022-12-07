import React, { useState } from "react";
import { Heart } from "react-feather";
import { FaGithub } from "react-icons/fa";
import { Box, Text, Link } from "@chakra-ui/react";
export default function Footer() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="10px"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text>Made with</Text>
        <Heart
          onClick={handleClick}
          fill={clicked ? "red" : "none"}
          color="red"
        />
        <Text>NextJs + Auth </Text>
        <Text></Text>
        <Link href="https://github.com/notageek-guy/resume-maker">
          <FaGithub size={20} />
        </Link>
      </Box>
    </Box>
  );
}
