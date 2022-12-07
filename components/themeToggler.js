import { Button, useColorMode } from "@chakra-ui/react";

import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode} variant="none">
        {colorMode === "light" ? (
          <MdDarkMode size={28} />
        ) : (
          <MdOutlineDarkMode size={28} />
        )}
      </Button>
    </header>
  );
}

export default ThemeToggler;
