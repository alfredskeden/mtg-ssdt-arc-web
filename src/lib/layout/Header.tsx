import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const hoverStyle = { _hover: { textDecoration: "underline" } };

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" mb="8">
      <Link href="/" passHref>
        <a>
          <Heading size="md" sx={hoverStyle}>
            Magic the Gathering
            <br />
            Super Sealed Tournament <br />
            ARC - UMAIN
          </Heading>
        </a>
      </Link>
      <Box
        marginLeft="auto"
        display="flex"
        gap={4}
        alignContent="center"
        alignItems="center"
      >
        <Link href="/sign-up" passHref>
          <a>
            <Text sx={hoverStyle}>Sign up now!</Text>
          </a>
        </Link>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
