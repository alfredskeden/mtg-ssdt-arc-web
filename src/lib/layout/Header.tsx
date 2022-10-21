import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const hoverStyle = { _hover: { textDecoration: "underline" } };

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" mb="8">
      <Link href="/" passHref>
        <a>
          <Heading size="md" sx={hoverStyle}>
            Magic the Gathering - Super Sealed Tournament <br />
            ARC - UMAIN
          </Heading>
        </a>
      </Link>
    </Flex>
  );
};

export default Header;
