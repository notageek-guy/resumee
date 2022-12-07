import React from "react";
import { Box, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import SideAvatar from "./SideAvatar";
import ThemeToggler from "./themeToggler";
export default function Navbar() {
  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="gray.800"
        color="white"
      >
        <Box>
          <Heading
            as="h1"
            size={{ base: "md", md: "lg" }}
            letterSpacing={"tighter"}
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            fontWeight="extrabold"
          >
            resumemake
          </Heading>
        </Box>
        <Box>
          <Stack direction="row" spacing={4}>
            <SideAvatar />
            <ThemeToggler />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
